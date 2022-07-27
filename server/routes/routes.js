const router = require("express").Router()

const EnqControllers = require("../controllers/EnqController")

router.get("/", EnqControllers.getAllEnquentes)
router.get("/:id", EnqControllers.getOneEnquent)
router.post("/post", EnqControllers.postEnquent)
router.put("/put/:id", EnqControllers.modifyEnquent)
router.delete("/delete/:id", EnqControllers.deleteEnquent)

module.exports = router