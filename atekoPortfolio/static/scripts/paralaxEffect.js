function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: ".experience-container-title",
        triggerHook: 0.4
    })
    .setPin(".experience-container-title")
    .addTo(controller);
}

splitScroll();
