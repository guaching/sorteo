import express from "express";
import morgan from "morgan";
import path from "path";

const __dirname = path.resolve();
const app = express();

//settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extends: false }));
app.use(express.static(path.join(__dirname, 'src/public')));
console.log(path.join(__dirname, 'src/public'))
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/run", (req, res) => {
  const sorteos = ["1PM", "5PM", "10PM"];
  const num11 = 0;
  const num22 = 100;
  const { num1, num2, num3 } = req.body;
  const numeros = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  let data = (hora, gen1, gen2, gen3) => {
    return console.log(`${hora} : ${gen1} | ${gen2} | ${gen3} `);
  };

  sorteos.forEach((hora) => {
    var gen2 = numeros(num11, num22);
    var gen3 = numeros(num11, num22);
    var gen1 = numeros(num11, num22);
    console.log(data(hora, gen1, gen2, gen3));
  });
  console.log(req.body);
  res.render("final", { data });
//   , { data: data }
  //   res.send(num1 + num2 + num3);
//   ` ${hora} : ${gen1} | ${gen2} | ${gen3} `
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
