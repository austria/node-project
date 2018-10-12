console.log("hi");
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

 
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt',(text)=>{

});
//app.use(express.static(__dirname + '/public'));


app.use((req,res,next)=>{

    console.log('wowkring');
    console.log(`Method:${req.method} Url ${req.url} \n`);
    var now = new Date().toString();
     var log = `${now} : ${req.method} ${req.url}`;
    fs.appendFile('myfile.txt',log +'\n',(err)=>{

       if(err)
       {
        console.log('Unable to append the file');
       }
    });
    console.log(now);
    res.render('maintain.hbs');
    next();
});

app.get('/',(req,res)=>{

   // res.send("workingsdf");

//    res.send({
//        name :' ',
//        cast: 'abbasi',
//        location : [
//            'Bhurban',
//            'Murree'
//        ]
//    });


res.render('home.hbs',{
    name : 'Mehran'
   
});

});




app.get('/about',(req,res)=>{

    // res.send("About Page");
    // res.send();
    res.render('about.hbs');

});

app.listen(port,(req,res)=>{

   // res.send("Server is up on port 3000");
   console.log(`sever is up on port ${port}`);

});