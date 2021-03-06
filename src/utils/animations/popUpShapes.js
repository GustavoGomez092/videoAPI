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
    z-index: 2;
  }

  .slogan {
    position: relative;
    top: -50px;
    font-family: 'Poppins', sans-serif;
    width: 900px;
    text-align: center;
    opacity: 0;
    z-index: 2;
  }

  .layer_1 {
    position: relative;
    left: 0;
    height: 40px;
    width: auto;
    top: -30%;
    z-index: -1;
}
  </style>
  <head>
  <body>

  <div class="logo-container">
    <img class='logo' src='${imgURL}' />
  </div>

  <h1 class='slogan'>${slogan}</h1>


  <svg version="1.1" class="Layer_1 object1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
 .st0{fill:#3D3D3D;}
</style>
<path class="st0" d="M1.31,25c0,13.06,10.63,23.69,23.69,23.69S48.69,38.06,48.69,25C48.69,11.94,38.06,1.31,25,1.31
 S1.31,11.94,1.31,25z M9.84,25c0-8.36,6.8-15.16,15.16-15.16S40.16,16.64,40.16,25c0,8.36-6.8,15.16-15.16,15.16S9.84,33.36,9.84,25
 z"/>
<path class="st0" d="M113.2,26.13c0,1.12,0.91,2.02,2.02,2.02s2.02-0.91,2.02-2.02c0-1.12-0.91-2.02-2.02-2.02
 S113.2,25.01,113.2,26.13z M113.79,26.13c0-0.79,0.64-1.44,1.44-1.44s1.44,0.64,1.44,1.44c0,0.79-0.64,1.44-1.44,1.44
 S113.79,26.92,113.79,26.13z"/>
<path class="st0" d="M88.49,24.64c-0.05,0.06-0.06,0.14-0.05,0.22c0.01,0.08,0.06,0.15,0.12,0.19l2.25,1.59
 c0.05,0.04,0.11,0.05,0.17,0.05c0.09,0,0.18-0.04,0.24-0.12l1.59-2.25c0.05-0.06,0.06-0.14,0.05-0.22
 c-0.01-0.08-0.06-0.15-0.12-0.19l-2.25-1.59c-0.06-0.05-0.14-0.06-0.22-0.05c-0.08,0.01-0.15,0.06-0.19,0.12L88.49,24.64z
  M89.14,24.74l1.25-1.77l1.77,1.25l-1.25,1.77L89.14,24.74z"/>
<path class="st0" d="M85.05,39.67c-0.05,0.09-0.04,0.21,0.02,0.29l1.88,2.76c0.06,0.08,0.15,0.13,0.24,0.13c0.01,0,0.01,0,0.02,0
 c0.1-0.01,0.2-0.07,0.24-0.17l1.45-3.01c0.05-0.09,0.04-0.21-0.02-0.29c-0.06-0.09-0.16-0.14-0.27-0.13l-3.34,0.25
 C85.19,39.52,85.1,39.58,85.05,39.67z M85.85,40.06l2.32-0.17l-1.01,2.09L85.85,40.06z"/>
<path class="st0" d="M118.33,45.58c-0.02,0.04-0.03,0.08-0.03,0.12c0,0.16,0.13,0.29,0.29,0.29c0,0,0,0,0,0
 c0.04,0,0.08-0.01,0.11-0.02l4.16-1.74c0.11-0.04,0.18-0.15,0.18-0.26c0-0.12-0.06-0.22-0.17-0.27l-3.07-1.5
 c-0.08-0.04-0.16-0.04-0.24-0.01c-0.08,0.03-0.14,0.1-0.17,0.18L118.33,45.58z M119.09,45.18l0.78-2.3l2.18,1.06L119.09,45.18z"/>
<path class="st0" d="M83.69,9.78c0.21-0.09,0.29-0.13,0.3-0.21C84,9.5,83.95,9.44,83.78,9.28c-0.19-0.17-0.48-0.42-0.41-0.83
 c0.07-0.41,0.42-0.56,0.65-0.65c0.21-0.09,0.29-0.13,0.3-0.21c0.01-0.07-0.04-0.14-0.22-0.29c-0.19-0.17-0.48-0.42-0.41-0.83
 c0.07-0.41,0.42-0.56,0.65-0.65c0.21-0.09,0.29-0.13,0.3-0.21c0.03-0.16,0.18-0.27,0.34-0.24c0.16,0.03,0.27,0.18,0.24,0.34
 c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
 c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
 c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
 c-0.02,0.14-0.15,0.25-0.29,0.25c-0.02,0-0.03,0-0.05,0c-0.16-0.03-0.27-0.18-0.24-0.34c0.01-0.07-0.04-0.14-0.22-0.29
 c-0.19-0.17-0.48-0.42-0.41-0.83C83.11,10.03,83.46,9.88,83.69,9.78z"/>
<path class="st0" d="M121.91,49.83c0.09-0.13,0.28-0.16,0.41-0.07c0.13,0.09,0.17,0.28,0.07,0.41l-1.18,1.67
 c-0.06,0.08-0.15,0.13-0.24,0.13c-0.06,0-0.12-0.02-0.17-0.05c-0.13-0.09-0.17-0.28-0.07-0.41L121.91,49.83z"/>
<path class="st0" d="M115.85,37.07c0.04-0.15-0.03-0.31-0.18-0.36c-0.47-0.17-0.72-0.67-0.58-1.15"/>
<path class="st0" d="M96.4,22.96l2.12-0.89l-0.84-2.01c-0.07-0.18,0.01-0.38,0.19-0.45c0.18-0.07,0.38,0.01,0.45,0.19l0.97,2.33
 c0.07,0.18-0.01,0.38-0.19,0.45l-2.44,1.02c-0.04,0.02-0.09,0.03-0.13,0.03c-0.13,0-0.26-0.08-0.32-0.21
 C96.14,23.24,96.23,23.04,96.4,22.96z"/>
</svg>
  <svg version="1.1" class="Layer_1 object2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#3D3D3D;}
</style>
<path class="st0" d="M-56.69,30c0,13.06,10.63,23.69,23.69,23.69S-9.31,43.06-9.31,30C-9.31,16.94-19.94,6.31-33,6.31
	S-56.69,16.94-56.69,30z M-48.16,30c0-8.36,6.8-15.16,15.16-15.16s15.16,6.8,15.16,15.16c0,8.36-6.8,15.16-15.16,15.16
	S-48.16,38.36-48.16,30z"/>
<path class="st0" d="M113.2,26.13c0,1.12,0.91,2.02,2.02,2.02s2.02-0.91,2.02-2.02c0-1.12-0.91-2.02-2.02-2.02
	S113.2,25.01,113.2,26.13z M113.79,26.13c0-0.79,0.64-1.44,1.44-1.44s1.44,0.64,1.44,1.44c0,0.79-0.64,1.44-1.44,1.44
	S113.79,26.92,113.79,26.13z"/>
<path class="st0" d="M2.09,26.71c-0.48,0.68-0.67,1.52-0.53,2.33c0.14,0.82,0.6,1.54,1.28,2.02l23.87,16.85
	c0.55,0.39,1.18,0.57,1.8,0.57c0.98,0,1.95-0.46,2.55-1.32l16.85-23.87c0.48-0.68,0.67-1.52,0.53-2.33
	c-0.14-0.82-0.6-1.54-1.28-2.02L23.29,2.09c-0.68-0.48-1.51-0.67-2.33-0.53c-0.82,0.14-1.54,0.6-2.02,1.28L2.09,26.71z M8.99,27.76
	L22.24,8.99l18.76,13.25L27.76,41.01L8.99,27.76z"/>
<path class="st0" d="M85.05,39.67c-0.05,0.09-0.04,0.21,0.02,0.29l1.88,2.76c0.06,0.08,0.15,0.13,0.24,0.13c0.01,0,0.01,0,0.02,0
	c0.1-0.01,0.2-0.07,0.24-0.17l1.45-3.01c0.05-0.09,0.04-0.21-0.02-0.29c-0.06-0.09-0.16-0.14-0.27-0.13l-3.34,0.25
	C85.19,39.52,85.1,39.58,85.05,39.67z M85.85,40.06l2.32-0.17l-1.01,2.09L85.85,40.06z"/>
<path class="st0" d="M118.33,45.58c-0.02,0.04-0.03,0.08-0.03,0.12c0,0.16,0.13,0.29,0.29,0.29c0,0,0,0,0,0
	c0.04,0,0.08-0.01,0.11-0.02l4.16-1.74c0.11-0.04,0.18-0.15,0.18-0.26c0-0.12-0.06-0.22-0.17-0.27l-3.07-1.5
	c-0.08-0.04-0.16-0.04-0.24-0.01c-0.08,0.03-0.14,0.1-0.17,0.18L118.33,45.58z M119.09,45.18l0.78-2.3l2.18,1.06L119.09,45.18z"/>
<path class="st0" d="M83.69,9.78c0.21-0.09,0.29-0.13,0.3-0.21C84,9.5,83.95,9.44,83.78,9.28c-0.19-0.17-0.48-0.42-0.41-0.83
	c0.07-0.41,0.42-0.56,0.65-0.65c0.21-0.09,0.29-0.13,0.3-0.21c0.01-0.07-0.04-0.14-0.22-0.29c-0.19-0.17-0.48-0.42-0.41-0.83
	c0.07-0.41,0.42-0.56,0.65-0.65c0.21-0.09,0.29-0.13,0.3-0.21c0.03-0.16,0.18-0.27,0.34-0.24c0.16,0.03,0.27,0.18,0.24,0.34
	c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
	c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
	c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
	c-0.02,0.14-0.15,0.25-0.29,0.25c-0.02,0-0.03,0-0.05,0c-0.16-0.03-0.27-0.18-0.24-0.34c0.01-0.07-0.04-0.14-0.22-0.29
	c-0.19-0.17-0.48-0.42-0.41-0.83C83.11,10.03,83.46,9.88,83.69,9.78z"/>
<path class="st0" d="M121.91,49.83c0.09-0.13,0.28-0.16,0.41-0.07c0.13,0.09,0.17,0.28,0.07,0.41l-1.18,1.67
	c-0.06,0.08-0.15,0.13-0.24,0.13c-0.06,0-0.12-0.02-0.17-0.05c-0.13-0.09-0.17-0.28-0.07-0.41L121.91,49.83z"/>
<path class="st0" d="M115.85,37.07c0.04-0.15-0.03-0.31-0.18-0.36c-0.47-0.17-0.72-0.67-0.58-1.15"/>
<path class="st0" d="M96.4,22.96l2.12-0.89l-0.84-2.01c-0.07-0.18,0.01-0.38,0.19-0.45c0.18-0.07,0.38,0.01,0.45,0.19l0.97,2.33
	c0.07,0.18-0.01,0.38-0.19,0.45l-2.44,1.02c-0.04,0.02-0.09,0.03-0.13,0.03c-0.13,0-0.26-0.08-0.32-0.21
	C96.14,23.24,96.23,23.04,96.4,22.96z"/>
</svg>
<svg version="1.1" class="Layer_1 object3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#3D3D3D;}
</style>
<path class="st0" d="M-56.69,30c0,13.06,10.63,23.69,23.69,23.69S-9.31,43.06-9.31,30C-9.31,16.94-19.94,6.31-33,6.31
	S-56.69,16.94-56.69,30z M-48.16,30c0-8.36,6.8-15.16,15.16-15.16s15.16,6.8,15.16,15.16c0,8.36-6.8,15.16-15.16,15.16
	S-48.16,38.36-48.16,30z"/>
<path class="st0" d="M113.2,26.13c0,1.12,0.91,2.02,2.02,2.02s2.02-0.91,2.02-2.02c0-1.12-0.91-2.02-2.02-2.02
	S113.2,25.01,113.2,26.13z M113.79,26.13c0-0.79,0.64-1.44,1.44-1.44s1.44,0.64,1.44,1.44c0,0.79-0.64,1.44-1.44,1.44
	S113.79,26.92,113.79,26.13z"/>
<path class="st0" d="M-49.91-24.29c-0.48,0.68-0.67,1.52-0.53,2.33c0.14,0.82,0.6,1.54,1.28,2.02l23.87,16.85
	c0.55,0.39,1.18,0.57,1.8,0.57c0.98,0,1.95-0.46,2.55-1.32l16.85-23.87c0.48-0.68,0.67-1.52,0.53-2.33
	c-0.14-0.82-0.6-1.54-1.28-2.02l-23.87-16.85c-0.68-0.48-1.51-0.67-2.33-0.53c-0.82,0.14-1.54,0.6-2.02,1.28L-49.91-24.29z
	 M-43.01-23.24l13.25-18.76l18.76,13.25L-24.24-9.99L-43.01-23.24z"/>
<path class="st0" d="M1.34,8.05c-0.56,1.16-0.46,2.53,0.27,3.59l23.05,33.83c0.67,0.99,1.79,1.57,2.98,1.57c0.09,0,0.18,0,0.27-0.01
	c1.28-0.1,2.42-0.87,2.98-2.03L48.66,8.12c0.56-1.16,0.46-2.53-0.27-3.59c-0.73-1.06-1.97-1.65-3.25-1.56L4.32,6.02
	C3.04,6.11,1.9,6.89,1.34,8.05z M11.08,12.74l28.37-2.12L27.1,36.25L11.08,12.74z"/>
<path class="st0" d="M118.33,45.58c-0.02,0.04-0.03,0.08-0.03,0.12c0,0.16,0.13,0.29,0.29,0.29c0,0,0,0,0,0
	c0.04,0,0.08-0.01,0.11-0.02l4.16-1.74c0.11-0.04,0.18-0.15,0.18-0.26c0-0.12-0.06-0.22-0.17-0.27l-3.07-1.5
	c-0.08-0.04-0.16-0.04-0.24-0.01c-0.08,0.03-0.14,0.1-0.17,0.18L118.33,45.58z M119.09,45.18l0.78-2.3l2.18,1.06L119.09,45.18z"/>
<path class="st0" d="M83.69,9.78c0.21-0.09,0.29-0.13,0.3-0.21C84,9.5,83.95,9.44,83.78,9.28c-0.19-0.17-0.48-0.42-0.41-0.83
	c0.07-0.41,0.42-0.56,0.65-0.65c0.21-0.09,0.29-0.13,0.3-0.21c0.01-0.07-0.04-0.14-0.22-0.29c-0.19-0.17-0.48-0.42-0.41-0.83
	c0.07-0.41,0.42-0.56,0.65-0.65c0.21-0.09,0.29-0.13,0.3-0.21c0.03-0.16,0.18-0.27,0.34-0.24c0.16,0.03,0.27,0.18,0.24,0.34
	c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
	c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
	c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
	c-0.02,0.14-0.15,0.25-0.29,0.25c-0.02,0-0.03,0-0.05,0c-0.16-0.03-0.27-0.18-0.24-0.34c0.01-0.07-0.04-0.14-0.22-0.29
	c-0.19-0.17-0.48-0.42-0.41-0.83C83.11,10.03,83.46,9.88,83.69,9.78z"/>
<path class="st0" d="M121.91,49.83c0.09-0.13,0.28-0.16,0.41-0.07c0.13,0.09,0.17,0.28,0.07,0.41l-1.18,1.67
	c-0.06,0.08-0.15,0.13-0.24,0.13c-0.06,0-0.12-0.02-0.17-0.05c-0.13-0.09-0.17-0.28-0.07-0.41L121.91,49.83z"/>
<path class="st0" d="M115.85,37.07c0.04-0.15-0.03-0.31-0.18-0.36c-0.47-0.17-0.72-0.67-0.58-1.15"/>
<path class="st0" d="M96.4,22.96l2.12-0.89l-0.84-2.01c-0.07-0.18,0.01-0.38,0.19-0.45c0.18-0.07,0.38,0.01,0.45,0.19l0.97,2.33
	c0.07,0.18-0.01,0.38-0.19,0.45l-2.44,1.02c-0.04,0.02-0.09,0.03-0.13,0.03c-0.13,0-0.26-0.08-0.32-0.21
	C96.14,23.24,96.23,23.04,96.4,22.96z"/>
</svg>
<svg version="1.1" class="Layer_1 object4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#3D3D3D;}
</style>
<path class="st0" d="M-56.69,30c0,13.06,10.63,23.69,23.69,23.69S-9.31,43.06-9.31,30C-9.31,16.94-19.94,6.31-33,6.31
	S-56.69,16.94-56.69,30z M-48.16,30c0-8.36,6.8-15.16,15.16-15.16s15.16,6.8,15.16,15.16c0,8.36-6.8,15.16-15.16,15.16
	S-48.16,38.36-48.16,30z"/>
<path class="st0" d="M113.2,26.13c0,1.12,0.91,2.02,2.02,2.02s2.02-0.91,2.02-2.02c0-1.12-0.91-2.02-2.02-2.02
	S113.2,25.01,113.2,26.13z M113.79,26.13c0-0.79,0.64-1.44,1.44-1.44s1.44,0.64,1.44,1.44c0,0.79-0.64,1.44-1.44,1.44
	S113.79,26.92,113.79,26.13z"/>
<path class="st0" d="M-49.91-24.29c-0.48,0.68-0.67,1.52-0.53,2.33c0.14,0.82,0.6,1.54,1.28,2.02l23.87,16.85
	c0.55,0.39,1.18,0.57,1.8,0.57c0.98,0,1.95-0.46,2.55-1.32l16.85-23.87c0.48-0.68,0.67-1.52,0.53-2.33
	c-0.14-0.82-0.6-1.54-1.28-2.02l-23.87-16.85c-0.68-0.48-1.51-0.67-2.33-0.53c-0.82,0.14-1.54,0.6-2.02,1.28L-49.91-24.29z
	 M-43.01-23.24l13.25-18.76l18.76,13.25L-24.24-9.99L-43.01-23.24z"/>
<path class="st0" d="M1.34-69.95c-0.56,1.16-0.46,2.53,0.27,3.59l23.05,33.83c0.67,0.99,1.79,1.57,2.98,1.57
	c0.09,0,0.18,0,0.27-0.01c1.28-0.1,2.42-0.87,2.98-2.03l17.77-36.88c0.56-1.16,0.46-2.53-0.27-3.59c-0.73-1.06-1.97-1.65-3.25-1.56
	L4.32-71.98C3.04-71.89,1.9-71.11,1.34-69.95z M11.08-65.26l28.37-2.12L27.1-41.75L11.08-65.26z"/>
<path class="st0" d="M118.33,45.58c-0.02,0.04-0.03,0.08-0.03,0.12c0,0.16,0.13,0.29,0.29,0.29c0,0,0,0,0,0
	c0.04,0,0.08-0.01,0.11-0.02l4.16-1.74c0.11-0.04,0.18-0.15,0.18-0.26c0-0.12-0.06-0.22-0.17-0.27l-3.07-1.5
	c-0.08-0.04-0.16-0.04-0.24-0.01c-0.08,0.03-0.14,0.1-0.17,0.18L118.33,45.58z M119.09,45.18l0.78-2.3l2.18,1.06L119.09,45.18z"/>
<path class="st0" d="M76.69,11.78c0.21-0.09,0.29-0.13,0.3-0.21c0.01-0.07-0.04-0.14-0.22-0.29c-0.19-0.17-0.48-0.42-0.41-0.83
	c0.07-0.41,0.42-0.56,0.65-0.65c0.21-0.09,0.29-0.13,0.3-0.21c0.01-0.07-0.04-0.14-0.22-0.29c-0.19-0.17-0.48-0.42-0.41-0.83
	c0.07-0.41,0.42-0.56,0.65-0.65c0.21-0.09,0.29-0.13,0.3-0.21c0.03-0.16,0.18-0.27,0.34-0.24c0.16,0.03,0.27,0.18,0.24,0.34
	c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
	s-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
	c-0.07,0.41-0.42,0.56-0.65,0.65c-0.21,0.09-0.29,0.13-0.3,0.21c-0.01,0.07,0.04,0.14,0.22,0.29c0.19,0.17,0.48,0.42,0.41,0.83
	c-0.02,0.14-0.15,0.25-0.29,0.25c-0.02,0-0.03,0-0.05,0c-0.16-0.03-0.27-0.18-0.24-0.34c0.01-0.07-0.04-0.14-0.22-0.29
	c-0.19-0.17-0.48-0.42-0.41-0.83C76.11,12.03,76.46,11.88,76.69,11.78z"/>
<path class="st0" d="M121.91,49.83c0.09-0.13,0.28-0.16,0.41-0.07c0.13,0.09,0.17,0.28,0.07,0.41l-1.18,1.67
	c-0.06,0.08-0.15,0.13-0.24,0.13c-0.06,0-0.12-0.02-0.17-0.05c-0.13-0.09-0.17-0.28-0.07-0.41L121.91,49.83z"/>
<path class="st0" d="M115.85,37.07c0.04-0.15-0.03-0.31-0.18-0.36c-0.47-0.17-0.72-0.67-0.58-1.15"/>
<path class="st0" d="M7.94,40.47L32.76,30.1L22.93,6.58c-0.86-2.05,0.11-4.41,2.16-5.27c2.05-0.86,4.41,0.11,5.27,2.16l11.38,27.24
	c0.86,2.05-0.11,4.41-2.16,5.27L11.05,47.9c-0.51,0.21-1.03,0.31-1.55,0.31c-1.58,0-3.07-0.93-3.72-2.47
	C4.92,43.68,5.89,41.33,7.94,40.47z"/>
</svg>

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
  tl.to(".logo-container", {duration: 0, scale:0, ease: 'elastic'})
  tl.to(".logo-container", {duration: 2, scale:1, ease: 'elastic'})
  tl.to(".object1", 1, { x:-150, y:-140, scale: 1.5 }, 0 )
  tl.to(".object1", 1, { x:-200, y:-190, scale: 1, opacity: 0 }, 0 )
  tl.to(".object2", 1, { x:150, y:140, scale: 1.5, rotation: 360 }, 0 )
  tl.to(".object2", 1, { x:200, y:190, scale: 1, opacity: 0 }, 0 )
  tl.to(".object3", 1, { x:150, y:-140, scale: 1.5, rotation: 360 }, 0 )
  tl.to(".object3", 1, { x:200, y:-190, scale: 1, opacity: 0 }, 0 )
  tl.to(".object4", 1, { x:-200, y:110, scale: 1.5, rotation: 360 }, 0 )
  tl.to(".object4", 1, { x:-250, y:140, scale: 1, opacity: 0 }, 0 )
  tl.to('.slogan', {duration:1, opacity: 1 })
  let logo = document.querySelector(".logo")
  gsap.effects.fade(logo)
  </script>
</body>
</html>
  `
  return (template)
}
