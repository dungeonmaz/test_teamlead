$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        arrows: false,
    })
    
    
    
    $("#input1, #input2").each(function (type) {
        $(this).focus(function () {
            $(this).parent().addClass("helper-text")
        });

        $(this).blur(function () {
            $(this).parent().removeClass("helper-text")
        })
    });


    let start = 1800;
    setInterval(function() {
        start--
        minutes = Math.floor((start / 60) % 60)
        seconds = Math.floor(start % 60)
        $('#timer').text((minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds));
    }, 1000);
});

