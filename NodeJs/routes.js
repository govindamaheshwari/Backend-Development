const fs = require('fs')
const requestHandler =((req,res)=>{
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
module.export=requestHandler;
// exporting multipe request
module.exports={
    handlers: requestHandler,
    someText:"hello guys"
}
//OTHER Way
module.exports.handler = requestHandler;
module.exports.someText="hello guys"
//Another Way
exports.handler = requestHandler;
exports.someText="hello guys"

