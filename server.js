const express = require("express");
// const history = require("connect-history-api-fallback");
const app = express();

// app.use(history());
// app.use(express.static("./public/"));
app.use(express.static("./www/"));
app.get("/*", (req, res) => res.sendFile("index.html", { root: "/www/" }));

app.listen(process.env.PORT || 8080);
