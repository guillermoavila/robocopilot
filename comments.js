// Create web server
var express = require('express');
var app = express();

// Create comments array
var comments = [
  { name: 'John', comment: 'Hello!' },
  { name: 'Mary', comment: 'What a beautiful day!'}
];

// Add static file directory
app.use(express.static('public'));

// Add comments route
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Add comment route
app.get('/comment', function(req, res) {
  var name = req.query.name;
  var comment = req.query.comment;
  comments.push({ name: name, comment: comment });
  res.json({ status: 'ok' });
});

// Start server
app.listen(3000, function() {
  console.log('Server running at http://localhost:3000');
});