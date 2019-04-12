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

//BOX 3

var box3 = document.getElementById("box3");
//function pick random color
function rgbColors3() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }
    return rgbArr;
}

//When the user mouses down on this box,
box3.addEventListener("mousedown", function() {
    //its background should change to a randomly selected color.
    var rgb = rgbColors3();
    console.log("rgb ", rgb);

    // container adding the random color
    box3.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//When the user mouses up on it,
box3.addEventListener("mouseup", function() {
    var rgb = rgbColors3();
    // its background should change to another randomly selected color.
    box3.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//BOX 6

var box6 = document.getElementById("box6");
//function pick random color
function rgbColors6() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }
    return rgbArr;
}

//When the user mouses down on this box,
box6.addEventListener("mousedown", function() {
    //its background should change to a randomly selected color.
    var rgb = rgbColors6();
    console.log("rgb ", rgb);

    // container adding the random color
    box6.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//When the user mouses up on it,
box6.addEventListener("mouseup", function() {
    var rgb = rgbColors6();
    // its background should change to another randomly selected color.
    box6.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//BOX 9

var box9 = document.getElementById("box9");
//function pick random color
function rgbColors9() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }
    return rgbArr;
}

//When the user mouses down on this box,
box9.addEventListener("mousedown", function() {
    //its background should change to a randomly selected color.
    var rgb = rgbColors9();
    console.log("rgb ", rgb);

    // container adding the random color
    box9.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

//When the user mouses up on it,
box9.addEventListener("mouseup", function() {
    var rgb = rgbColors9();
    // its background should change to another randomly selected color.
    box9.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});
