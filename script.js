import gsap from "./node_modules/gsap/index.js";
import { TextPlugin } from "./node_modules/gsap/TextPlugin.js";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

// Enregistrement du plugin
gsap.registerPlugin(TextPlugin);

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.registerPlugin(ScrollTrigger);


// Liste des scènes (images, titres et textes)
const scenes = [
    {
        image: "Earth.jpg",
        title: "Voyage au cœur de la Terre",
        text: "<p tabindex='1'>Il était une fois une petite sonde curieuse nommée Terra. Prêt(e) à l’accompagner ?</p>"
    },
    {
        image: "croute.jpeg",
        title: "1. La Croûte Terrestre 🌍",
        text: "<p tabindex='2'>Terra commence son voyage en traversant la croûte terrestre, fine et fragile, abritant toute vie.</p>"
    },
    {
        image: "manteau.jpg",
        title: "2. Le Manteau 🌋",
        text: "<p tabindex='3'>Elle plonge dans le manteau, une mer de roches en fusion où naissent les volcans.</p>"
    },
    {
        image: "noyau-externe.png",
        title: "3. Le Noyau Externe 🔥",
        text: "<p tabindex='4'>Ici, le fer et le nickel liquide s’agitent, générant le champ magnétique terrestre.</p>"
    },
    {
        image: "noyau-interne.jpeg",
        title: "4. Le Noyau Interne 🏵️",
        text: "<p tabindex='5'>Terra atteint le cœur brûlant de la Terre, un noyau solide mystérieux.</p>"
    },
    {
        image: "noyau-interne.jpeg",
        title: "",
        text: "<a href='terre.html' tabindex='6'>C'est parti ! </a>"
    }
];

let currentScene = 0; // Index de la scène actuelle
let isAnimating = false; // Empêche les scrolls trop rapides

// Fonction pour changer de scène
function changeScene(direction) {
    if (isAnimating) return; // Évite les doubles scrolls
    isAnimating = true;

    let nextScene = currentScene + direction;
    if (nextScene >= 0 && nextScene < scenes.length) {
        currentScene = nextScene;

        // Animation de l'image de fond
        gsap.to(".scene", {
            backgroundImage: `url(${scenes[currentScene].image})`,
            duration: 1,
            ease: "power2.inOut"
        });

        // Animation du titre
        gsap.to(".title", {
            opacity: 0,
            y: -50,
            duration: 0.5,
            onComplete: () => {
                document.querySelector(".title").innerText = scenes[currentScene].title;
                gsap.to(".title", { opacity: 1, y: 0, duration: 0.5 });
            }
        });

        // Animation du texte
        gsap.to(".text", {
            opacity: 0,
            y: -50,
            duration: 0.5,
            onComplete: () => {
                document.querySelector(".text").innerHTML = scenes[currentScene].text;
                gsap.to(".text", { opacity: 1, y: 0, duration: 0.5 });
            }
        });
    }

    setTimeout(() => (isAnimating = false), 1500); // Empêche les scrolls trop rapides
}

// Détection du scroll
window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        changeScene(1); // Scroll vers le bas
    } else {
        changeScene(-1); // Scroll vers le haut
    }
});


gsap.from(".title h2", {duration: 1.5, scale: 0, opacity: 1, ease: "power2.inOut"});


gsap.from(".title h1", {duration: 1.5, text: "", ease: "linear", opacity:0})
gsap.to(".cloud", {duration: 5, x: 2500, ease: "linear", delay:2});


gsap.to("#cloud2", {
    x: 1000, // Déplacement vers la droite
    scrollTrigger: {
        trigger: "#cloud2",
        start: "60% 80%", // Quand l'élément entre dans la vue
        end: "top 5%", // Jusqu'à ce qu'il soit presque sorti
        scrub: 3, // Permet un effet fluide qui suit le scroll
    }
});

gsap.to("#cloud1", {
    x: -1200, // Déplacement vers la gauche
    scrollTrigger: {
        trigger: "#cloud2",
        start: "60% 80%", // Quand l'élément entre dans la vue
        end: "top 5%", // Jusqu'à ce qu'il soit presque sorti
        scrub: 3, // Permet un effet fluide qui suit le scroll
    }
});

gsap.fromTo(".croute h1",
{ y : -100,opacity: 0 },
{
    y: 0,
        opacity: 1,
    delay : 0.5,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
    trigger: ".croute h1",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
},
})

gsap.fromTo(".croute .box",
    { opacity: 0, scale : 0},
    {
        delay : 0.5,
        opacity: 1,
        duration: 1.8,
        scale : 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".croute h1",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reset",
        },
    })

gsap.fromTo(".manteau h1",
    { y : -100,opacity: 0 },
    {
        y: 0,
        delay : 0.5,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".manteau h1",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reset",
        },
    })

gsap.fromTo(".manteau .box",
    { opacity: 0, scale : 0},
    {
        delay : 0.5,
        opacity: 1,
        duration: 1.8,
        scale : 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".manteau h1",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reset",
        },
    })


gsap.fromTo(".left",
    { x: "-100%", opacity: 0 },
    {
        delay : 1,
        x: 0,
        opacity: 1,
        duration: 1.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".left",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reset",
        },
    }
);

gsap.fromTo(".right",
    { x: "100%", opacity: 0 },
    {
        x: 0,
        delay : 2,
        opacity: 1,
        duration: 1.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".right",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reset",
        },
    }
);