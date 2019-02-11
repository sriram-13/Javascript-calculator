var content;
content = document.getElementById("content").innerHTML

function numClick(value) {
    content = content.concat(value);
    document.getElementById("content").innerHTML = content;
}

function clrClick() {
    content = "";
    document.getElementById("content").innerHTML = content;
}

function opClick(operator) {

    switch(operator) {
        case "plus": 
        content = content.concat("+");
        break;

        case "minus": 
        content = content.concat("-");
        break;

        case "mul": 
        content = content.concat("*");
        break;

        case "div": 
        content = content.concat("/");
        break;
    }

    document.getElementById("content").innerHTML = content;
}

function equaltoClick() {
    content = eval(content).toString();
    document.getElementById("content").innerHTML = content;
}

function delClick() {
    content = content.slice(0, content.length-1);
    document.getElementById("content").innerHTML = content;
}
