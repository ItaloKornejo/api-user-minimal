"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const user_entity_1 = require("../entities/user.entity");
const userRepository = data_source_1.appDataSource.getRepository(user_entity_1.User);
exports.default = userRepository;
