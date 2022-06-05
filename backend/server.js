const express = require('express')
const app = express()
const port = 3000

app.use(express.static('../frontend')) //elérhetővé teszi a frontend mappában lévő fájlokat

app.get('/', (req, res) => { //ha beírjuk a localhost:3000 címet, ezt fogja kiadni (fő endpoint) - ez most nem működik !
  res.send('Hello World!')
})

app.post('/save', (req, res) => { // http://127.0.0.1:3000/save endpointra érkezik egy post request, ide küldjük majd a mentendő adatot
    console.log(req.body); //body: payload fülön lesz látható, ebben az esetben a textarea-ba beírt szöveget küldi be
    res.send("Hello"); //visszaküldi az adatot a frontendnek
})
   

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})