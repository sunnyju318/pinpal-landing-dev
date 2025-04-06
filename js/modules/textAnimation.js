export function textAnimationHero() {
 
  gsap.registerPlugin(TextPlugin); 
  const words = ["a Local", "a Memory", "a Laugh", "a Moment", "a Friend"];
  let current = 0;

  const changeText = () => {
    gsap.to(".hero-text", {
      text: words[current],
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        current = (current + 1) % words.length;
        setTimeout(changeText, 1000);
      }
    });
  };

  changeText();
}
