const fs = require('node:fs')

fs.cpSync('src/assets', 'dist/src/assets', { recursive: true })
