var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var usercame = document.referrer;

if (usercame == 'http://localhost:82/services') {
    modal.style.display = "block";
    document.body.style.overflowY = 'hidden';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflowY = 'scroll';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflowY = 'scroll';
    }
}