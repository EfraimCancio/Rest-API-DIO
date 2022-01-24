import {NextFunction, Router} from 'express';

const statusRoute = Router();

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
    req.statusCode(StatusCodes);
});

export  default statusRoute;