const fs = require('fs')

const write = (i) =>{
    if (i > 100) return
    fs.appendFile('./data4.txt', `${i},` , (err) => {
        i = i + 1
        write(i)
    })
}

write(0)
