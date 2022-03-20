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
    $(this).delay(4500).fadeIn(0);
  });
  
$(".fade_line_5").hide(0, function() {
    $(this).delay(4750).fadeIn(0);
    // setTimeout(function(){ window.location = "../home.html"; }, 5500);
  });