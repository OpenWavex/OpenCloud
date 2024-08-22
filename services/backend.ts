import express, { Express, Request, Response } from "express";

import cicd from './CI-CD/ci-cd';

const app: Express = express();
const port = process.env.PORT || 3000;

// Define a route for the root URL ("/")
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Wavex!');
});

app.use('/', cicd);

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Wavexis running on port ${PORT}`);
});

