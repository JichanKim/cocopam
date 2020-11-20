'use strict';

/************* include library **************33/
const http    = require('http');
const express = require('express');
const server  = express();
const serverPort = 1669;


/************* Routing **************/
//웹페이지의 세부 주소를 지정한다.
server.use('/',            require('./server'));
server.use('/api',         require('./api'));
server.use('/apiosy',         require('./apiosy'));
server.use('/apitotal',         require('./apitotal'));
server.use('/client',             require('./client'));
/************* Running server **************/
const httpServer = http.createServer(server);
httpServer.listen(serverPort, () => {
    const startdate = new Date();
    console.log(`[START SERVER (port ${serverPort}) ${startdate}]`);
});