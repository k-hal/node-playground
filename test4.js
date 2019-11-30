const fs = require('fs')

for (let i = 0 ; i < 100; i++) {
    fs.appendFile('./data1.txt', i + ',',(err) => {
    })
}
