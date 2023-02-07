"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.saveUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const user_entity_1 = require("../entities/user.entity");
const user_repository_1 = __importDefault(require("../repositories/user.repository"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_repository_1.default.find();
    return users ? users : null;
});
exports.getUsers = getUsers;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repository_1.default.findOneBy({ id });
    return user ? user : null;
});
exports.getUser = getUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repository_1.default.findOneBy({ id });
    if (user) {
        return (yield user_repository_1.default.delete(user.id)) ? user : null;
    }
    else {
        return null;
    }
});
exports.deleteUser = deleteUser;
const saveUser = (iUser) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_entity_1.User();
    user.email = iUser.email;
    user.password = iUser.password;
    user.firstname = iUser.firstname;
    user.lastname = iUser.lastname;
    user.birthday = iUser.birthday;
    return yield user_repository_1.default.save(user);
});
exports.saveUser = saveUser;
const updateUser = (id, iUser) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repository_1.default.findOneBy({ id });
    if (user) {
        const userUpdated = new user_entity_1.User();
        userUpdated.firstname = iUser.firstname;
        userUpdated.lastname = iUser.lastname;
        return (yield user_repository_1.default.update(user.id, userUpdated)) ? userUpdated : null;
    }
    else {
        return null;
    }
});
exports.updateUser = updateUser;
