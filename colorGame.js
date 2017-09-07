var numSquares = 6;

var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");

var msg = document.getElementById("message");

var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset");

var easyBtn = document.getElementById("easybtn");

var hardBtn = document.getElementById("hardbtn");



easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    
    numSquares = 3;
    
    colors = generateRandomColor(numSquares);
    
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++)
        {
            if(colors[i]){
                    squares[i].style.background = colors[i];
                }
            
            else{
                    squares[i].style.display = "none";
                }
        }
    h1.style.background = "steelblue";
    msg.textContent = "";
});


hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    
    numSquares = 6;
    
    colors = generateRandomColor(numSquares);
    
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++)
        {  
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
    
    h1.style.background = "steelblue";
    msg.textContent = "";
});



resetButton.addEventListener("click", function(){
    
    colors = generateRandomColor(numSquares);
    
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    
    for (var i = 0; i < squares.length; i++)
        {
            squares[i].style.background = colors[i];
        }
    
    h1.style.background = "steelblue";
    
    this.textContent = "New Colors"
    msg.textContent = "";
});



colorDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++)
    {
        //add initial colors to squares
        squares[i].style.background = colors[i];
        
        //add click listeners to squares
        squares[i].addEventListener("click",compare);
    }




function compare(){
        
            //grab color of clicked square
            var clicked = this.style.background;

            //compare color to picked color
            if(clicked == pickedColor){
                msg.textContent = "Correct!";
                changeColor(clicked);
                h1.style.background = clicked ; 
                resetButton.textContent = "Play again"
            }
            
            else{
                this.style.background = "#232323";
                msg.textContent = "Try again!";
            }
        }




function changeColor(color)
{
    for(var i = 0; i<squares.length; i++)
        {
            squares[i].style.background = color;
        }
}




function pickColor()
{
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}




function generateRandomColor(num)
{
    var arr = [];
    
    for(var i = 0; i < num; i++)
        {
            arr.push(randomColor());
        }
    
    return arr;
}




function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    
    var g = Math.floor(Math.random() * 256);
    
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r +", " + g + ", " + b + ")";
}


