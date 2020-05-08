import { Router } from 'express';

const route = new Router();

route.get('/', (req, res) => res.json('ok'));

export default route;
