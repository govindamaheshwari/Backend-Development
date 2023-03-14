const http= require('http')
const server =http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
    res.write('<html>')
    res.write('<head><title>my first page</title><head>')
    let ur= req.url;
    if (ur=='/home'){
        res.write('<body><h1>Welcome home</h1></body>')
    }
    else if(ur=='/about'){
        res.write('<body><h1>Wlecome to about Us page</h1></body>')
    }
    else{
        res.write('<body><h1>Wlecome to my NodeJs project</h1></body>')
    }
    res.write('</html')
})
server.listen(4000)
