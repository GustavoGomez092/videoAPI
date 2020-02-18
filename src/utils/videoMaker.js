import uniqid from 'uniqid'
import timecut from 'timecut'
import upload from './cloudinaryUpload'
// Import Animations
import fadeInFromLeft from './animations/fadeInFromLeft'
import flipXCenter from './animations/FlipXCenter'
import inertialBounceCenter from './animations/inertialBounceCenter'
import popUpShapes from './animations/popUpShapes'
// end import animations
var fs = require('fs')

// create array of available animations
let animations = [
  fadeInFromLeft,
  flipXCenter,
  inertialBounceCenter,
  popUpShapes
]

// switch depending on animation
let selectAnimation = (imgURL, slogan, animation) => {
  switch (animation) {
    case 'FADE_IN_FROM_LEFT':
      return fadeInFromLeft(imgURL, slogan)
    case 'FLIP_X_CENTER':
      return flipXCenter(imgURL, slogan)
    case 'INERTIAL_BOUNCE_CENTER':
      return inertialBounceCenter(imgURL, slogan)
    case 'POP_UP_SHAPES':
      return popUpShapes(imgURL, slogan)
    default:
      return animations[Math.floor(Math.random() * animations.length)](imgURL, slogan)
  }
}

// create new HTML file
const createAnimationFile = (imgURL, slogan, animation) => {
  console.log(selectAnimation(imgURL, slogan, animation))
  const fileName = uniqid()
  console.log(`${__dirname}/renderedHTML/${fileName}.html`)
  if (!fs.existsSync(`${__dirname}/renderedHTML`)) {
    fs.mkdirSync(`${__dirname}/renderedHTML`)
  }
  fs.writeFileSync(
    `${__dirname}/renderedHTML/${fileName}.html`, selectAnimation(imgURL, slogan, animation)
  )
  return `${__dirname}/renderedHTML/${fileName}.html`
}

const recording = HTMLPath =>
  new Promise((resolve, reject) => {
    let fileName = uniqid()
    timecut({
      launchArguments: ['--no-sandbox'],
      url: HTMLPath,
      viewport: {
        width: 1920,
        height: 1080
      },
      selector: 'body',
      fps: 60,
      duration: 4,
      output: `${__dirname}/renders/${fileName}.mp4`
    })
      .then(function () {
        resolve({ fileName: `${fileName}`, filePath: `${__dirname}/renders/${fileName}.mp4` })
      })
      .catch(e => reject(e))
  })

export default async (imgURL, slogan, animation) => {
  try {
    let url = await recording(createAnimationFile(imgURL, slogan, animation))
    let fileURL = await upload(url.fileName, url.filePath)
    return fileURL.secure_url
  } catch (e) {
    console.log(e)
  }
}
