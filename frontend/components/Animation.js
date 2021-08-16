import gsap, { TweenMax } from 'gsap';

// let overlay = gsap.to(".test", {
//     duration: 1,
//     ease: "power4.out",
//     y: 0,
//     autoAlpha: 1,
//     paused: true
// });



// OPEN MENU
export const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
            amount: 0.1
        }
    });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
    gsap.to([node1, node2], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
            amount: 0.07
        }
    });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    });
};

// Fade up for the additonal info on our menu
export const fadeInUp = node => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut"
    });
};

// Hover on the link
export const handleHover = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: 3,
        skewX: 4,
        ease: "power1.inOut"
    });
};

// Hover off the link
export const handleHoverExit = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: -3,
        skewX: 0,
        ease: "power1.inOut"
    });
};

// adds city image once you hover on
export const handleCity = (city, target) => {
    gsap.to(target, {
        duration: 0,
        background: `url(${city}) center center`
    });
    gsap.to(target, {
        duration: 0.4,
        opacity: 1,
        ease: "power3.inOut"
    });
    gsap.from(target, {
        duration: 0.4,
        skewY: 2,
        transformOrigin: "right top"
    });
};

// Removes the city image once you hover off
export const handleCityReturn = target => {
    gsap.to(target, {
        duration: 0,
        skewY: 0
    });
    gsap.to(target, {
        duration: 0.4,
        opacity: 0,
        skewY: 0
    });
};

export const handleEntranceAnimation = () => {
    gsap.set(".test", { y: "100vh", display: 'flex' })


    return overlay;
}

export const handle2ndEntranceAnimtion = () => {
    console.log('Hello')
    gsap.set(".test", { display: 'flex' })
    var entrance = gsap.fromTo(".test", {
        x: 0,
        y: "100vh"
    }, { duration: 2, ease: "elastic.out(1,0.3)", x: 0, y: 0, autoAlpha: 1, paused: true })

    gsap.fromTo('.menu_list_item a', {
        xPercent: -100,
        opacity: 0
    }, { duration: 2, opacity: 1, xPercent: 0, stagger: 0.1, ease: "elastic.out(1,0.3)" })
    return entrance;
}

export const handleExitAnimation = () => {
    let exit = gsap.to(".test", {
        duration: .8,
        ease: "power4.in",
        x: "100vw",
        autoAlpha: 0,
        paused: true
    })
    return exit;
}

export const handlePanelAnimation = () => {
    const tl = gsap.timeline({ paused: false });

    tl.to(".panels .panel:first-child, .panels .panel:last-child", {
        scaleY: 1,
        duration: 1
    })
        .to(
            ".panels .panel:not(:first-child):not(:last-child)",
            { scaleY: 1 },
            "-=0.5"
        )
        .to(".panels .panel", {
            scaleY: 0,
            duration: 0.3,
            stagger: 0.05
        })
        .to(".panels", {
            clipPath: "circle(0%)",
            skewX: 0,
            duration: 1,
            display:"none"
        })
        .to(
            ".page-main",
            {
                clipPath: "circle(100%)",
                duration: 1
            },
            "-=0.3"
        );

        return tl;
}

export const handleHeader = () => {
    gsap.to(".first", {
        duration: 1.5,
        delay: .5,
        top: "-100%",
        ease: "Expo.easeInOut"
    });

    gsap.to(".second", 1.5, {
        delay: .7,
        top: "-100%",
        ease: "Expo.easeInOut"
    });

    gsap.to(".third", 1.5, {
        delay: .9,
        top: "-100%",
        ease: "Expo.easeInOut"
    });

    TweenMax.staggerFrom(".navbar", 1.5, {
        delay: 1.5,
        opacity: 0,
        x: "-20",
        ease: "Expo.easeInOut"
    }, 0.08);

    TweenMax.from(".textHeading", 1.5, {
        delay: 1,
        y: "100%",
        opacity: 0,
        ease: "Expo.easeInOut"
    });
    TweenMax.from(".subheading", 1.5, {
        delay: 1.2,
        y: "100%",
        opacity: 0,
        ease: "Expo.easeInOut"
    });

    TweenMax.from(".layoutKey", 1.5, {
        delay: 1.3,
        y: "100%",
        ease: "Expo.easeInOut"
    });
    TweenMax.from(".divider", 1.5, {
        delay: 1.5,
        opacity: 0,
        x: "-10000",
        ease: "Expo.easeInOut"
    });
    TweenMax.from(".headerImage", 1.5, {
        delay: 1.5,
        opacity: 0,
        y: "20",
        ease: "Expo.easeInOut"
    });
}