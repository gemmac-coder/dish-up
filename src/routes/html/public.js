const { Router } = require("express");
const {
  renderHomepage,
  renderLogin,
  renderSignup,
} = require("../../controllers/html/public");
const router = Router();

router.get("/", renderHomepage);
router.get("/login", renderLogin);
router.get("/signup", renderSignup);
//insert recipe, results page

module.exports = router;