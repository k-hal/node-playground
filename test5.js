const fs = require('fs').promises

async function main(){
    for (let i =0; i < 100; i++) {
        await(fs.appendFile('./data3.txt',`${i},`))
    }
}

main()
