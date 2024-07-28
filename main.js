let rates = []
rates.push(document.querySelector(".left-template-1"))
rates.push(document.querySelector(".left-template-2"))
rates.push(document.querySelector(".left-template-3"))
rates.push(document.querySelector(".right-template-1"))
rates.push(document.querySelector(".right-template-2"))
rates.push(document.querySelector(".right-template-3"))
let round = 2;
setInterval(
    function(){
        if(round == 1){
            rates[0].style.opacity = "1"
            rates[3].style.opacity = "1"
            rates[1].style.opacity = "0"
            rates[4].style.opacity = "0"
            rates[2].style.opacity = "0"
            rates[5].style.opacity = "0"
            round++
        }
        else if(round == 2){
            rates[1].style.opacity = "1"
            rates[4].style.opacity = "1"
            rates[0].style.opacity = "0"
            rates[3].style.opacity = "0"
            rates[2].style.opacity = "0"
            rates[5].style.opacity = "0"
            round++
        }
        else if(round == 3){
            rates[2].style.opacity = "1"
            rates[5].style.opacity = "1"
            rates[1].style.opacity = "0"
            rates[4].style.opacity = "0"
            rates[0].style.opacity = "0"
            rates[3].style.opacity = "0"
            round = 1
        }
    }
    ,4000)