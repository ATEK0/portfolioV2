function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: "60%",
        triggerElement: ".year2023",
        triggerHook: 0.4
    })
    .setPin(".year2023")
    .addTo(controller);

    new ScrollMagic.Scene({
        duration: "180%",
        triggerElement: ".year2022",
        triggerHook: 0.4
    })
    .setPin(".year2022")
    .addTo(controller);
}

splitScroll();
