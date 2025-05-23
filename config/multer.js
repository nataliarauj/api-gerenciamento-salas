const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "labs",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 800, crop: "limit" }]
  },
});

const upload = multer({ storage });

module.exports = upload;