var header = document.getElementById('masthead');
var teamImage = document.querySelectorAll(".icon img");
var mobileToggle = document.getElementById("mobileNav-Toggle");
var mobileCloseToggle = document.getElementById('closeToggle');
var offcanvasMenu = document.getElementById("offcanvasMenu");
var offcanvasMenuLists = offcanvasMenu.querySelectorAll('.menu-cont #mobile ul li');
var dropdowNmenuList = document.querySelectorAll('#menu-top ul li.dpd');

function stickyHeader(scrollIndex){
    window.onscroll = ()=>{
        this.scrollY > scrollIndex ? header.classList.add("stiky") : header.classList.remove("stiky");
        this.scrollY > scrollIndex ? header.querySelector(".container-fluid").classList.remove("py-2") : 
        header.querySelector(".container-fluid").classList.add("py-2");
    }
}

stickyHeader(10);

for(var i3=0; i3 < teamImage.length; i3++){
 teamImage[i3].addEventListener("contextmenu", e=>{
     e.preventDefault();
 })
 teamImage[i3].draggable=false;
 teamImage[i3].style.userSelect = "none";
}

document.querySelector(".logo a img").draggable=false;
document.querySelector(".logo a").draggable=false;

mobileToggle.addEventListener("click",event=>{
    offcanvasMenu.classList.add('s-menu');
});
mobileCloseToggle.addEventListener("click",event=>{
    offcanvasMenu.classList.remove('s-menu');
})

mobileCloseToggle.style.cursor="pointer";

for(var i4=0; i4 < offcanvasMenuLists.length; i4++){
    offcanvasMenuLists[i4].addEventListener("click",event=>{
        offcanvasMenu.classList.remove('s-menu');
    })
}

$(function(){
    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            if( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.90) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ){
                percent = $(value).data('percentage');
                radius = $(this).find($('circle.complete')).attr('r');
                circumference = 2 * Math.PI * radius;
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');
});

$(document).ready(function(){
    var mixer = mixitup('.portfolio-cont .row');
});


$(document).ready(function() {
    $('#menu-top ul').onePageNav({
        currentClass: 'active',
        scrollSpeed: 0,
    });
});

$(document).ready(function() {
    $('#mobile ul').onePageNav({
        currentClass: 'active',
        scrollSpeed: 0,
    });
});