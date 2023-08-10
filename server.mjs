import express from "express";



const app = express();
app.use(express.json());


// Root url
// app.get( "/", (req, res) => {
//     res.send("Hello ToDo App");
// });
app.get('/', express.static('public'));
// app.use('/', express.static('public'));
app.use('/static', express.static('static'));

app.use((req, res) => {
    res.status(404).send("not found");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});