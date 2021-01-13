
module.exports = function calcAngle(hour, minute=0){
  hour = parseInt(hour)
  minute = parseInt(minute)
  if ((hour <= 0 || hour > 12) || (minute < 0 || minute > 59)){
    return NaN
  }
  
  if(hour === 12) hour = 0

  //const angle = Math.floor(Math.abs ((hour*30) + (minute *0.5)))
  const hourAngle = 0.5 * (hour * 60 + minute)
  const minuteAngle = minute * 6
  const angle = Math.abs(hourAngle - minuteAngle)
  return Math.min(360 - angle, angle)

}

