import { config } from "dotenv";
import express from "express";
import DbConnection from "./config/DbConnection";
import ErrorResponse from "./error/ErrorResponse";
import MasterRouter from "./routers/MasterRouter";
import cors from "cors";

config({ path: "./src/config/config.env" });

class Server {
  public app = express();
  public router = MasterRouter;
}

// initialize server app
const server = new Server();

server.app.use(cors());
server.app.use(express.json());
server.app.use("/api", server.router);
server.app.use(ErrorResponse.defaultMethod);

//Database Connection
DbConnection.getConnection();

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
