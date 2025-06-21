const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `audio_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });

app.use(express.static('public'));
app.post('/upload', upload.single('audio'), (req, res) => {
  res.json({ success: true, filename: req.file.filename });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
