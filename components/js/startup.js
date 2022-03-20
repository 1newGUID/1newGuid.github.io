let input_lenght = document.querySelector(".text").innerHTML.split("").length;

let text_fadein_timing = {
    easing: `steps(${input_lenght}, end)`,
    delay: 500,
    duration: 2000,
    fill: 'forwards'
}

let cursor_timings = {
    duration: 800,
    iterations: Infinity,
}

$(".background-text").hide(0).each(function() {
    $(this).delay(3500).fadeIn(100, function() {
        $("body").get(0).style.setProperty("background", "linear-gradient(140deg, rgb(10,0,90) 0%, rgb(75, 5, 180) 25%, rgb(80, 0, 100) 95%)")});
});

$(".sidebar, #main-container").hide(0).each(function() {
    $(this).delay(4200).fadeIn(100);
});

$(".about-me-short, .navigation").hide(0).each(function() {
    $(this).delay(4700).fadeIn(100);
});



document.querySelector(".cursor").animate([
    {
        opacity: 0
    },
    {
        opacity: 0, offset: 0.7
    },
    {
        opacity: 1
    }
], cursor_timings);



document.querySelector(".text_hide").animate([
    { left: '0%' },
    { left: `${(100 / input_lenght) * (input_lenght)}%` }
], text_fadein_timing);

document.querySelector(".cursor").animate([
    { left: '0%' },
    { left: `${(100 / input_lenght) * (input_lenght)}%` }
], text_fadein_timing);



setTimeout(function(){ document.querySelector(".cursor").remove(); }, 3000)



$(".fade_line_1").hide(0, function() {
    $(this).delay(3000).fadeIn(0);
});

$(".fade_line_2").hide(0, function() {
    $(this).delay(3200).fadeIn(0);
});

$(".fade_line_3").hide(0, function() {
    $(this).delay(3500).fadeIn(0);
});

$(".fade_line_4").hide(0, function() {
    $(this).delay(3700).fadeIn(0);
});
  
$(".fade_line_5").hide(0, function() {
    $(this).delay(4250).fadeIn(0);
});

$(".fade_line_6").hide(0, function() {
    $(this).delay(4750).fadeIn(0);
});

$(".fade_line_7").hide(0, function() {
    $(this).delay(5000).fadeIn(0);
    setTimeout(function(){ window.location = "../home.html"; }, 5500);
});