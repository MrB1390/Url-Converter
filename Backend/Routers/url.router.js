import express from 'express';
import { generateShortenUrl, getShortUrl, getUrlAll } from '../Controller/url.controller.js';
import { authLogin } from '../Middleware/auth.controller.js';


const router = express.Router();

router.post('/shortUrl',authLogin, generateShortenUrl);
router.get('/url',authLogin,getUrlAll);
router.get('/:shortUrl',authLogin,getShortUrl)

export default router;