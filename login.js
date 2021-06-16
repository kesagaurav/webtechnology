function Gaurav1() {
    var inputs = document.getElementById("gaurav");
    var letter = document.getElementById("letter");
    var numbers = document.getElementById("number");
    var capital = document.getElementById("capital");
    var length = document.getElementById("length");
    var specialCharacter = document.getElementById("special_character");
    inputs.onfocus = function() {
        document.getElementById("message").style.display = "block";
    }
    inputs.onblur = function() {
        document.getElementById("message").style.display = "none";
    }

    inputs.onkeyup = function() {
        var lowerCaseLetters = /[a-z]/g;
        if (inputs.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
        var upperCaseLetter = /[A-Z]/g;
        if (inputs.value.match(upperCaseLetter)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("valid");
        }

        var Numbers = /[0-9]/g;
        if (inputs.value.match(Numbers)) {
            numbers.classList.remove("invalid");
            numbers.classList.add("valid");
        } else {
            numbers.classList.remove("valid");
            numbers.classList.add("valid");
        }


        if (inputs.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }
}

function Validate() {
    var username = document.getElementById("gaurav2").value;
    var password = document.getElementById("gaurav").value;

    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);


    if (username == "gaurav" && password == "123456") {
        swal({
            title: "Good job man!",
            text: "You logged successfully",
            icon: "success",
        });


        window.location.href = "profile.html";
        return;

    } else {
        swal({
            title: " not a Good job man!",
            text: "Please try again invalid username and password !",
            icon: "error",
        });
        return true;

    }








}


function location() {
    window.location.href = "profile.html";
}




// function validateUser(e, r, t) {
//     for (var s = 0, a = 0; a < t.length; a++) {
//         var i = t[a];
//         if (i.username === e) {
//             s += 1, i.password === r && (s += 1, window.localStorage.setItem(currentUser, JSON.stringify(i)));
//             break
//         }
//     }
//     return s
// }

// function displayLoginFeedback(e, r) {
//     var t = "",
//         s = { right: 0 },
//         a = "#8BC34A",
//         i = !1;
//     switch (r) {
//         case 0:
//             t = "user does not exist", a = "red";
//             break;
//         case 1:
//             t = "incorrect password", a = "orange";
//             break;
//         case 2:
//             t = "login successful", a = "#8BC34A", e.getScript("./js/isloggedin.js"), i = !0;
//             break;
//         default:
//             t = "unknown error", a = "red"
//     }
//     var o = e("#login-status");
//     o.text(t), o.css("background-color", a), o.animate(s, 2e3), setTimeout(redirectToProfile, 3e3)
// }

// function redirectToProfile() {
//     jQuery(location).attr("href", "profile.html")
// }
// var listOfUsers = "userlist",
//     currentUser = "currentuser";
// window.localStorage.getItem(listOfUsers) || jQuery.getScript("./js/loaddata.min.js"), jQuery(document).ready(function(e) {
//     e("form#login-form").submit(function(r) {
//         r.preventDefault(), e("#login-status").css("right", "-12em");
//         var t = e("input#name").val(),
//             s = e("input#userpassword").val();
//         null === window.localStorage.getItem(listOfUsers) && e.getScript("./js/loaddata.min.js");
//         var a = JSON.parse(window.localStorage.getItem(listOfUsers)),
//             i = validateUser(t, s, a);
//         displayLoginFeedback(e, i)
//     })
// });
//