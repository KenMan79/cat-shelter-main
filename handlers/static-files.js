const url = require('url');
const fs = require('fs');

function getContentType(url) {
  if(url.endsWith('css')) {
    return 'text/css'
  } else if (url.endsWith('html')) {
    return 'text/html'
  } else if (url.endsWith('png')) {
    return 'text/png'
  } else if (url.endsWith('js')) {
    return 'text/js'
  } else if (url.endsWith('')) {
    return 'application/json'
  }
}

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname.startsWith('/content') && req.method === "GET") {
    fs.readFile(`./${pathname}`, 'utf-8', (err, data) => {
      if(err) {
        console.log(err);
        res.writeHead(404, {
          "Content-Type": "text/plain"
        });
        res.write('Error was found, use the force next time');
        res.end();
        return
      }
      //console.log('static files.js [31] pathname is ', pathname);
      res.writeHead(
        200,
        {"Content-Type": getContentType(pathname)}
      );
     // console.log('the data is ', data)
      res.write(data);
      res.end();
    })
  }
}