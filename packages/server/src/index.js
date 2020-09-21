"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = express_1.express();
app.get('/', (request, response) => {
    response.send('Hello world!');
});
app.listen(5000);
//# sourceMappingURL=index.js.map