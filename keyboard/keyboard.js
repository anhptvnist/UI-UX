$(function() {
    var $write = $('#write'),
        shift = false,
        capslock = false;

    $('#keyboard li').click(function() {
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

function myFunction(event) {
    var code = event.keyCode
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
    var button = document.getElementById(`${id}`)
    var id2 = "letter" + " " + id
    var button2 = document.getElementsByClassName(id2);
    button.style.backgroundColor = "red";
    setTimeout(() => {
        button.style.backgroundColor = "";
    }, 500)
    console.log(code)
    document.getElementById("key_pressed").value += String.fromCharCode(code) + '\n'

    if (button2.length) {
        button2[button2.length - 1].style.backgroundColor = "blue";
        setTimeout(() => {
            button2[button2.length - 1].style.backgroundColor = '';
        }, 500);
    }
};