const db = require("./db")
const calc_angle = require("./converter")

async function checkValue(hour, minute){
  const response = await db.query(
  `SELECT hour,minute,angle FROM angleconvert WHERE hour = ${hour} AND minute = ${minute}`
  )
  const resp = await response.rows
  console.log(resp[0])
    if (resp[0]){
      return {"angle":resp[0].angle}
  }
  else{
      const angle = calc_angle(hour,minute)
      await insertData(hour, minute, angle)
      return {"angle":angle}
  }
}

async function insertData(hour, minute, angle){
  const response = await db.query(`
    INSERT INTO angleconvert (hour, minute, angle) VALUES (${hour}, ${minute}, ${angle})
  `)

}

module.exports = checkValue