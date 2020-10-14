// import bodyParser from 'body-parser';

import express, { Express } from "express"
import routes from "./routes"

const PORT: string | number = process.env.PORT || 4000;

const app: Express = express();

app.use(routes);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
