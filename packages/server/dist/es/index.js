"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@trpc/server/adapters/standalone");
const router_1 = require("./trpc/router");
const server = (0, standalone_1.createHTTPServer)({
    router: router_1.root,
});
server.listen(3000);
