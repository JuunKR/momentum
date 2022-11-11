let clock = document.querySelector("#time")
console.log(clock)
function getTime() {
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}`
}


function init() {
    setInterval(getTime, 1000);
}

init();