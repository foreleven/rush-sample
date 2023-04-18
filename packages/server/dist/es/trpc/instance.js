"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procedure = exports.router = void 0;
const server_1 = require("@trpc/server");
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = server_1.initTRPC.create();
/**
 * Export reusable router and procedure helpers
 * that cane be used throughout the router
 */
exports.router = t.router;
exports.procedure = t.procedure;
