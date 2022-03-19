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
    easing: 'cubic-bezier(0,.26,.44,.93)'
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



$(".fadeMe1").hide(function() {
    $(this).delay(3000).fadeIn(0);
  });

$(".fadeMe2").hide(function() {
    $(this).delay(3200).fadeIn(0);
  });

$(".fadeMe3").hide(function() {
    $(this).delay(3500).fadeIn(0);
  });

$(".fadeMe4").hide(function() {
    $(this).delay(4500).fadeIn(0);
  });
  
$(".fadeMe5").hide(function() {
    $(this).delay(4750).fadeIn(0);
    // setTimeout(function(){ window.location = "../home.html"; }, 5500);
  });