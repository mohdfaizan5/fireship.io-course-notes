import express from "express";
import Chance from "chance";
const chance = new Chance();
const app = express();

const animals = [...Array(100).keys()].map((id) => {
  return {
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});

app.route("/").get((req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  // Searching from db(local one)
  const results = animals.filter((a) => {
    return a.type.toLowerCase().includes(q);
  });

  res.send(results)
});

app.listen(3000, () => {
  console.log("\t✅ Server up");
});
