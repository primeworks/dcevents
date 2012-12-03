(function ($) {
	var images = new Array('../slides/header1.png', '../slides/header2.png', '../slides/image3.jpg', '../slides/image4.jpg', '../slides/image5.jpg');
  var l = images.length;
  var random_no = Math.floor(l*Math.random());
  document.getElementById("header").src = images[random_no];
}());