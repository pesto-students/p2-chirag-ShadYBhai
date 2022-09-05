const  http = require("http");
const url = require("url");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
Sentry.init({
    dsn: "https://79c63e8510ec4a6fb5aeb1cd98d0a58b@o1381008.ingest.sentry.io/6694852",
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
  const transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
  });
  


http.createServer((req,res)=>{
    const name = url.parse(req.url,true).query.name;
    throw Error("Error occured");
    res.end();
}).listen(8080);