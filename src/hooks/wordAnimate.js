import { gsap } from "gsap";

export default function wordAnimate(className, amount) {
  try {
    const animElement = document.querySelector("." + className);
    if (animElement.classList.contains(className)) {
      animElement.classList.remove(className);
      animElement.innerHTML = animElement.innerHTML.replaceAll(" ", "&nbsp;");
      animElement.innerHTML = '<span class="anim ' + className + 'G">' + animElement.innerHTML;
      animElement.innerHTML = animElement.innerHTML
        .toString()
        .replaceAll("&nbsp;", '&nbsp;</span><span class="anim ' + className + 'G">');
      animElement.innerHTML += "</span>";

      gsap.from(".anim." + className + 'G', {
        /*---------------------------
          ONLY CHANGE THIS SECTION */
        duration: 0.3,
        opacity: 0,
        x: -40,
        stagger: {
          amount: amount
        },
        ease: "power2.inOut",
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