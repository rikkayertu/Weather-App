const express = require("express");
const { engine } = require("express/lib/application");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
// app.engine('hbs', engine.handlebars);
app.set('views',template_path);
app.set('view engine', 'hbs');
hbs.registerPartials(partials_path)

app.use(express.static(path.join(__dirname,"../public")));


app.get("", (req,res)=>{
    res.render('index.hbs');
})

app.get("/about",(req,res)=>{
    res.render('about.hbs')
})

app.get("/weather",(req,res)=>{
    res.render('weather.hbs')
})

app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg: "Oops!! Page Not Found"
    })
})

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
})