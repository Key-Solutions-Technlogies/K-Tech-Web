//import app from "./app";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import router from "./routes/tasks";
import { options } from "./swaggerOptions";
import taskRoutes from "./routes/tasks";


const specs = swaggerJSDoc(options);
const app =  express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(taskRoutes)

app.use('/docs',swaggerUI.serve, swaggerUI.setup(specs));


app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});