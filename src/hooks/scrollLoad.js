import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function scrollLoad(containerClass, elementClass) {
    gsap.registerPlugin(ScrollTrigger);
    console.log('asdnawds')
    gsap.utils.toArray("." + containerClass).forEach((section) => {
      const elems = section.querySelectorAll("." + elementClass);

      gsap.set(elems, { y: 100, opacity: 0 });
      /* CHANGE THIS PART
      -----------------------*/
      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        onEnter: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            delay: 0.1,
            ease: "power3.out",
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to(elems, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            delay: 0.1,
            ease: "power3.out",
            overwrite: "auto",
          }),
      });
    });
    //----------------------------
  }