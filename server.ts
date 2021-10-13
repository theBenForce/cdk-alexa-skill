import * as express from "express";

import {handler} from "./lib/hello-world-stack.SkillHandler";

const app = express();
app.use(express.json());

app.post("/skill", async (req, res) => {
  console.info(`Request`, req.body);
  const result = await new Promise((resolve, reject) => handler(req.body, {}, (err, result) => {
    if(err) {
      reject(err);
      return;
    }

    resolve(result);
  }));

  res.json(result);
});

const PORT = 8080;
app.listen(PORT, async () => {
  console.info(`Listening at: ${PORT}`);
});