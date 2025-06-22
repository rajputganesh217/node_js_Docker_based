const express = require('express');
const app = express();

// Route for the homepage
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to Docker + Express</title>
      <style>
        body {
          background: linear-gradient(to right, #4facfe, #00f2fe);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          text-align: center;
          padding: 80px;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.5rem;
        }
        .box {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 30px;
          display: inline-block;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>🚀 Hello from Express inside Docker!</h1>
        <p>Your app is running beautifully on <strong>Node.js & Docker</strong>.</p>
      </div>
    </body>
    </html>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('🌐 Server is running on http://localhost:3000');
});
