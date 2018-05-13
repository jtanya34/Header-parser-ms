const express=require('express');
const requestIp=require('request-ip');
const requestlang=require('express-request-language');
const useragent=require('useragent');

const port= process.env.PORT || 3000;


var app=express();



app.get('/',(req,res)=>{
	res.send({
		// Ip address

		ipAddress:requestIp.getClientIp(req),
		language: req.headers['accept-language'],
		software:useragent.lookup(req.headers['user-agent']).os.toString()
	});
	
});
	
app.listen(port,()=>{
	console.log(`server is up on ${port}`);
});