import Server from './server.js'
import 'dotenv/config';

const app = new Server(Number(process.env.PORT), Number(process.env.PORT_CHAT))
app.listen()
