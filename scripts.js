const startButton = document.querySelector(".button-one")
const stopButton = document.querySelector(".button-two")



let h1 = document.querySelector("h1")
let number = 0
let cron

function start() {

    cron = setInterval(function () {number++, h1.innerHTML = number}, 1000)

}

function stop() {

    clearInterval(cron)


}

startButton.addEventListener("click", start)
stopButton.addEventListener("click", stop)
