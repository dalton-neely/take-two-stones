const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', input => {
    if(parseInt(input, 10) % 2 === 0)
        console.log('Bob')
    else
        console.log('Alice')
    rl.close()
})