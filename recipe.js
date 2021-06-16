var recipe = [{
        id: 1,
        name: 'barbeque chicken',
        caterogy: 'chicken',
        time: 10,

        prepTime: 20,
        cooktime: 35,
        instructions: [
            'make an recipe',
            'this is the second istruction',
            'this is the third instruction'
        ],
        ingredients: [
            "2 quarts of water",
            "chicken peices",
            "masala",
            "greenchilles",
            "salt",
        ]
    },
    {
        id: 2,
        name: 'hyderabadi biryani',
        caterogy: 'chicken',
        time: 15,

        prepTime: 30,
        cooktime: 15,
        instructions: [
            'maximum type of instruction'
        ],
        ingredients: [
            "chicken peices",
            "masala",
            "greenchilles",
            "2 quarts water",
            "1 cup sugar",
            "1sp salt",
        ]
    }
];

loadReceipes();

function loadReceipes() {
    var listDiv = createRecipeList("recipe-list", "recipe-list");
    document.getElementById("content").appendChild(listDiv);

    for (var i = 0; i < recipe.length; i++) {
        var recipes = recipe[i];
        //    var listItem=document.createElement("li");
        //    listItem.innerHTML="<a href='#recipes-" + i + "'>" + recipes.name + "</a>" + "<br/>";
        //    listDiv.appendChild(listItem);






        var mainDiv = createDivWithClassAndId("recipes", "recipes-" + i);




        createDivChild(mainDiv, "recipe-name", "recipe-name-" + i, recipes.name);
        createDivChildWithName(mainDiv, "recipe-prep-time small", "recipe-prep-time-" + i, recipes.prepTime, "Prep Time: ");
        createDivChildWithName(mainDiv, "recipe-prep-time small", "recipe-prep-time-" + i, recipes.cooktime, "cook Time: ");
        createDivChildFromArray(mainDiv, "recipe-ingredients", "recipe-ingredients-" + i, recipes.ingredients, "Ingredients: ");
        createDivChildFromArray(mainDiv, "recipe-instructions", "recipe-instructions-" + i, recipes.instructions, "Instructions: ");
        createRecipeEle("recipeName", recipes.name);
        createRecipeEle("prepTime", recipes.prepTime);

        var button = createButtonChildWithClass(mainDiv, "button", "recipe-timer-" + i, "Start Timer");

        bindTimer(button, recipes);

        document.getElementById("content").appendChild(mainDiv);



    }
}

function bindTimer(elem, recipes) {
    elem.addEventListener("click", function() {
        var elem = g("timer");
        var count = recipes.time;
        count = count * 60;
        var c = convertSecondsToString(count);
        elem.innerHTML = c;

        var e = g("timerName");
        e.innerHTML = recipes.name;

        if (timer) {
            clearInterval(timer);
        }

        timer = setInterval(function() {
            if (count <= 0 || isNaN(count)) {
                clearInterval(timer);
            }
            var c = convertSecondsToString(count);
            elem.innerHTML = c;

            count--;
        }, 1000);
    });
}



function createRecipeList(listclass, listid) {
    var list = document.createElement("ol");
    list.setAttribute("id", listid);
    list.className = listclass;
    return list;
}



function createDivWithClassAndId(clazz, id) {
    var div = document.createElement("div");
    div.className = clazz;
    div.setAttribute("id", id);
    return div;
}

function createRecipeEle(ele, txt) {
    var elem = g(ele);
    if (elem != null) {
        elem.innerHTML = txt;
    }
}





function createDivChildWithName(e, c, i, co, t) {
    var div = document.createElement("div");
    div.className = c;
    div.setAttribute("id", i);
    div.innerHTML = t + "" + co;
    e.appendChild(div);

    return div;
}



function createDivChildFromArray(e, c, i, a, t) {
    var div = document.createElement("div");
    div.className = c;
    div.setAttribute("id", i);
    var s = "";
    if (a != null && a.length > 0) {
        s += "<ol>";
        for (var j = 0; j < a.length; j++) {
            s += "<li>" + a[j] + "</li>";
        }
        s += "</ol>";
        div.innerHTML = t + "" + s;
    }
    e.appendChild(div);
}



function createDivChild(elem, clazz, id, content) {
    var div = document.createElement("div");
    div.className = clazz;
    div.setAttribute("id", id);
    div.innerHTML = content;
    elem.appendChild(div);
}




function createButtonChildWithClass(e, c, i, t) {
    var div = document.createElement("button");
    div.className = c;
    div.setAttribute("id", i);
    div.innerHTML = t;
    e.appendChild(div);

    return div;
}





function convertSecondsToString(seconds) {
    var r = seconds % 60;
    var m = Math.floor(seconds / 60);
    if (r < 10) {
        r = "0" + r;
    }
    if (m < 10) {
        m = "0" + m;
    }
    return m + ":" + r;
}




function g(id) {
    return document.getElementById(id);
}







function Recipes() {
    var RecipeList = JSON.stringify(recipe[0]);
    sessionStorage.setItem("recipeList", RecipeList);
}