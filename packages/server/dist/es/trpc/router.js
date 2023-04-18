"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = void 0;
const zod_1 = require("zod");
const instance_1 = require("./instance");
exports.root = (0, instance_1.router)({
    hello: instance_1.procedure.input(zod_1.z.string()).query(async (opts) => {
        const input = opts.input;
        return 'Hello, ' + input;
    }),
});
