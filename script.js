import gsap from "./node_modules/gsap/index.js";// Importe tous les plugins de GSAP
import { TextPlugin } from "./node_modules/gsap/TextPlugin.js";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ScrollReveal from "scrollreveal";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

// Enregistrement du plugin
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


gsap.from(".title h2", {duration: 1.5, scale: 0, opacity: 1, ease: "power2.inOut"});// gsap.fromTo(".title h1",
//     { opacity: 0, x: -200, text:""}, // État initial : invisible et décalé vers le bas
//     { opacity: 1, x: 0, duration: 1.5, ease: "power2.out", delay:2, text:"Earth Trip" }
// )

gsap.from("h1", {duration: 1.5, text: "", ease: "linear", opacity:0})
gsap.to(".cloud", {duration: 5, x: 2500, ease: "linear", delay:2});



// gsap.to("#cloud1", {scrollTrigger: })

gsap.to("#cloud2", {
    x: 1000, // Déplacement vers la droite (mettre -1000 pour la gauche)
    scrollTrigger: {
        trigger: "#cloud2",
        start: "60% 80%", // Quand l'élément entre dans la vue
        end: "top 5%", // Jusqu'à ce qu'il soit presque sorti
        scrub: 3, // 🔥 Permet un effet fluide qui suit le scroll
    }
});

gsap.to("#cloud1", {
    x: -1200, // Déplacement vers la droite (mettre -1000 pour la gauche)
    scrollTrigger: {
        trigger: "#cloud2",
        start: "60% 80%", // Quand l'élément entre dans la vue
        end: "top 5%", // Jusqu'à ce qu'il soit presque sorti
        scrub: 3, // 🔥 Permet un effet fluide qui suit le scroll
    }
});

gsap.registerPlugin(MotionPathPlugin);

gsap.to(".rocket", {
    duration: 5,
    repeat: -1,
    ease: "power1.inOut",
    motionPath: {
        path: [
            { x: 500, y: -300 },
            { x: 1700, y: 200 },
        ],
        curviness: 2,
        autoRotate: true
    }
});