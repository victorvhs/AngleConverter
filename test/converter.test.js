const converter = require("./src/util/converter")

test('Converts 6 and 0 into 180', () =>{
  expect(converter(6, 0)).toBe(180);
})

test('Hour is <=0',() =>{
  expect(converter(-1,6)).toBe(NaN)
})

test('Hour is 12',() =>{
  expect(converter(13,6)).toBe(NaN)
})

test('Minute <0',() =>{
  expect(converter(12,-1)).toBe(NaN)
})

test('Minute >  59',() =>{
  expect(converter(12,60)).toBe(NaN)
})

test('Only hour',()=>{
   expect(converter(1)).toBe(30)
   expect(converter(2)).toBe(60)
   expect(converter(3)).toBe(90)
   expect(converter(4)).toBe(120)
   expect(converter(5)).toBe(150)
   expect(converter(6)).toBe(180)
   expect(converter(7)).toBe(150)
   expect(converter(8)).toBe(120)
   expect(converter(9)).toBe(90)
   expect(converter(10)).toBe(60)
   expect(converter(11)).toBe(30)
   expect(converter(12)).toBe(0)
})
test('Converts 6 and 32 into 180', () =>{
  expect(converter(6, 32)).toBe(4);
})
test('Random numbers', ()=>{
  
})
