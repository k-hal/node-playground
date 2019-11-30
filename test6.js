const fs = require('fs').promises

const write = (i) =>{
    if (i > 100) return
    fs.appendFile('./data3.txt', i++ + ',' , (err) => {
        write(i)
    })
}

write(0)
