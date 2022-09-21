const  express = require("express");
const  router = express.Router();
const fs = require("fs");

//-------------------------------------------
router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("./html/products.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/giadung" , (yeucau, trave) => {
    pageContent = "Hang Gia Dung !!!";
    trave.send(pageContent);
});

router.get( "/maymac" , (yeucau, trave) => {
    pageContent = "Hang May Mac !!!";
    trave.send(pageContent);
});

//-------------------------------------------
exports.ProductRouter = router;