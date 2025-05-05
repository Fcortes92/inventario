const express = require("express")
const req = require("express/lib/request")
const router = express.Router()
const holacontroller = require("../controllers/holaMundo.controllers")

router.get("/",holacontroller.holaMundo)
router.get("/esteban",(req,res)=>{
    res.send("hola esteban")
})
router.get("/cesar",(req,res,)=>{
    res.send("hola cesar")
})

module.exports = router