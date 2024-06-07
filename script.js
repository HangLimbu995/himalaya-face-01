// const scroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
// })



function navbar() {
    console.log('you clicked navbar menu')
    const navMenu = document.querySelector('.nav-menu')
    let target = navMenu.getAttribute('data-target')
    const menu = document.querySelector('.menu')
    const close = document.querySelector('.close')
    const navbar = document.querySelector('.navbar')
    const footerAddress = document.querySelector('.nav-items ul .footer-address')
    console.log('target is', target)
    if (target === 'menu') {
        navMenu.setAttribute('data-target', 'close')
        menu.style.opacity = '0'
        close.style.opacity = '1'
        navbar.classList.add('p-navbar')
        footerAddress.style.display = 'block'
    } else {
        navMenu.setAttribute('data-target', 'menu')
        menu.style.opacity = '1'
        close.style.opacity = '0'
        navbar.classList.remove('p-navbar')
        footerAddress.style.display = 'none'
    }
}

function goToTop() {
    document.addEventListener('scroll', () => {
        const topButton = document.querySelector('.goToTop')
        if (window.scrollY > 100) {
            topButton.style.opacity = '1'
        } else {
            topButton.style.opacity = '0'
        }
    })

}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}


function navG() {
    const tl = gsap.timeline();

    tl.from('.logo', {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
    })

    tl.from('.nav-items .nav-list', {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.3,
    })
}

function headerImg() {
    const headerImg = document.querySelectorAll('.header-img-slider')
    headerImg.forEach((elem) => {
        var imgs = elem.querySelectorAll('img')
        var index = 0;
        const tl = gsap.timeline()
        gsap.from(imgs[0], {
            // transform: 'translate(0)',
            duration: 1,
            // delay: 0.5,
            // opacity: 0,
        })
        setInterval(() => {

            tl.to(imgs[index], {
                // transform: 'translate(0%)',
                duration: 1,
                opacity: 1,
                // repeat:-1,
                // yoyo:true,
                onComplete: function () {
                    gsap.set(this._targets[index], {
                        opacity: 0,
                    })
                }
            })

            tl.to(imgs[index], {
                opacity: 0,
                // transform:'translate(100%)',
                duration: 1,
                ease: 'power1.out',
                delay: 3,
            })
            // imgs[index].style.opacity = 1
            // gsap.to(imgs[index], {
            //     // transform: 'translateX(-30%)',
            //     opacity: 1,
            //     duration: 2,
            //     delay: 0.5,
            //     ease: 'power2.out',
            // })

            // gsap.to(imgs[index], {
            //     rotateY: 15,
            //     duration: 2,
            //     delay: 1,
            //     scale: 1.02,
            //     repeat: -1,
            //     yoyo: true,
            // })

            index == imgs.length - 1 ? index = 0 : index++;
        }, 5000)


    })
    // let newHeaderImg = headerImg[0]
    // console.log('new header image is',newHeaderImg)


}


function FAQ() {
    var questions = document.querySelectorAll('.faq-q')
    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            if (question.style.color !== 'black') {
                question.style.color = 'black'
                question.style.borderBottom = '1px solid black'

            } else {
                question.style.color = '#eb6561b0'
                question.style.borderBottom = '1px solid #F6D2D1'
            }

            var answer = this.nextElementSibling
            if (answer.style.display === 'block') {
                answer.style.display = 'none'
            } else {
                answer.style.display = 'block'
            }
        })
    })
}

function numberCounter() {
    const counters = document.querySelectorAll('.counter')
    const duration = 2000
    const animateCounter = (counter) => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target')
            const count = +counter.innerText.replace('+', '')
            const increment = target / (duration / 20)

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + '+'
                setTimeout(updateCounter, 20)
            } else {
                counter.innerText = target + '+'
            }
        }
        updateCounter()
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target)
                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.1,
    })

    counters.forEach(counter => {
        observer.observe(counter)
    })

}

document.addEventListener('DOMContentLoaded', () => {

    Shery.imageEffect(".header-img", {
        style: 6,
        // debug: true,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":4.03,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.2420701168614356},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.52,"y":0.5}},"shapeEdgeSoftness":{"value":0.17,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":0.51,"range":[0.1,5]},"durationIn":{"value":0.47,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.76,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.22,"range":[0,10]},"metaball":{"value":0.21,"range":[0,2]},"discard_threshold":{"value":0.4,"range":[0,1]},"antialias_threshold":{"value":0.03,"range":[0,0.1]},"noise_height":{"value":0.32,"range":[0,2]},"noise_scale":{"value":16.03,"range":[0,100]},"a":{"value":2,"range":[0,30]},"b":{"value":-0.54,"range":[-1,1]}},
        gooey: true,
    })
       
    
    navbar();
    goToTop();
    scrollToTop();
    headerImg()
    navG();
    FAQ();
    numberCounter();
})