const express = require('express')
const multer = require('multer')
const cors = require('cors')
const port = 3000
const app = express()
app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage }).single('file')

app.get('/', (req, res) => {
    res.json({meg: "This is testing of upload file api"})
})

app.post('/api/upload', upload, (req, res) => {
    console.log('req.body', req.body)
    console.log('req.file', req.file)
    res.send('file is uploaded')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})