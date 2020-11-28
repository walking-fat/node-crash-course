const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = "mongodb+srv://node-crash-course:node1234@node-crash-course.xuksn.mongodb.net/crash-course?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) =>  console.log(err));

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'myviews');

// listen for requests
// app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('5fc2cf4aa053264fdd456f8a')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// routes
app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');

    // before view engine
    // res.sendFile('./views/index.html', { root: __dirname });

    // with view engine
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds starts', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    // ];
    // res.render('index', { title: 'Home', blogs });

    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');

    // before view engine
    // res.sendFile('./views/about.html', { root: __dirname });

    // with view engine
    res.render('about', {title: 'About'});
});

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
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