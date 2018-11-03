var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Sanjay2.png') {
      myImage.setAttribute ('src','images/Sanjay1.JPG');
    } else {
      myImage.setAttribute ('src','images/Sanjay2.png');
    }
}
