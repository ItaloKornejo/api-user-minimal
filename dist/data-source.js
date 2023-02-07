"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
require('dotenv').config();
exports.appDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // ssl: { rejectedUnauthorized: true },
    entities: [user_entity_1.User],
    logging: true,
    // synchronize: true
});
