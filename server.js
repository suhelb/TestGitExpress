const express = require("express")
const hbs = require("hbs");
var app = express();

const port =  process.env.PORT || 3000;
console.log(`the port is ${port}`);

hbs.registerPartials(__dirname+"/views/partials");
app.set("view engine","hbs");
app.use(express.static(__dirname+"/public"));
hbs.registerHelper("GetYear",()=> new Date().getFullYear());

app.use((req, res,next)=>{
    //untill all above code of next is finished..the server is not going to server any request
    next();
});

app.get("/",(req,res)=>{
    // res.send("<h1>Hello this is first express app</h1>");
    // res.send({
    //     name:"Suhel"
    // });

    res.render("home.hbs",{
        pagename:"Home Page",
        message:"Welcome to the home page"
    })
});

app.get("/about", (req,res)=>{
    res.render("about.hbs",{
        pagename:"ABOUT PAGE"
    });
});

app.get("/test", (req,res)=>{
    res.render("about.hbs",{
        pagename:"TEST PAGE"
    });
});

app.get("/yourname",(req,res)=>{
res.send("<h1>My name is suhel</h1>");
});

console.log(`Listening to ${port}`);
app.listen(port);