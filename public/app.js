var catArray = [
  { name: "Top Cat", food: "Chum", photo: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  { name: "Benny the Ball", food: "Pal", photo: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  { name: "Choo-choo", food: "Officer Dibble", photo: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}
];


var createCat = function(cat) {
  var catUl = document.createElement("ul");
  catUl.classList.add("cat");

  var catLiName = document.createElement("li");
  catLiName.innerText = cat.name;

  var catLiFood = document.createElement("li");
  catLiFood.innerText = cat.food;

  var catLiPhoto = document.createElement("li");

  var img = document.createElement("img");
  catLiPhoto.innerText = cat.photo;
  catLiPhoto.innerHTML = "<img width=500 src="cat.photo">";
  catLiPhoto.appendChild(img);

  catUl.appendChild(catLiName);
  catUl.appendChild(catLiFood);
  catUl.appendChild(catLiPhoto);

  var cats = document.querySelector("#cats");
  cats.appendChild(catUl);

//  debugger;
};

var app = function(){
  catArray.forEach(createCat);
}

window.onload = app;
