var photos = [];
var partners = [
    "partner-bustour",
    "partner-cabinrental",
    "partner-campingadv",
    "partner-collegetours",
    "partner-rentalbike",
    "partner-tourgroup"
];

var partnerList = [];
var openList = "<li class='partner'>";
var closeList = "</li>";

for (var i = 0; i < partners.length; i++) {
    var partnerImage = "<img src='images2/partners/" + partners[i] + ".png'>";
    var image = openList + partnerImage + closeList;
    partnerList.push(image);
}

document.getElementById("partners").innerHTML = partnerList.join("");