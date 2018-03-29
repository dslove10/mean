let express = require('express'),
    app = express(),
    body_parser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/belt2');

mongoose.Promise = global.Promise;

let Schema = mongoose.Schema;

let MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title must be entered'],
        minlength: [3, 'Title must be at least 3 characters']
    },

    reviews: [{
        type: Schema.Types.ObjectId, 
        ref: 'Review'
    }]
}, { timestamps: true });

let ReviewSchema = new mongoose.Schema({
    _movie: {
        type: Schema.Types.ObjectId, 
        ref: 'Movie'
    },

    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters']
    },

    stars: {
        type: Number,
        min: 1,
        max: 5
    },

    content: {
        type: String,
        required: [true, 'Review is required'],
        minlength: [3, 'Review must be at least 3 characters']
    }
}, { timestamps: true });

mongoose.model('Movie', MovieSchema);
mongoose.model('Review', ReviewSchema);

let Movie = mongoose.model('Movie');
let Review = mongoose.model('Review');

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/client/dist')));

app.get('/movies', (req, res) => {
    Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json(err.errors);
        }

        return res.json(movies);
    });
});

app.post('/movies', (req, res) => {
    let movie = new Movie(req.body);
    let review = new Review(req.body);

    review._movie = movie._id;
    movie.reviews.push(review);

    review.save((err) => {
        if(err) {
            return res.status(400).json(err.errors)
        }
        movie.save((err) => {
            if (err) {
                return res.status(400).json(err.errors);
            }
    
            return res.json(movie);
        });
    });
});

app.post('/movies/new/:id', (req, res) => {
    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        let review = new Review(req.body);
        console.log(req.body);

        review._movie = movie._id;
        movie.reviews.push(review);
        
        review.save((err) => {
            if(err) {
                console.log('hello')
                return res.status(400).json(err.errors)
            }
            movie.save((err) => {
                if (err) {
                    return res.status(400).json(err.errors);
                }

                return res.json(movie);
            });
        });
    });
});

app.get('/movies/:id', (req, res) => {
    Movie.findOne({ _id: req.params.id })
    .sort('-stars')
    .populate('reviews')
    .exec((err, movie) => {
        if (err) {
            return res.status(400).json(err.errors);
        }

        return res.json(movie);
    });
});

app.delete('/movies/:id', (req, res) => {
    Movie.remove({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(400).json(err.errors);
        }

        return res.json('Movie deleted');
    });
});

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./client/dist/index.html'));
});

app.listen(8000, () => {
    console.log('listening on port 8000');
});