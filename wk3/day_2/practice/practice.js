// Take a look at the HTML file and CSS file.
// Familiarize yourself with what is already set up for you.
// */ First finish setting up in HTML with all of the images. **
// Next set the CSS properties to fit the images appropriately and any other necessary CSS.
// Lastly, work inside this file to get the functionality to work!

var position = 0;

function scrollPrev() {
  if (position < 5) {
    var slider = document.getElementById("imgSlider");
    position += 1;
    var offset = position * 400 + 4;
    slider.style.transform = "translateY(-" + offset + "px)";
  };
  // code here!
};
console.log(scrollPrev());


function scrollNext() {
  if (position > 0) {
    var slider = document.getElementById("imgSlider");
    position -= 1;
    var offset = position * 400 + 4;
    slider.style.transform = "translateY(-" + offset + "px)";
  };
  // code here!
};

