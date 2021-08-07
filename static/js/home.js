function toggleToCreate() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("createForm").style.display = "block";
}

function toggleToLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("createForm").style.display = "none";
}


document.getElementById('buttong').addEventListener("click", function () {
    window.location.href = "/services/#what_get";
});

document.getElementById('buttonp').addEventListener("click", function () {
    window.location.href = "/services/#what_get";
});

document.getElementById('Guitar89').addEventListener('click', function () {
    window.location.href = '/services/#get_guitar';
});

document.getElementById('Piano89').addEventListener('click', function () {
    window.location.href = '/services/#get_piano';
});

