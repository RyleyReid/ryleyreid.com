import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function() {
    const resumeSection = document.querySelector('.resume-section');

    const animateSection = () => {
        gsap.fromTo(resumeSection.children, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                stagger: 0.2 
            }
        );
    };

    ScrollTrigger.create({
        trigger: resumeSection,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => animateSection(),
        onEnterBack: () => animateSection(),
        toggleActions: "play none none reverse"
    });
}
