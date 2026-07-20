import express from 'express';
import type {Express} from 'express';
const app: Express = express();
const PORT:number = 3000;


app.listen(PORT, ():void => {
    console.log(`Server is running on http://localhost:${PORT}`);
});