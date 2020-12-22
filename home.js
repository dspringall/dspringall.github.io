// const contactme = document.querySelector('.contact');
// let elmntToView = document.getElementById("section4");

// // contactme.addEventListener('click', function () {
// //     alert('clicked')
// // });

// contactme.onclick.elmntToView.scrollIntoView();


// $('img').each(function () {

//     $(this)[0].oncontextmenu = function () {

//         alert('Right-click is not available');

//         return false;

//     };

// });

// const copy = document.querySelector('.copy');

// window.addEventListener('scroll', function () {
//     alert('scrolled')
// });


$(window).scroll(function () {
    if ($(this).scrollTop() > 150) { //use `this`, not `document`
        $('.copyright').css({
            'display': 'none'
        });
    } else {
        $('.copyright').css({
            'display': 'inline'
        });

    }
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 350) { //use `this`, not `document`
        $('.top').css({
            'display': 'inline'
        });
    } else {
        $('.top').css({
            'display': 'none'
        });
    }
});
