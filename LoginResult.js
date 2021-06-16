window.addEventListener('load', () => {
    const username = localStorage.getItem("Username");
    const password = localStorage.getItem("Password");

    document.getElementById("g1").innerHTML = username;
    document.getElementById("g2").innerHTML = password;
});