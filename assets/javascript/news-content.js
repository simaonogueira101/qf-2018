var newsContent = new XMLHttpRequest();

newsContent.onreadystatechange = function() {
  if (newsContent.readyState == XMLHttpRequest.DONE) {
    if (newsContent.status == 200) {
      newsObject();
    }
    else if (newsContent.status == 400) {
      console.log('There was an error 400');
    }
    else {
      console.log('something else other than 200 was returned');
    }
  }
};

newsContent.open("GET", 'https://spreadsheets.google.com/feeds/list/181iap19b23fiHMLxChahvZPhg5mng8b0P6EJTGx34Lk/od6/public/values?alt=json', true);
newsContent.send();

function newsObject() {
  var originalText = newsContent.responseText;
  var textObject = JSON.parse(originalText);

  var newsTotal = textObject.feed.entry.length;

  for(var i=0; i<newsTotal; i++) {
    var link = document.createElement("a");
    var realNumber = i + 1;
    link.href = "../read/?id=" + realNumber;
    link.classList.add("contact", "news");

    var top = document.createElement("div");
    top.classList.add("contact-top", "news");

    var square = document.createElement("div");
    square.classList.add("square", "news");
    square.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><g><g><g><polygon points="11 8 11 0 8 0 8 8 0 8 0 11 8 11 8 19 11 19 11 11 19 11 19 8 11 8"/></g></g></g></svg>'

    var bottom = document.createElement("div");
    bottom.classList.add("contact-bottom", "news");

    var name = document.createElement("p");
    name.classList.add("name", "news");
    name.innerHTML = textObject.feed.entry[i].gsx$título.$t;
    var date = document.createElement("p");
    date.classList.add("date", "news");
    date.innerHTML = textObject.feed.entry[i].gsx$data.$t;
    var desc = document.createElement("pre");
    desc.classList.add("description", "news");
    desc.innerHTML = textObject.feed.entry[i].gsx$descrição.$t;

    if(textObject.feed.entry[i].gsx$imagem.$t != "") {
      top.style.backgroundImage = "url('"+ textObject.feed.entry[i].gsx$imagem.$t +"')";
      top.style.backgroundPosition = "center";
      top.style.backgroundSize = "cover";
      top.style.backgroundRepeat = "no-repeat";
    }

    bottom.appendChild(name);
    bottom.appendChild(date);
    bottom.appendChild(desc);

    link.appendChild(top);
    link.appendChild(square);
    link.appendChild(bottom);

    document.querySelector(".contact-grid").appendChild(link);
  }
}
