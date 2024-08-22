import { Request, Response, Router } from 'express';

const router = Router();

router.get('/ci-cd', (req: Request, res: Response) => {
  res.send('Hello, CICD!');
});

export default router;
