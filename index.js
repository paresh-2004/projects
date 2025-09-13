const paraBox = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    paraBox.innerHTML = date.toLocaleTimeString();
}, 1000);