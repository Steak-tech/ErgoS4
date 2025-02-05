import gsap from "./node_modules/gsap/index.js";// Importe tous les plugins de GSAP
import { TextPlugin } from "./node_modules/gsap/TextPlugin.js";

// Enregistrement du plugin
gsap.registerPlugin(TextPlugin);


gsap.from(".title h2", {duration: 1.5, scale: 0, opacity: 1, ease: "power2.inOut"});// gsap.fromTo(".title h1",
//     { opacity: 0, x: -200, text:""}, // État initial : invisible et décalé vers le bas
//     { opacity: 1, x: 0, duration: 1.5, ease: "power2.out", delay:2, text:"Earth Trip" }
// )

gsap.from("h1", {duration: 1.5, text: "", ease: "linear", opacity:0})
gsap.to(".cloud", {duration: 5, x: 2500, ease: "linear", delay:2});