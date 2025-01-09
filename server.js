const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App').default;

const app = express();

// Serve static files (e.g., CSS, images)
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  // Render the React app to a string
  const appHtml = ReactDOMServer.renderToString(<App />);

  // Send the HTML to the client
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My SSR React App</title>
        <link rel="stylesheet" href="/static/css/main.css">
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/static/js/main.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
