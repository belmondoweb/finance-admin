import { json, urlencoded } from 'body-parser';
import * as compression from 'compression';
import * as requestLogger from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as express from 'express';
import { Request, Response } from 'express';
import { errorHandler } from './error-handler';
import { MockPlaylists, MockUsers } from './mocks';

export const app = express();

app.use(cors());
app.use((helmet as any)());
app.use(compression());
app.use(requestLogger('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/users', (req: Request, res: Response) => {
    res.send(MockUsers);
});

app.get('/playlists', (req: Request, res: Response) => {
    res.send(MockPlaylists);
});

app.use(errorHandler);
