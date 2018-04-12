const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      ctlr = require('./controller/controller');
      cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
      app.set('db', db);
  });

app.use(express.static(`${__dirname}/../build`));


app.get('/api/shelf/:id', ctlr.retrieveBins);
app.get('/api/bin/:id', ctlr.retrieveBin);
app.put('/api/bin/:id', ctlr.revitalizeBin);
app.delete('/api/bin/:id', ctlr.banishBin);
app.post('/api/bin', ctlr.conjureBin);



// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'), (err) =>{
//         if (err) {
//               res.status(500).send(err)
//         }
//   });
// })

const port = process.env.PORT || 3000;

app.listen(port, () => {
        console.log('IT\'S OVER', port);
      });