// index.js
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    const scrollToSection = (index) => {
        gsap.to(window, {
            scrollTo: { y: sections[index], offsetY: 0 },
            duration: 1
        });
    };

    const determineScroll = (e) => {
        if (e.type === 'wheel') {
            if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
            } else if (e.deltaY < 0 && currentSectionIndex > 0) {
                currentSectionIndex--;
            }
        } else if (e.type === 'keydown') {
            if (e.key === 'ArrowDown' && currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
            } else if (e.key === 'ArrowUp' && currentSectionIndex > 0) {
                currentSectionIndex--;
            }
        }
        scrollToSection(currentSectionIndex);
    };

    window.addEventListener('wheel', determineScroll);
    window.addEventListener('keydown', determineScroll);
}
  