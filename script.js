var field = document.getElementsByClassName("field")[0];
var currentColor = 'black';

function red() { 
    currentColor = 'red';
}
function blue() {
    currentColor = 'blue';
}
function green() {
    currentColor = 'green'; 
}
function purple() {
    currentColor = 'purple';
}
function orange() {
    currentColor = 'orange'; 
}
function black() {
    currentColor = 'black'; 
}
function cyan() {
    currentColor = 'cyan'; 
}
function brown() {
    currentColor = 'brown';
}

function draw(e){
    var x = e.clientX - field.getBoundingClientRect().left;
    var y = e.clientY - field.getBoundingClientRect().top;

    var dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    dot.style.backgroundColor = currentColor;
    field.appendChild(dot);
}

var isDrawing = false;

field.addEventListener('mousedown', function(e){
    isDrawing = true;
    draw(e)
});

field.addEventListener('mousemove', function(e){
    if (isDrawing){
        draw(e);
    }
});

document.addEventListener('mouseup', function(){
    isDrawing = false;
});

