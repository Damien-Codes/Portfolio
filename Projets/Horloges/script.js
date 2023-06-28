(function(){
    function updateClock() {
        var time = new Date();
        var second = time.getSeconds() / 60 * 360;
        var minute = (time.getMinutes() + time.getSeconds() / 60) / 60 * 360;
        var hour = (time.getHours() % 12 + time.getMinutes() / 60) / 12 * 360;

        var animation = [
            "@keyframes sec-hand{from{transform: rotate(" + second + "deg);}to{transform: rotate(" + (second + 360) + "deg);}}",
            "@keyframes min-hand{from{transform: rotate(" + minute + "deg);}to{transform: rotate(" + (minute + 360) + "deg);}}",
            "@keyframes hr-hand{from{transform: rotate(" + hour + "deg);}to{transform: rotate(" + (hour + 360) + "deg);}}"
        ].join("");

        document.querySelector('#clock-animate').innerHTML = animation;
    }

    updateClock();
})();
