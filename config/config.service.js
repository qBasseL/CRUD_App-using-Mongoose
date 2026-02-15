import { config } from "dotenv";
import {resolve} from 'node:path'


const NODE_ENV = process.env.NODE_ENV

const envPath = {
    development: '.env.development',
    production: '.env.production'
}

console.log(NODE_ENV, {path: envPath[NODE_ENV]});

config({path: resolve(`./config/${envPath[NODE_ENV]}`)})

export const PORT = process.env.PORT
export const DB_URI = process.env.DB_URI