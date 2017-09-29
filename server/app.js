const express = require('express');
const fs = require('fs');
const cors = require('cors');

let readJSONFile = (filename, callback) => {
  fs.readFile(`data${filename}.json`, (err, data) => {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

const app = express();

app.use((req, res, next) => {
  console.log("req received", req.path);
  next();
})

app.use(cors());

app.get('/', (req, res) => {
  res.send(200, { message: "It is working" })
});

app.get('/comments', (req, res) => {
  readJSONFile(req.path, (err, data) => {
    res.send(data);
  });
});

app.get('/posts', (req, res) => {
  readJSONFile(req.path, (err, data) => {
    res.send(data);
  });
});

app.get('/post/:slug', (req, res) => {
  readJSONFile('/posts', (err, data) => {
    const post = data.find((post) => {
      return req.params.slug === post.urlSlug;
    })
    res.send(post);
  });
});

app.get('/post/:id/comments', (req, res) => {
  readJSONFile('/comments', (err, data) => {
    const postComments = [];
    data.forEach((comment) => {
      if (comment.postId == req.params.id) {
        postComments.push(comment);
      }
    });
    res.send(postComments);
  });
});

app.use(express.static(__dirname));

app.use(function(req, res, next) {
  if (!req.route)
    return next (new Error('404'));
  next();
});


app.use((err, req, res) => {
  res.status(500).send({ message: `${req.path} does not exist`})
});

const port = 3535;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
})

