import express from "express";



const app = express();
app.use(express.json());


// Root url
// app.get( "/", (req, res) => {
//     res.send("Hello ToDo App");
// });
app.use('/', express.static('public'))
app.use('/static', express.static('static'))


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});