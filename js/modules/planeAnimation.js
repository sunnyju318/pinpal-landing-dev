export function planeAnimationFeatures() {
  const flight = gsap.timeline({
    repeat: -1,
  });

  flight.to(".flight", {
    x: -300,
    y: -550,
    duration: 7,
  })
    .to(".flight", {
      rotation: -30,
      duration: 0.5,
    })
    .to(".flight", {
      x: -1900,
      y: -50,
      duration: 15,
    }, "+=0.2");

    flight.fromTo(".flight-travel-categories",
      { x: -100, y: 0 },
      { x: 1850, y: 500, duration: 20 },
      0
    );

}

