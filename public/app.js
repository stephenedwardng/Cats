var catArray = [
  { name: "Boba", food: "Sock fluff", photo: "http://i.imgur.com/4ZR55wW.jpg"},
  { name: "Barnaby", food: "Tuna", photo: "http://i.imgur.com/t8GZ9Ob.png"},
  { name: "Max", food: "Whiskas Temptations", photo: "http://i.imgur.com/kSx427l.jpg"},
  { name: "Top Cat", food: "Chum", photo: "http://i.imgur.com/uwxyY0v.png"},
  { name: "Benny the Ball", food: "Pal", photo: "http://i.imgur.com/xa1qZNb.png"},
  { name: "Choo-choo", food: "Officer Dibble", photo: "https://i.redd.it/y6imr5piyvbz.jpg"}
];


var createCat = function(cat) {
  var catUl = document.createElement("ul");
  catUl.classList.add("cat");

  var catLiName = document.createElement("li");
  catLiName.innerText = cat.name;

  var catLiFood = document.createElement("li");
  catLiFood.innerText = cat.food;

  var catLiPhoto = document.createElement("li");

  var image = new Image(500);
  image.src = cat.photo;
  catLiPhoto.appendChild(image);

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
