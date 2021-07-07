function httpGetAsync(callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseURL);
    }
    xmlHttp.open("GET", "https://source.unsplash.com/random", true); // true for asynchronous 
    xmlHttp.send(null);
}

function onGetBackground(response) {
    //document.body.style.background = "#000000 url('" + response + "') no-repeat";
    document.body.classList.add("full");
    document.body.style.background = "#000000 url('" + response + "') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
}

(httpGetAsync(onGetBackground))