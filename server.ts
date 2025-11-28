const http =require('http');
const PORT=3000;
const server=http.createServer((_req: any,res: { writeHead: (arg0: number, arg1: { 'content-type': string; }) => void; end: (arg0: string) => void; })=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end(`welcome to node js world`)
})
server.listen(PORT,()=>{
    console.log(`server is running successfully`)
    console.log(`Access your server at:http://localhost:${PORT}`)  
})