
// first screen animation
gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "100%",
        pin: true,
        pinSpacing: false
    });
});


gsap.registerPlugin(ScrollTrigger);

const itemTimeLine = new gsap.timeline({
    scrollTrigger: {
        invalidateOnResize: true,
        anticipatePin: 1,
        refreshPriority: 1,
        trigger: '.item-1',
        start: "top 0",
        end:"bottom 0",
        scrub: 3,
        pin: true,
    },
    defaults:{duration: 3, ease:'none'}
})
    .from(".item-1-img-1", {y: 1000, opacity: 0, duration: 1000}, 1)
    .to(".item-1-img-1", {y: 0, opacity: 1})
    .from(".item-1-img-2", {y: 2000, opacity: 0, duration: 1000}, 1)
    .to(".item-1-img-2", {y: 0, opacity: 1 })
    .from(".item__cont-1", {opacity: 0, duration: 1000})
    .to(".item__cont-1", {opacity: 1 })
    .from('item-1', {duration: 1000})
    .to('item-1', {})


const itemTimeLineTwo = new gsap.timeline({
    scrollTrigger: {
        invalidateOnResize: true,
        anticipatePin: 1,
        refreshPriority: 1,
        trigger: '.item-2',
        start: "top 0",
        end:"bottom 0",
        scrub:1,
        pin: true,
    },
    defaults:{duration: 3, ease:'none'}
})
    .from(".item-2-img-1", {y: 1000, opacity: 0, duration: 1000}, 1)
    .to(".item-2-img-1", {y: 0, opacity: 1})
    .from(".item-2-img-2", {y: 2000, opacity: 0, duration: 1000}, 1)
    .to(".item-2-img-2", {y: 0, opacity: 1 })
    .from(".item__cont-2", {opacity: 0, duration: 1000})
    .to(".item__cont-2", {opacity: 1 })
    .from('item-2', {duration: 1000})
    .to('item-2', {})

const itemTimeLineThree = new gsap.timeline({
    scrollTrigger: {
        invalidateOnResize: true,
        anticipatePin: 1,
        refreshPriority: 1,
        trigger: '.item-3',
        start: "top 0",
        end:"bottom 0",
        scrub:1,
        pin: true
    },
    defaults:{duration: 3, ease:'none'}
})
    .from(".item-3-img-1", {y: 1000, opacity: 0, duration: 1000}, 1)
    .to(".item-3-img-1", {y: 0, opacity: 1})
    .from(".item-3-img-2", {y: 2000, opacity: 0, duration: 1000}, 1)
    .to(".item-3-img-2", {y: 0, opacity: 1 })
    .from(".item__cont-3", {opacity: 0, duration: 1000})
    .to(".item__cont-3", {opacity: 1 })
    .from('item-3', {duration: 1000})
    .to('item-3', {})

const itemTimeLineFour = new gsap.timeline({
    scrollTrigger: {
        invalidateOnResize: true,
        anticipatePin: 1,
        refreshPriority: 1,
        trigger: '.item-4',
        start: "top 0",
        end:"bottom 0",
        scrub:1,
        pin: true,
    },
    defaults:{duration: 3, ease:'none'}
})
    .from(".item-4-img-1", {y: 1000, opacity: 0, duration: 1000}, 1)
    .to(".item-4-img-1", {y: 0, opacity: 1})
    .from(".item-4-img-2", {y: 2000, opacity: 0, duration: 1000}, 1)
    .to(".item-4-img-2", {y: 0, opacity: 1 })
    .from(".item__cont-4", {opacity: 0, duration: 1000})
    .to(".item__cont-4", {opacity: 1 })
    .from('item-4', {duration: 1000})
    .to('item-4', {})

// pop
$('.open-pop-1').on('click', () => {
    $('.pop-1').addClass('active')
    $('body').addClass('scroll')
})

$('.pop-close, .pop-bg, .pop-2 .btn').on('click', () => {
    $('.pop').removeClass('active')
    $('body').removeClass('scroll')
})

// select 2
if ($('.select').length) {
    $('.select').select2()
}
$('.select').on('select2:select', function (e) {
    $('.select2.select2-container.select2-container--default').addClass('active')
});

// hide header on scroll
const header = $(".header");
var lastScrollTop = 0,
    delta = 15;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && lastScrollTop > 0) {
        // downscroll code
        header.addClass("hide");
    } else {
        // upscroll code
        header.removeClass("hide");
    }
    lastScrollTop = st;
});

// hero animation
let topHeroImg = $('.hero__right-img').offset().top
let heightHeroImg = $('.hero__right-img').height()
let widthHeroImg = $('.hero__right-img').width()
window.addEventListener("load", () => {
    setTimeout(() => {
        $('.hero__right-img img').css({top: topHeroImg+'px', maxWidth: widthHeroImg+'px', maxHeight: heightHeroImg+'px'})
    }, 1000)

});








