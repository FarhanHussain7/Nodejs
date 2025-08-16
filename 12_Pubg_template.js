const express = require("express");
const path = require('path');

const app = express();
const port = 80;

app.use('/static', express.static('static'));

//PUG SPECIFIC SETUP
app.set('view engine', 'pug')// set complete engine at the pug
app.set('views', path.join(__dirname, 'views'))// set the view directory



//endpoints
app.get('/',(req, res)=>{
    const con="this is the best content on the internet so far to use it wisely"
    const param= {'title': 'Pubg is the best game', 'content': con}
    res.status(200).render('./index.pug', param);
})

// app.post('/',(req, res)=>{
//    console.log(req.body)
//   // name1 = req.body.name
//   // email = req.body.email
//   // mobile = req.body.mobno
//   // password = req.body.pass
//   // address = req.body.address
//   // message = req.body.more



//   const param= {'message': 'Your form has been submitted successfully '}
//   res.status(200).render('./index.pug', param);
// })

// Start the server
app.listen(port, () => {
  console.log(
    `the application will strat on this port http://localhost:${port}`
  );
});




