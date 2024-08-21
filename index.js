// test commit
import express from 'express';
import bodyParser from 'body-parser';

let testData = [
    'String1',
    'String2',
    'String3',
    'String4',
];

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/data', (req, res) => {
    res.json(testData);
});

app.get('/data/:key', (req, res) => {
    const item = testData[req.params.key];
    res.json(item);
})

app.post('/data', (req, res) => {
    console.log(req.body);
    testData.push(req.body.item);
    res.status(201).json(testData);
})

app.delete('/data/:key', (req, res) => {
    testData.splice(req.params.key, 1);
    res.status(200).json(testData);
})




app.listen(port, () => console.log(`Listening on ${port}`));
