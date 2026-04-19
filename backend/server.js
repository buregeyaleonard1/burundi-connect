const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend irakora neza!");
});

app.listen(3000, () => console.log("Server running"));
vykkyk2qx44moudf0bnpdjnwigea46ekxifuvc5jnsbnxkarynfvpyromwxoc0ye
