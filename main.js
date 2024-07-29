let rates = []
rates[0] = document.querySelector(".t-left-1");
rates[1] = document.querySelector(".t-right-1")
rates[2] = document.querySelector(".s-left-1");
rates[3] = document.querySelector(".s-right-1")
rates[4] = document.querySelector(".t-left-2");
rates[5] = document.querySelector(".t-right-2")
rates[6] = document.querySelector(".s-left-2");
rates[7] = document.querySelector(".s-right-2")
rates[8] = document.querySelector(".t-left-3");
rates[9] = document.querySelector(".t-right-3")
rates[10] = document.querySelector(".s-left-3");
rates[11] = document.querySelector(".s-right-3")
let round = 2;
// setInterval(
//     function(){
//         if(round == 1){
//             rates[0].style.opacity = "1"
//             rates[1].style.opacity = "1"
//             rates[2].style.opacity = "1"
//             rates[3].style.opacity = "1"
//             rates[4].style.opacity = "0"
//             rates[5].style.opacity = "0"
//             rates[6].style.opacity = "1"
//             rates[7].style.opacity = "1"
//             rates[8].style.opacity = "0"
//             rates[9].style.opacity = "0"

//             round++
//         }
//         else if(round == 2){
//             rates[4].style.opacity = "1"
//             rates[5].style.opacity = "1"
//             rates[6].style.opacity = "1"
//             rates[7].style.opacity = "1"
//             rates[1].style.opacity = "0"
//             rates[2].style.opacity = "0"
//             rates[3].style.opacity = "0"
//             rates[0].style.opacity = "0"
//             rates[8].style.opacity = "0"
//             rates[9].style.opacity = "0"
//             round++
//         }
//         else if(round == 3){
//             rates[8].style.opacity = "1"
//             rates[9].style.opacity = "1"
//             rates[4].style.opacity = "0"
//             rates[5].style.opacity = "0"
//             rates[6].style.opacity = "1"
//             rates[7].style.opacity = "1"
//             rates[0].style.opacity = "0"
//             rates[1].style.opacity = "0"
//             rates[2].style.opacity = "0"
//             rates[3].style.opacity = "0"
//             round = 1
//         }
//     }
//     ,2500)


document.querySelectorAll(".more-div").forEach(
    function(ele){
        let elemenet = ele
        elemenet.onclick = function(){
            if(elemenet.children[0].classList.contains("n-see")){
                elemenet.nextElementSibling.style.height = "fit-content"
                elemenet.children[0].classList.add("o-see")
                elemenet.children[0].classList.remove("n-see")
            } else if(elemenet.children[0].classList.contains("o-see")){
                elemenet.nextElementSibling.style.height = "0";
                elemenet.children[0].classList.add("n-see")
                elemenet.children[0].classList.remove("o-see")
            }
        }
    }
)