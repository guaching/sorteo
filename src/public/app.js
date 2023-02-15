const sorteos = ["1PM", "5PM", "10PM"];
const num11 = 0;
const num22 = 100;
const { num1, num2, num3 } = req.body;
const numeros = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

let data = (hora, gen1, gen2, gen3) => {
  return `${hora} : ${gen1} | ${gen2} | ${gen3} `;
};

sorteos.forEach((hora) => {
  var gen2 = numeros(num11, num22);
  var gen3 = numeros(num11, num22);
  var gen1 = numeros(num11, num22);
  document.write(data(hora, gen1, gen2, gen3));
});
console.log(req.body);
