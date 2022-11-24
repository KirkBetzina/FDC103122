var position = 0;


function ScrollRight() {
  if (position < 25) {
    var slider = document.getElementById("slider");
    position += 1;
    var offset = position * 700 + 10;
    slider.style.transform = "translateY(-" + offset + "px)";
  };
};

function invisibleButton() {
    document.querySelector('#buttonRight').click();
    if (position == 25){
        position
    }
};
setInterval(invisibleButton, 2000);


// function capturePost() {
//     const text = document.getElementById("message").value;

//     var postButton = document.getElementById("userInput");
//     var comment = document.getElementById(text);
//     var newDiv = document.createElement('div');
//     var newP = document.createElement('p');
//     newDiv.appendChild(newP);
//     newP.innerText = text;
//     newDiv.id="New"
//     var MessageBox = document.getElementById('postDisplay');
//     MessageBox.prepend(newDiv);
    

    

// };





function postFeedback(){
    const text = document.getElementById("message").value;
    const newImg = document.getElementById("imageUrl").value;
    //username element
    const userName = document.createElement("p");
    userName.innerText="Username:"

    const renderedText = document.getElementById("renderedMessage")
    const divElement = document.createElement("div")
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", newImg);

    if(newImg != ""){
        renderedText.prepend(imgElement);
    }
    if(text != ""){
        renderedText.prepend(divElement);
    }
    
    renderedText.prepend(userName);
    divElement.classList.add("comment")
    divElement.innerHTML = text;
    document.getElementById("message").value = "";
    document.getElementById("imageUrl").value = "";
    
};

var clickHere = document.getElementById(clickhere);

function clicked() {
    clickHere = alert('You Signed In!')
}

