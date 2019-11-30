const fs = require('fs')

const write = (i) =>{
    if (i > 100) return
    fs.appendFile('./data2.txt', i++ + ',' , (err) => {
        write(i)
    })
}

write(0)
