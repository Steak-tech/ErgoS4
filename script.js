import gsap from "./node_modules/gsap/index.js";// Importe tous les plugins de GSAP


gsap.to(".title", {duration: 2, scale: 0.5, opacity: 1, ease: "power2.inOut"});
gsap.to(".cloud", {duration: 5, x: 2500, ease: "linear", delay:2});