const http = require('http');
const logger = require('./modules/logger');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.end('Welcome to our website!');
            logger.info(`Success: ${req.method} ${req.url}`);
            break;
        case '/about':
            res.statusCode = 200;
            res.end('Welcome to the About page.');
            logger.info(`Success: ${req.method} ${req.url}`);
            break;
        case '/contact':
            res.statusCode = 200;
            res.end('Welcome to the Contact page.');
            logger.info(`Success: ${req.method} ${req.url}`);
            break;
        default:
            res.statusCode = 404;
            res.end('Error 404: Page Not Found');
            logger.warn(`Not Found: ${req.method} ${req.url}`);
            break;
    }
});

server.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});
