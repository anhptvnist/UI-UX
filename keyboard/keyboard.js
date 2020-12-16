$(function () {
    var $write = $('#write'),
        shift = false,
        capslock = false;

    $('#keyboard li').click(function () {
        var $this = $(this),
            character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

        // Shift keys
        if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
            $('.letter').toggleClass('uppercase');
            $('.symbol span').toggle();

            shift = (shift === true) ? false : true;
            capslock = false;
            return false;
        }

        // Caps lock
        if ($this.hasClass('capslock')) {
            $('.letter').toggleClass('uppercase');
            capslock = true;
            return false;
        }

        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();

            $write.html(html.substr(0, html.length - 1));
            return false;
        }

        // Special characters
        if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
        if ($this.hasClass('space')) character = ' ';
        if ($this.hasClass('tab')) character = "\t";
        if ($this.hasClass('return')) character = "\n";

        // Uppercase letter
        if ($this.hasClass('uppercase')) character = character.toUpperCase();

        // Remove shift once a key is clicked.
        if (shift === true) {
            $('.symbol span').toggle();
            if (capslock === false) $('.letter').toggleClass('uppercase');

            shift = false;
        }

        // Add the character
        $write.html($write.html() + character);
    });
});
var test = "";
var text = "";
function myFunction(event) {
    console.log("===========", event);
    // document.getElementsByClassName("area").scrollTop = document.getElementsByClassName("area").scrollHeight;
    // console.log(document.getElementsByClassName("area"));
    var code = event.keyCode;
    var id = code;
    if (code >= 48 && code < 59) {
        var id = String(code - 48)
    }
    if (code == 8) {
        var id = "delete"
    }
    if (code >= 65 && code <= 97) {
        id = String.fromCharCode(code)
    }
    if (code == 219) {
        id = "mongoac"
    }
    if (code == 220) {
        id = "gachdoc"
    }
    if (code == 221) {
        id = "dongngoac"
    }
    if (code == 186) {
        id = "champhay"
    }
    if (code == 222) {
        id = "ngoacdon"
    }
    if (code == 188) {
        id = "phay"
    }
    if (code == 190) {
        id = "cham"
    }
    if (code == 191) {
        id = "gachcheo"
    }
    if (code == 16) {
        id = "Shift"
    }
    if (code == 13) {
        id = "Enter"
    }
    if (code == 20) {
        id = "capslock"
    }
    id = String(id)
    const convertKey = {
        "81": "S",
        "87": "K",
        "69": "R",
        82: "N",
        84: "H",
        85: "*",
        73: "W",
        79: "J",
        80: "N",
        219: "T",
        65: "T",
        83: "P",
        68: "D",
        70: "N",
        71: "S",
        74: "I",
        75: "Y",
        76: "J",
        186: "G",
        222: "K",
        67: "U",
        86: "O",
        78: "E",
        77: "A",
        number: "#",

    }
    // Các phím mới nhập
    if (event.keyCode < 59 && event.keyCode >= 48) {
        steroCode = "number"
    }
    else steroCode = String(event.keyCode);
    let time = new Date();

    if (convertKey[`${steroCode}`]) {
        let text = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "." + time.getMilliseconds() + "    " + convertKey[`${steroCode}`] + "\n";
        let textLogs = document.getElementById("text-logs");
        textLogs.value += text;
    }
    test += event.key;
    let textCurrent = document.getElementById("text-current");
    let checkIcon = document.getElementById("correct");
    let falseIcon = document.getElementById("incorrect");
    if (test === "asdf") {
        checkIcon.style.display = "inline";
        falseIcon.style.display = "none";
        text += "Đảng ";
        textCurrent.value = text;
        test = "";
    }
    else {
        checkIcon.style.display = "none";
        falseIcon.style.display = "inline"
        text += "";
        textCurrent.value = text;

    }


    // Hết các phím mới nhập

    var button = document.getElementById(`${id}`)
    var id2 = "letter" + " " + id;

    var button2 = document.getElementsByClassName(id2);
    button.style.backgroundColor = "red";
    setTimeout(() => {
        button.style.backgroundColor = "";
    }, 500)
    button2[button2.length - 1].style.backgroundColor = "red";
    setTimeout(() => {
        button2[button2.length - 1].style.backgroundColor = '';
    }, 500);
    document.getElementById("key_pressed").value += String.fromCharCode(code) + '\n'


};


var testAmDau = "";
function checkAmDau(event) {
    console.log("===========", event);
    var code = event.keyCode;
    var id = code;
    if (code >= 48 && code < 59) {
        var id = String(code - 48)
    }
    if (code == 8) {
        var id = "delete"
    }
    if (code >= 65 && code <= 97) {
        id = String.fromCharCode(code)
    }
    if (code == 219) {
        id = "mongoac"
    }
    if (code == 220) {
        id = "gachdoc"
    }
    if (code == 221) {
        id = "dongngoac"
    }
    if (code == 186) {
        id = "champhay"
    }
    if (code == 222) {
        id = "ngoacdon"
    }
    if (code == 188) {
        id = "phay"
    }
    if (code == 190) {
        id = "cham"
    }
    if (code == 191) {
        id = "gachcheo"
    }
    if (code == 16) {
        id = "Shift"
    }
    if (code == 13) {
        id = "Enter"
    }
    if (code == 20) {
        id = "capslock"
    }
    id = String(id)
    const convertKey = {
        "81": "S",
        "87": "K",
        "69": "R",
        82: "N",
        84: "H",
        85: "*",
        73: "W",
        79: "J",
        80: "N",
        219: "T",
        65: "T",
        83: "P",
        68: "D",
        70: "N",
        71: "S",
        74: "I",
        75: "Y",
        76: "J",
        186: "G",
        222: "K",
        67: "U",
        86: "O",
        78: "E",
        77: "A",
        number: "#",

    }
    // Các phím mới nhập
    if (event.keyCode < 59 && event.keyCode >= 48) {
        steroCode = "number"
    }
    else steroCode = String(event.keyCode);
    let time = new Date();

    if (convertKey[`${steroCode}`]) {
        let text = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "." + time.getMilliseconds() + "    " + convertKey[`${steroCode}`] + "\n";
        let textLogs = document.getElementById("text-logs");
        textLogs.value += text;
    }
    test = event.key;
    console.log(test);
    let textCurrent = document.getElementById("text-current");
    let checkIcon = document.getElementById("correct");
    let falseIcon = document.getElementById("incorrect");
    if (test === "a") {
        checkIcon.style.display = "inline";
        falseIcon.style.display = "none";
        textCurrent.value = "a";
        test = "";
    }
    else {
        checkIcon.style.display = "none";
        falseIcon.style.display = "inline"
        textCurrent.value = "";
    }


    // Hết các phím mới nhập

    var button = document.getElementById(`${id}`)
    var id2 = "letter" + " " + id;

    var button2 = document.getElementsByClassName(id2);
    button.style.backgroundColor = "red";
    setTimeout(() => {
        button.style.backgroundColor = "";
    }, 500)
    button2[button2.length - 1].style.backgroundColor = "red";
    setTimeout(() => {
        button2[button2.length - 1].style.backgroundColor = '';
    }, 500);
    document.getElementById("key_pressed").value += String.fromCharCode(code) + '\n'


};