"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const hello_1 = require("./hello");
function run() {
    try {
        const name = core.getInput('name');
        const helloMessage = (0, hello_1.hello)(name);
        core.setOutput('name', helloMessage);
    }
    catch (error) {
        if (error instanceof Error)
            core.setFailed(error.message);
    }
}
run();
