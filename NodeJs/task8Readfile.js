const http= require('http')
const fs = require('fs')
const server =http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers)
    let url=req.url
    console.log('urll', url);
    let method =req.method
    if (url==='/'){
        return fs.readFile("message.text",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            console.log(`a>>> ${data}`);
           // res.setHeader('content-type','text/html')
            res.write('<html>')
            res.write('<head><title>my first routing request</title><head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="key"><button type="submit">Send</button></form></body>')
            res.write('</html>')
            res.end()
       
        })
        
    }
    
    else if (url ==='/message' && method ==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
                const parseBody=Buffer.concat(body).toString()
                console.log(parseBody)
                let mes=parseBody.split("=")[1]
                console.log(mes);
                fs.writeFileSync('message.text',mes)
                res.statusCode=302
                res.setHeader('location','/')
                return res.end()
        })
    }
    else {
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<head><title>my first page</title><head>')
        res.write('<body><h1>Wlecome to my NodeJs project</h1></body>')
        res.write('</html')
    }
})
server.listen(4000)
