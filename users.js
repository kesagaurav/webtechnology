var users = [{
    "id": 1,
    "name": "gaurav",
    "password": "123456",
    "email": "kg@gmail.com",
    "favorite foods": [
        "chicken biryani",
        "barbeque chicken",
        "egg biryani"
    ]
}];




function validateUser() {
    var xhhr = new XMLHttpRequest();
    xhhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var userValue = JSON.stringify(users);
            localStorage.setItem("userValue", userValue);
        }
    }
    xhhr.open("GET", "user.json", true);
    xhhr.send();
}