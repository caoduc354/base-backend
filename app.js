app.get("/", (req, res) => {
    res.send("Hello, Express.js!");
  });
  
  app.listen(3000, () => {
    console.log("Express.js app listening on port 3000");
  });