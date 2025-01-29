window.addEventListener("load",function() {
    let outputSpan = document.getElementById("current-time");
    setTimeText(outputSpan);
    setInterval(setTimeText, 30000, outputSpan);
}, false);

function setTimeText (element){
    let options = {
            timeZone: 'Asia/Seoul',
            hour: 'numeric',
            minute: 'numeric'
        },
        formatter = new Intl.DateTimeFormat([], options);
    element.innerText = formatter.format(new Date());
}