canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

var last_position_of_x = 0;
var last_position_of_y = 0;

var current_position_of_mouse_x = 0;
var current_position_of_mouse_y = 0;

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";

    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " , Y = " + mouse_y)
    circle(mouse_x , mouse_y)
}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, width_of_line, 0, 2*Math.PI);
    ctx.stroke();
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    //     ctx.beginPath();
    //     ctx.strokeStyle = color;
    //     ctx.lineWidth = width_of_line;

    //     console.log("Last position of x and y coordinates = ");
    //     console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    //     ctx.moveTo(last_position_of_x,last_position_of_y);

    //     console.log("Current position of x and y coordinates = ");
    //     console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    //     ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    //     ctx.stroke()
    console.log("X = " + mouse_x + " , Y = " + mouse_y)
    circle(mouse_x , mouse_y)
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearc()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}