const express = require('express')
const app = express()

const port = 80

app.get('/restrictedDownload/SHC/F9ZcNMMbaA5MXFNx7c8V', (req, res, next) => {
  const filename = __dirname + '/encodedData.zip.aes'
  res.download(filename)
})

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
