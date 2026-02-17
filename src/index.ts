import express, { Request, Response } from 'express';

interface EchoResponse {
  message: string;
}

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.get(
  '/',
  (req: Request<any>, res: Response<EchoResponse>) => {
    return res.json({ message: 'Hello, World v.3!' });
  }
);
app.get(
  '/:message',
  (req: Request<{ message: string }, EchoResponse>, res: Response<EchoResponse>) => {
    const { message } = req.params;
    const payload: EchoResponse = { message };
    return res.json(payload);
  }
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`);
});
