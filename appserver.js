const  express = require("express");
const PORT = process.env.PORT || 80;
const appServer = express();
const router = express.Router();
const fs = require("fs");

// Middleware
const bodyParser = require("body-parser");


// ------------------- Middleware - kiem soat tinh huong
router.use( (yeucau, trave, ketiep) => { 
    console.log("REQ: ", Date.now(), yeucau.url);
    ketiep();
});

router.use( (loixayra, yeucau, trave, ketiep) => { 
    console.log("ERROR: ", Date.now(), yeucau.url);
    console.log(loixayra);
    trave.status(500).send("Dang co loi xay ra, chua biet o dau !!!");
});

// ------------------- Routing
router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("/html/main.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/home" , (yeucau, trave) => {
    data = fs.readFileSync("/html/home.html");
    pageContent = data.toString();
    trave.send(pageContent);
});


//--- Add middleware
//const session = express.session();
appServer.use(bodyParser.json());
//appServer.use(session({secret: "id-session-Mr.Tu"​}));


// ------------------------- Add Router / Controller
appServer.use("/", router);

const ProductRouter = require("./controller/productController").ProductRouter;
appServer.use("/products", ProductRouter);

const LoginRouter = require("./controller/loginController").LoginRouter;
appServer.use("/login", LoginRouter);

// ----------- RUN / Launching !!! 
appServer.listen( PORT );

console.log("Web da mo tai " + PORT);
