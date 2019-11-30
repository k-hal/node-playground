const fs = require('fs')

fs.readFile(__filename,(err, data)  => {
    if(err) {
        console.err(err)
        return
    }
    console.log(data.toString())
})
