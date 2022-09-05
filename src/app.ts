import express from "express";
import { DashboardController } from "./controllers/Dashboard.controller";
import { HomeController } from "./controllers/Home.controller";

const app = express();
app.use(express.json());

app.get("/", HomeController.handle);

/**
 * @roles: ["ADMIN", "CREATOR", "EDITOR"]
 * Use a single role in headers to call route
 */
app.get("/dash/admin", DashboardController.admin);
app.get("/dash/creator", DashboardController.creator);
app.get("/dash/editor", DashboardController.editor);

const PORT = process.env.PORT || 3535;
app.listen(PORT, () => {
  console.log("🔥 Serverr running !");
});
