const express = require("express")
const checkValue = require("../../util/saveData")

const router = new express.Router()

router.get('/clock/:hour/:minute?', async (req,res) =>{
  const {hour, minute } = req.params
  const val = await checkValue(hour,minute)
  
  res.status(200).send(val)
})

module.exports = router