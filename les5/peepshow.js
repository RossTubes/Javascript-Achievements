let ing = new Image();

ing.src = "https://images.freeimages.com/images/large-previews/1ef/red-curtain-1203512.jpg";

let src = document.getElementById("X");

src.appendChild(ing);


let MoneyAmount = 100;

let Money = "Money: $ " + MoneyAmount;

let MoneyCount = document.getElementById("text").innerHTML = Money;

/* Button aanmaken */
let mybutton = document.getElementById("peepbutton");
let myInterval;

mybutton.addEventListener('click', function()
{
    if(MoneyAmount > 0)
    {
        // Here we set the image before the timer
        ing.src = "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-63.png";
        MoneyAmount = MoneyAmount - 5;

        NewMoney = "Money: $ " + MoneyAmount;

        document.getElementById("text").innerHTML = NewMoney;

        const timeleftdisplay = document.querySelector('#time-left')
        const startBtn = document.querySelector('#peepbutton')
        timeleft = 10

        if(myInterval != undefined)
        {
            clearInterval(myInterval);   
        }

        myInterval = setInterval(function()
        {
            if(timeleft <= 0) 
            {
                clearInterval(myInterval);
                ing.src = "https://images.freeimages.com/images/large-previews/1ef/red-curtain-1203512.jpg";
            }
            timeleft -=1
            timeleftdisplay.innerHTML = timeleft
        }, 1000);
    }
    else
    {
        // Set the image when you press the button without money
        ing.src = "https://i1.wp.com/pundificator.com/wp-content/uploads/2017/06/Georgia-6th-1-1.jpg?fit=1980%2C1113&ssl=1.png"
    }
});