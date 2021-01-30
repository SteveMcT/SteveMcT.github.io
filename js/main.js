//setUp

window.onload = function() {
    changeBackgound(localStorage.getItem("color"))
}


function copyToClipboard(text) {
    var input = document.body.appendChild(document.createElement("input"));
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);
    changeAddPerson()
}

defaultC = "#D9BF92"

// function changeBackgound(color) {
//     $("body").css("background", color)
//     localStorage.setItem("color", color)
//     color = color.slice(1).convertToRGB()
//     for (i in color)
//         color[i] += color[i] > 128 ? -35 : 35
//     console.log(color)
//      $("header").css("background", "rgb(" + color + ")")
//     $("#video").css("background", "rgb(" + color + ")")
//     $("#queue").css("background", "rgb(" + color + ")")
//     for (i in color)
//         color[i] += color[i] > 128 ? 15 : -15
//     console.log(color)
//     $("#menu").css("background", "rgb(" + color + ")")
// }

function defaultColor() {
    changeBackgound(defaultC)
}

String.prototype.convertToRGB = function() {
    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}