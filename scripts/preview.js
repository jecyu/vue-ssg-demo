// 预览
const express = require('express')
const app = express()
const port = 3001

app.use(express.static('dist'))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})