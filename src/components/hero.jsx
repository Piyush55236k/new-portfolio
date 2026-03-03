useGSAP(() => {
  const ctx = gsap.context(() => {

    // Master timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Parallax effect
    tl.to(".left", {
      y: -100,
      ease: "none"
    }, 0);

    tl.to(".right", {
      y: -50,
      ease: "none"
    }, 0);

    // Text scale + fade
    tl.to(".intro", {
      scale: 0.9,
      opacity: 0.6,
      ease: "none"
    }, 0);

    // Image rotation subtle
    tl.to(".right img", {
      rotate: 5,
      ease: "none"
    }, 0);

    // Navbar fade
    tl.to(".firstnav", {
      opacity: 0,
      ease: "none"
    }, 0);

    // Entrance animation (only once)
    gsap.from(".intro > *", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".right img", {
      scale: 0.85,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

  }, container);

  return () => ctx.revert();

}, { scope: container });
