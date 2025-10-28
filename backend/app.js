const express = require('express')
const app = express()
const PORT = 3000

app.get('/api', (req, res) => res.json({ message: `Hello from Node! ${PORT}` }))

app.listen(PORT, () => console.log('Server running on port 3000'))
