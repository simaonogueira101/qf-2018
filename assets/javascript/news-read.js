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

  var urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('id') > newsTotal) {
    document.querySelector(".right").style.display = "none";
    document.querySelector(".left").style.display = "none";
  }

  if(urlParams.has('id') && urlParams.get('id') != 0) {
    var thisNews = urlParams.get('id') - 1;

    document.querySelector(".name").innerHTML = name.innerHTML = textObject.feed.entry[thisNews].gsx$título.$t;
    document.querySelector(".date").innerHTML = name.innerHTML = textObject.feed.entry[thisNews].gsx$data.$t;
    document.querySelector(".description").innerHTML = name.innerHTML = textObject.feed.entry[thisNews].gsx$texto.$t;

    if(textObject.feed.entry[thisNews].gsx$imagem.$t != "") {
      document.querySelector(".contact-top").style.backgroundImage = "url('"+ textObject.feed.entry[thisNews].gsx$imagem.$t +"')";
      document.querySelector(".contact-top").style.backgroundPosition = "center";
      document.querySelector(".contact-top").style.backgroundSize = "cover";
      document.querySelector(".contact-top").style.backgroundRepeat = "no-repeat";
    }

    if(thisNews + 1 == newsTotal) {
      document.querySelector(".right").style.display = "none";
    }
    if(thisNews + 1 == 1) {
      document.querySelector(".left").style.display = "none";
    }

    document.querySelector(".right").href = "../read/?id=" + (thisNews + 2);
    document.querySelector(".left").href = "../read/?id=" + thisNews;
    document.querySelector(".right p").innerHTML = textObject.feed.entry[thisNews + 1].gsx$título.$t;
    document.querySelector(".left p").innerHTML = textObject.feed.entry[thisNews - 1].gsx$título.$t;
    
  } else {
    document.querySelector(".right").style.display = "none";
    document.querySelector(".left").style.display = "none";
  }
}
