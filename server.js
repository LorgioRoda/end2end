import express from 'express';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());


app.post('/run-test', (req, res) => {
  const { testFile } = req.body;
  if (testFile) {
    const command = `npx playwright test --ui tests/${testFile}`;
    console.log(command, 'commmand');
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).send('Error executing test');
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.send('Test executed');
    });
  } else {
    res.status(400).send('Invalid test file');
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
