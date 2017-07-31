// 1. Pull out quote creation logic into separate function (possibly more than one function)
// 2. Loop over quotes array and use the function from 1 to add a quote to the list

var catArray = [
  { name: "Top Cat", food: "Other cats", photo: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  { name: "Benny the Ball", name: "Dogs", photo: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  { name: "Choo-choo", name: "Officer Dibble", photo: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}
];

var createCat = function(cat) {
  // 1. Create the parent article container and give it a class
  var catUl = document.createElement("ul");
  catUl.classList.add("cat");

  // 2. Create the first child - blockquote, Amend the inner text of the blockquote
  var catLiName = document.createElement("li");
  catLiName.innerText = cat.name;

  // 3. Create the another element
  var catLiFood = document.createElement("li");
  catLiFood.innerText = cat.food;

  // 3. Create the another element
  var catLiPhoto = document.createElement("li");
  catLiPhoto.innerText = cat.photo;

  // 5. Attach the blockquote to the article
  catUl.appendChild(catLiName);
  catUl.appendChild(catLiFood);
  catUl.appendChild(catLiPhoto);

  // 6. Attach the article to the quotes list on the page
  var cats = document.querySelector("#cats");
  cats.appendChild(catUl);

//  debugger;
};

var app = function(){
  catArray.forEach(createCat);
}

window.onload = app;
