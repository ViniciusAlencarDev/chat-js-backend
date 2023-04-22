import express from "express";
import cors from 'cors';
import http from 'http';
import Chat from './chat.js'

class Server {
    constructor(port, chatPort) {
        this.app = express();
        this.port = port || 3000;
        this.chatPort = chatPort;

        this.server = http.createServer(this.app)

        this.bootstrap()
    }

    bootstrap() {
        this.app.use(cors())
        this.chat = new Chat(this.server, this.chatPort)
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server started in port ${this.port}`)
            this.chat.showListen();
        })
    }
}

export default Server
