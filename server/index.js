const express = require("express");
const ctrl = require("./controllers/messages_controller")

const app = express();
app.use(express.json());

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, ctrl.create);
app.get(messagesBaseUrl, ctrl.read);
app.put(`${messagesBaseUrl}/:id`, ctrl.update);
app.delete(`${messagesBaseUrl}/:id`, ctrl.delete);

const port = 3001;
app.listen (port, () => {
    console.log(`server on port ${port}`)
})

