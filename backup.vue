<template>
  <div class="wrapper">
    <div class="title">
      <h1 @click="wordAnimate('h1')" class="h1">Title to be animated</h1>
    </div>
    <div class="grey-container"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  setup() {
    const prevent = ref(false);

    onMounted(() => {
      letterAnimate("h1");
    });

    function removeAnimTags() {
      let anim = document.querySelectorAll(".anim");
      let pa = anim[0].parentNode;
      anim.forEach((span) => {
        while (span.firstChild) pa.insertBefore(span.firstChild, span);
        pa.removeChild(span);
      });
      pa.innerHTML = pa.innerHTML.toString();
      prevent.value = false;
    }

    function wordAnimate(className) {
      if (prevent.value == false) {
        prevent.value = true;
        const animElement = document.querySelector("." + className);
        animElement.setAttribute("disabled", "true");
        animElement.innerHTML = animElement.innerHTML.replaceAll(" ", "&nbsp;");
        animElement.innerHTML = '<span class="anim">' + animElement.innerHTML;
        animElement.innerHTML = animElement.innerHTML
          .toString()
          .replaceAll("&nbsp;", '&nbsp;</span><span class="anim">');
        animElement.innerHTML += "</span>";
        gsap.set(animElement, {display: 'flex'});

        gsap.from(".anim", {
          duration: 0.3,
          opacity: 0,
          y: -40,
          fontSize: "10rem",
          stagger: 0.3,
          ease: "power2.inOut",
          filter: "blur(20px)",
          onComplete: removeAnimTags,
        });
      }
    }

    function letterAnimate(className) {
      if (prevent.value == false) {
        prevent.value = true;
        const animElement = document.querySelector("." + className);
        animElement.innerHTML = '<span class="anim">' + animElement.innerHTML;
        animElement.innerHTML = animElement.innerHTML.replaceAll("&nbsp;", " ");
        animElement.innerHTML = animElement.innerHTML
          .toString()
          .substring(19, animElement.innerHTML.length - 7)
          .replaceAll("", '</span><span class="anim">');
        const words = document.querySelectorAll(".anim");
        words.forEach((element) => {
          element.innerHTML = element.innerHTML.replace(" ", "&nbsp;");
        });
        gsap.set(animElement, {display: 'flex'});


        gsap.from(".anim", {
          duration: 0.1,
          opacity: 0,
          y: -40,
          fontSize: "10rem",
          stagger: 0.1,
          ease: "power2.inOut",
          filter: "blur(20px)",
          onComplete: removeAnimTags,
        });
      }
    }

    return {
      wordAnimate,
      letterAnimate,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.wrapper {
  position: relative;
  height: 180vh;
  width: 100vw;
  left: 0;
  right: 0;
  font-family: "Raleway", sans-serif;
}

.title {
  position: absolute;
  top: 40vh;
  display: flex;
  align-items: flex-start;
}

h1 {
  font-size: 6rem;
  font-weight: 600;
  text-align: left;
  padding-left: 3rem;
  margin-bottom: auto;
}

.grey-container {
  width: 100vw;
  height: 128vh;
  z-index: -1;
  background-color: #aaa;
  position: absolute;
  bottom: 0;
}
</style>
