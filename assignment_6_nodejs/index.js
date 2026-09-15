const http = require("http");

const server = http.createServer((req, res) =>{
    if (req.url == "/"){
        res.write("<h1>Hello from the Home page</h1>");
        res.write("<p>Welcome to the Home page</p>");
        res.write("<a href='/'>Home page</a><br>");
        res.write("<a href='/about'>About page</a><br>");
        res.write("<a href='/contact'>Contact page</a><br>");
        res.write("<a href='/blog'>Blog page</a><br>");
        res.end();
    }else if (req.url == "/about"){
        res.write("<h1>Hello from the About page</h1>");
        res.write("<p>Welcome to the About page</p>");
        res.write("<a href='/about'>About page</a><br>");
        res.write("<a href='/contact'>Contact page</a><br>");
        res.write("<a href='/blog'>Blog page</a><br>");
        res.write("<a href='/'>Home page</a><br>");
        res.end();
    }else if (req.url == "/contact"){
        res.write("<h1>Hello from the Contact page</h1>");
        res.write("<p>Welcome to the Contact page</p>");
        res.write("<a href='/about'>About page</a><br>");
        res.write("<a href='/contact'>Contact page</a><br>");
        res.write("<a href='/blog'>Blog page</a><br>");
        res.write("<a href='/'>Home page</a><br>");
        res.end();
    }else if (req.url == "/blog"){
        res.write("<h1>Hello from the Blog page</h1>");
        res.write("<p>Welcome to the Blog page</p>");
        res.write("<a href='/'>Home page</a><br>");
        res.write("<a href='/about'>About page</a><br>");
        res.write("<a href='/contact'>Contact page</a><br>");
        res.write("<a href='/blog'>Blog page</a><br>");
        res.end();
    }else{
        res.write("<h1>404 page not found</h1>");
        res.write("<a href='/'>Home page</a><br>");
        res.end();
    }
}) // eta ekta callback function input akare nibe

server.listen(5000, ()=>{
    console.log("server is running on port 5000");
}) // server open korlam, server off korbo ctrl+c diye



 
