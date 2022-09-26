let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

//homeScore.innerText =  guestScore.innerText = 0


function homePlus1()
{
    homeScore.innerText = parseInt(homeScore.innerText) + 1
}

function homePlus2()
{
    homeScore.innerHTML = parseInt(homeScore.innerHTML) + 2
}

function homePlus3()
{
    homeScore.innerHTML = parseInt(homeScore.innerHTML) + 3
}

function guestPlus1()
{
    guestScore.innerHTML = parseInt(guestScore.innerHTML) + 1
}

function guestPlus2()
{
    guestScore.innerHTML = parseInt(guestScore.innerHTML) + 2
}

function guestPlus3()
{
    guestScore.innerHTML = parseInt(guestScore.innerHTML) + 3
}

