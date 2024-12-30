
import { configDotenv } from "dotenv";
configDotenv();
import  createServer  from "./framework/express.js";
import { dbConnect } from "./config/dbConnect.js";
import { KafkaClient } from "./events/KafkaClient.js";



const app = createServer();

dbConnect();

export  default app
