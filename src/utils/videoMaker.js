import uniqid from 'uniqid'
import timecut from 'timecut'
import fadeInFromLeft from './animations/fadeInFromLeft'
import upload from './cloudinaryUpload'
var fs = require('fs')

// create new HTML file
const createAnimationFile = (imgURL, slogan) => {
  const fileName = uniqid()
  console.log(`${__dirname}\\renderedHTML\\${fileName}.html`)
  if (!fs.existsSync(`${__dirname}\\renderedHTML`)) {
    fs.mkdirSync(`${__dirname}\\renderedHTML`)
  }
  fs.writeFileSync(
    `${__dirname}\\renderedHTML\\${fileName}.html`, fadeInFromLeft(imgURL, slogan)
  )
  return `${__dirname}\\renderedHTML\\${fileName}.html`
}

const recording = HTMLPath =>
  new Promise((resolve, reject) => {
    let fileName = uniqid()
    timecut({
      url: HTMLPath,
      viewport: {
        width: 1920,
        height: 1080
      },
      selector: 'body',
      fps: 30,
      duration: 3,
      output: `${__dirname}\\renders\\${fileName}.mp4`
    })
      .then(function () {
        resolve({ fileName: `${fileName}`, filePath: `${__dirname}\\renders\\${fileName}.mp4` })
      })
      .catch(e => reject(e))
  })

export default async (imgURL, slogan) => {
  try {
    let url = await recording(createAnimationFile(imgURL, slogan))
    let fileURL = await upload(url.fileName, url.filePath)
    console.log(fileURL)
    return fileURL.secure_url
  } catch (e) {
    console.log(e)
  }
}
