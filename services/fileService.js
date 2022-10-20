const fs = require("fs");
const fastCsv = require("fast-csv");
const PersonClass = require("../models/personClass");
const dataFilePath = "./data.csv";
const Person = require("../models/person");

exports.WriteData = async (req, res) => {
  try {
    const readStream = fs.createReadStream(dataFilePath);
    const persons = [];
    const csvStream = fastCsv
      .parse()
      .on("data", (data) => {
        const personObj = new PersonClass(
          data[0],
          data[1],
          data[2],
          data[3],
          data[4]
        );

        persons.push(personObj);
      })
      .on("end", async () => {
        persons.shift(); //skip header
        Person.insertMany(persons)
          .then(() => {
            return res.status(200).send({ message: "Data import completed." });
          })
          .catch((err) => {
            return res.status(500).send({ error: err.message });
          });
      });

    readStream.pipe(csvStream);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};
