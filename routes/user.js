const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const userController = require("../controllers/userController");

router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));
router.get('/register', function(req,res)
{res.send("hello world1")});

module.exports = router;