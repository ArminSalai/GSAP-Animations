import { gsap } from "gsap";

export default function letterAnimate(className, amount) {
  try {
    const animElement = document.querySelector("." + className);
    if (animElement.classList.contains(className)) {
      animElement.classList.remove(className);
      animElement.innerHTML = '<span class="anim ' + className + 'G">' + animElement.innerHTML;
      animElement.innerHTML = animElement.innerHTML.replaceAll("&nbsp;", " ");
      animElement.innerHTML = animElement.innerHTML
        .toString()
        .substring(('<span class="anim ' + className + 'G">').toString().length, animElement.innerHTML.length - 7)
        .replaceAll("", '</span><span class="anim ' + className + 'G">');
      const words = document.querySelectorAll(".anim." + className + 'G');
      words.forEach((element) => {
        element.innerHTML = element.innerHTML.replace(" ", "&nbsp;");
      });

      gsap.from(".anim." + className + 'G', {
        /*---------------------------
          ONLY CHANGE THIS SECTION */
        duration: 0.1,
        opacity: 0,
        y: -40,
        fontSize: "10rem",
        stagger: {
          amount: amount
        },
        ease: "power2.inOut",
        filter: "blur(20px)",
        //---------------------------
        onComplete: function () {
          let anim = document.querySelectorAll(".anim." + className + 'G');
          let pa = animElement;
          anim.forEach((span) => {
            while (span.firstChild) pa.insertBefore(span.firstChild, span);
            pa.removeChild(span);
          });
          pa.innerHTML = pa.innerHTML.toString();
          pa.classList.add(className)
        },
      });
    }
  }
  catch (TypeError) {
    console.log('Wait \'till the animation ends before clicking again');
  }
}