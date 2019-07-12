var colors = 
[
    "rgb(0,0,255)",
    "rgb(0,255,0)",
    "rgb(255,0,0)",
    "rgb(255,0,255)",
    "rgb(255,255,0)",
    "rgb(0,255,255)"
]

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colordisplay");

var pickedcolor = colors[3];
colorDisplay.textContent = pickedcolor;

for(var i=0; i<squares.length ; i++)
{
    //add initial colors to the squares
    squares[i].style.background = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function()
    {
       // alert("clicked the square");
        var pickedcolor = colors[3];
      //  alert(this.style.background);
        var clickedColor = this.style.background;
        if(clickedColor === pickedcolor)
        {
            alert("Correct!!!!!");
        }
        else
        {
            alert("Wrong!!!!");
        }
    })
}
