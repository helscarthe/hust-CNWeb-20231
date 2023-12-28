import accountRouters from "./account";
import userRouters from "./users";

export default function routes(app) {
  app.get("/account", (req, res) => {
    res.render("account.hbs", {
      title: "Hanoi Shin",
    });
  });
}

export { accountRouters, userRouters };
