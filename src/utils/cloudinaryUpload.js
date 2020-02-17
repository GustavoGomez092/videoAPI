import { config } from 'dotenv'
var cloudinary = require('cloudinary').v2

config()
// Import env variables
const {
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
  CLOUDINARY_CLOUDNAME
} = process.env

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUDNAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET
})

export default async function (fileName, filePath) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath,
      { resource_type: 'video',
        public_id: `clientVideoRender/${fileName}`,
        chunk_size: 6000000 },
      function (error, result) {
        if (result) {
          resolve(result)
        }
        if (error) {
          console.log(error)
          reject(error)
        }
      })
  })
}
