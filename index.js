const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port
const PORT = 8050;

// Log requests to a file
const logRequest = (url) => {
    const logEntry = `${new Date().toISOString()} - Request URL: ${url}\n`;
    const logFilePath = path.join(__dirname, "log.txt");
    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error(`Error writing to log file: ${err}`);
        }
    });
};

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url;

    // Log the request
    logRequest(url);

    res.setHeader("Content-Type", "text/plain");

    switch (url) {
        case "/":
            res.statusCode = 200;
            res.end(`Welcome to the BarterX`);
            break;
        case "/products":
            res.statusCode = 200;
            res.end(`Here are the products up for Sale in BarterX`);
            break;
        case "/login":
            res.statusCode = 200;
            res.end(`Login to the BarterX`);
            break;
        case "/signup":
            res.statusCode = 200;
            res.end(`Sign up to the BarterX`);
            break;
        case "/profile":
            res.statusCode = 200;
            res.end(`Trader Profile`);
            break;
        case "/cart":
            res.statusCode = 200;
            res.end(`Your Shopping Cart is here`);
            break;
        case "/checkout":
            res.statusCode = 200;
            res.end(`Let"s start shipping`);
            break;
        case "/orders":
            res.statusCode = 200;
            res.end(`Your Orders are here`);
            break;
        case "/categories":
            res.statusCode = 200;
            res.end(`Browse Categories`);
            break;
        case "/chat":
            res.statusCode = 200;
            res.end(`Your Chat with fellow Traders`);
            break;
        case "/contact":
            res.statusCode = 200;
            res.end(`Contact Us at barterx@gmail.com`);
            break;
        case "/about":
            res.statusCode = 200;
            res.end(`The modern approach to trading our commodities`);
            break;
        default:
            res.statusCode = 404;
            res.end(`Page not found`);
            break;
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server initiated on port ${PORT}...`);
});
