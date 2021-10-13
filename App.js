const http = require("http")
 http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("what is up! welcome to our home page")
        res.end()
    }
    else if(req.url==="/about"){
        res.write('this is our background history')
        res.end()
    }
    else{
        res.end(`<h1>Ooops</h1>
        <p>The page you request for could not be found</p>
        <a href="/">back home</a>`)
    }
    
}).listen(5000)