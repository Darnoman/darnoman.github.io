const express = require('express')
const app = express()
const port = process.env.port || 3000
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

setInterval(ping, 1000 * 60 * 10)

async function ping(){
    await fetch('https://darnoman-github-io-express.onrender.com/ping')
    .then(async res => console.log(await res.text()))
}
app.listen(port, () => {
    ping()
    console.log(`Example app listening on port ${port}`)
})