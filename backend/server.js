import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('server is readyyy bucky ')
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'a joke',
            content: 'you fickig freek'
        },
        {
            id: 2,
            title: '2 joje',
            content: 'stupid bitch'
        },
        {
            id: 3,
            title: 'fuck you',
            content: 'i am gonnna kill you basterd'
        },
        {
            id: 4,
            title: 'stupid monkey',
            content: 'you asshole'
        },
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);
});



