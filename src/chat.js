import { Server } from 'socket.io';

class Chat {
    constructor(app, port) {
        this.port = port || 3030

        this.io = new Server(app, {
            port: this.port,
            cors: {},
        });

        this.bootstrap()
    }

    bootstrap() {
        this.users = []
        this.messages = []

        this.io.on('connection', socket => {
            console.log('Connected: ', socket.id)

            socket.on('disconnect', () => {
                console.log('Disconnect', socket.id)
            })
        })
    }

    showListen() {
        console.log(`Chat socket started in port ${this.port}`)
    }
}

export default Chat;
