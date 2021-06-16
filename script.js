var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
                templateUrl: "home.html"
            }

        )
        .when("/about", {
            templateUrl: "about.html"
        })
        //     .when("/profile", {
        //         templateUrl: "profile.html"
        //     })
        //     .when("/login", {
        //         templateUrl: "login.html"
        //     })
        //     .when("/contact", {
        //         templateUrl: "contact.html"
        //     })

    // .when("/recipe", {
    //     templateUrl: "recipe.html"
    // })

})