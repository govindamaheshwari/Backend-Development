const http= require('http')
const fs = require('fs')
const server =http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers)
    let url=req.url
    let method =req.method
    console.log('ui',url)
    if (url==='/'){
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<head><title>my first routing request</title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="key"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
       
    }
    if (url ==='/message' && method ==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString()
            console.log(parseBody)
        })
        fs.writeFileSync('message.text','DUMMY')
        res.statusCode=302
        res.setHeader('location','/')
        return res.end()
    }
    res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title>my first page</title><head>')
    res.write('<body><h1>Wlecome to my NodeJs project</h1></body>')
    res.write('</html')
})
server.listen(8000)

