const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'myviews');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');

    // before view engine
    // res.sendFile('./views/index.html', { root: __dirname });

    // with view engine
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds starts', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');

    // before view engine
    // res.sendFile('./views/about.html', { root: __dirname });

    // with view engine
    res.render('about', {title: 'About'});
});

// // redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// create blog
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
})

// 404 page
app.use((req, res) => {
    // before view engine
    // res.sendFile('./views/404.html', { root: __dirname });

    // with view engine
    res.render('404', {title: '404'});
});