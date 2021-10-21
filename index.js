const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('WOW, I am Excited to learn Node and express with nodemon. automatic restart')
})

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '01711809713' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01711809713' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01711809713' },
    { id: 3, name: 'suchorita', email: 'sucorita@gmail.com', phone: '01711809713' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01711809713' },
    { id: 5, name: 'Shsmita', email: 'Shsmita@gmail.com', phone: '01711809713' }
]

// app.get('/users', (req, res) => {
//     res.send(users);
// });

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});


// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
    console.log(req.params.id)
});

app.listen(port, () => {
    console.log('test done :)')
});