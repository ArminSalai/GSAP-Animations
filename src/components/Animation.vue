<template>
  <div class="wrapper">
    <div class="title">
      <h1 @click="wordAnimate('h1', 1)" class="h1">Title to be animated</h1>
    </div>
    <div class="grey-container">
      <div class="textWrapper">
        <h2 @click="letterAnimate('h2', 1)" class="h2">
          Subtitle to be animated
        </h2>
        <p
          @click="wordAnimate('longTextAnim', 2)"
          class="longTextAnim longText"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus
          lacus, dictum eget vulputate in, viverra ut nulla. Phasellus ornare
          leo ac fringilla consectetur. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Integer purus mauris,
          suscipit ac commodo et, consectetur vitae elit. Aliquam ultricies
          magna quis finibus venenatis. Praesent nec luctus sapien. Vivamus
          imperdiet pellentesque quam ac fringilla. Ut efficitur blandit
          dignissim. Quisque velit nisi, rhoncus ac lorem sit amet, vestibulum
          imperdiet quam. Cras imperdiet, est eget maximus rhoncus, justo quam
          ultrices diam, vitae vestibulum leo dui vel enim. Ut nunc lorem,
          imperdiet id libero ac, auctor elementum mauris. Nulla rhoncus mauris
          tempus scelerisque porta. Curabitur dapibus turpis nulla, sed cursus
          est gravida eu. Fusce lobortis eget elit id fermentum. Maecenas et
          blandit orci. Fusce bibendum metus sit amet iaculis porttitor. Mauris
          pharetra elit a feugiat dignissim. Vivamus blandit sapien metus, at
          varius felis gravida in. Curabitur eu mauris in odio egestas volutpat
          sit amet nec nisl. Etiam justo arcu, ullamcorper a consequat et,
          varius non metus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas ultrices sit amet erat sit amet tempor. Nam venenatis
          felis sit amet laoreet mattis. Integer blandit nisl velit, sit amet
          imperdiet metus scelerisque at. Fusce lacinia, purus a blandit
          efficitur, urna erat blandit arcu, nec fringilla felis dui sit amet
          dui. Nunc vel nunc scelerisque, finibus massa in, sollicitudin eros.
          Praesent porttitor, erat a semper pulvinar, justo ex elementum diam,
          eu hendrerit dui enim ut lectus. Mauris ornare blandit dui, quis
          venenatis turpis congue eget. Sed aliquet at libero ut vehicula.
          Phasellus laoreet nibh sit amet augue tempor vestibulum. Phasellus
          velit odio, iaculis eu faucibus sit amet, pulvinar quis sapien.
        </p>
      </div>
      <div class="pictures">
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
        <div class="pic"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
import letterAnimate from "../hooks/letterAnimate.js";
import wordAnimate from "../hooks/wordAnimate.js";

export default {
  created() {
    gsap.registerPlugin(ScrollTrigger);
  },

  setup() {
    onMounted(() => {
      wordAnimate("h1", 1);
      letterAnimate("h2", 1);
      wordAnimate("longTextAnim", 2);
      gsap.utils.toArray(".pictures").forEach((section) => {
        const elems = section.querySelectorAll(".pic");

        gsap.set(elems, { y: 100, opacity: 0 });

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
    });

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
  height: 250vh;
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
  display: flex;
}

h2 {
  display: flex;
  margin-top: 2rem;
  font-size: 3rem;
  height: 56px;
  width: 100vw;
  margin-left: 3rem;
}

.grey-container {
  width: 100vw;
  height: 198vh;
  background-color: #aaa;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}

.longText {
  display: block;
  width: 50vw;
  margin-left: 3rem;
  margin-top: 2rem;
  word-wrap: break-word;
  white-space: break-spaces;
}

.pictures {
  width: 70vw;
  height: 130vh;
  position: absolute;
  bottom: 0;
  left: 15vw;
  background-color: lightslategrey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
}

.pic {
  width: 15vw;
  height: 15vw;
  margin: 2vw 0 2vw 0;
  background-color: #fff;
}
</style>
