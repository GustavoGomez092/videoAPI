export default function (imgURL, slogan) {
  const template = `
  <html>
  <head>
  <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
  <style>
    body {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 1080px;
    width: 1920px;
    background-color: #fff;
  }
  
  .logo-container {
    width: 450px;
    height: auto;
    position: relative;
    top: -50px;
  }
  
  .logo {
    width: 100%;
    height: auto;
    opacity: 0;
  }

  .slogan {
    position: relative;
    top: -50px;
    font-family: 'Poppins', sans-serif;
    width: 900px;
    text-align: center;
    opacity: 0;
  }
  </style>
  <head>
  <body>
  <div class="logo-container">
    <img class='logo' src='${imgURL}' />
  </div>
  <h1 class='slogan'>${slogan}</h1>

  <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"></script>

  <script>
  var tl = gsap.timeline();
  // Non sequenced effects
  var fade = gsap.registerEffect({
      name: "fade",
      defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
      effect: (targets, config) => {
          return gsap.to(targets, {duration: config.duration, opacity: 1});
      }
  });
  
  //sequenced one-after-the-other
  tl.to(".logo-container", {duration: 0, rotationX: 0, scale:0.9 })
  tl.to(".logo-container", {duration: 2, rotationX: 360, scale:1 })
  tl.to('.slogan', {duration:1, opacity: 1 })
  let logo = document.querySelector(".logo")
  gsap.effects.fade(logo)
  </script>
</body>
</html>
  `
  return (template)
}
