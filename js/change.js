var images = new Array('images/header1.png', 'images/header2.png', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg');
  var l = images.length;
  var random_no = Math.floor(l*Math.random());
  document.getElementById("header").src = images[random_no];