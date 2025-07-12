const express = require('express');
const cors = require('cors');
const {expressjwt:jwt} = require('express-jwt');
const jwksRsa = require('jwks-rsa');
require('dotenv').config();

const app = express();
app.use(cors());

const checkJWT=jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    algorithms: ['RS256'],
    }),
    audience : "https://localhost:5000/api",
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256'],
});

app.get('/api/protected', checkJWT, (req, res) => {
  res.json({
    message: "This is a protected route",
    user: req.user,
  });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});