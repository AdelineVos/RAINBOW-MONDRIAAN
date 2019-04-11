//BOX 1

var box1 = document.getElementById("box1");
//function pick random color
function rgbColors1() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }
    return rgbArr;
}

//When the user mouses down on this box,
box1.addEventListener("mousedown", function() {
    //its background should change to a randomly selected color.
    var rgb = rgbColors1();
    console.log("rgb ", rgb);

    // container adding the random color
    box1.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//When the user mouses up on it,
box1.addEventListener("mouseup", function() {
    var rgb = rgbColors1();
    // its background should change to another randomly selected color.
    box1.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//BOX 2

var box2 = document.getElementById("box2");
//function pick random color
function rgbColors2() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }
    return rgbArr;
}

//When the user mouses down on this box,
box2.addEventListener("mousedown", function() {
    //its background should change to a randomly selected color.
    var rgb = rgbColors2();
    console.log("rgb ", rgb);

    // container adding the random color
    box2.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//When the user mouses up on it,
box2.addEventListener("mouseup", function() {
    var rgb = rgbColors2();
    // its background should change to another randomly selected color.
    box2.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//BOX 2

var box = document.getElementById("box2");
//function pick random color
function rgbColors() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }
    return rgbArr;
}

//When the user mouses down on this box,
box.addEventListener("mousedown", function() {
    //its background should change to a randomly selected color.
    var rgb = rgbColors();
    console.log("rgb ", rgb);

    // container adding the random color
    box.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//When the user mouses up on it,
box.addEventListener("mouseup", function() {
    var rgb = rgbColors();
    // its background should change to another randomly selected color.
    box.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});
