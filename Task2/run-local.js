const tools = require("../tools/tools")
const path = require("path");

const dtoIn = [{"gender":"female","birthdate":"1979-03-24T12:42:51.166Z","surname":"Kučeraová","tempWorkload":20},{"gender":"female","birthdate":"1990-05-09T12:42:51.166Z","name":"Amálie","surname":"Pocházkaová","tempWorkload":30},{"gender":"female","birthdate":"1982-05-09T12:42:51.166Z","name":"Kristýna","surname":"Kozinaová","tempWorkload":40},{"gender":"female","birthdate":"1984-06-24T12:42:51.166Z","name":"Anna","surname":"Pospíšilová","tempWorkload":40},{"gender":"female","birthdate":"1976-03-14T12:42:51.166Z","name":"Amálie","surname":"Krejčíová","tempWorkload":30},{"gender":"male","birthdate":"1999-01-13T12:42:51.166Z","name":"Michal","surname":"Urban","tempWorkload":10},{"gender":"female","birthdate":"1996-08-28T12:42:51.166Z","name":"Julie","surname":"Kozinaová","tempWorkload":40},{"gender":"male","birthdate":"1995-11-25T12:42:51.166Z","name":"Jakub","surname":"Král","tempWorkload":10},{"gender":"female","birthdate":"1988-09-22T12:42:51.166Z","name":"Eliška","surname":"Čermáková","tempWorkload":30},{"gender":"male","birthdate":"1994-02-28T12:42:51.166Z","name":"Tomáš","surname":"Král","tempWorkload":40},{"gender":"female","birthdate":"1992-08-07T12:42:51.166Z","name":"Adéla","surname":"Pocházkaová","tempWorkload":20},{"gender":"male","birthdate":"2000-10-19T12:42:51.166Z","name":"Adam","surname":"Růžička","tempWorkload":30},{"gender":"female","birthdate":"1979-08-10T12:42:51.166Z","name":"Kristýna","surname":"Králová","tempWorkload":40},{"gender":"female","birthdate":"2004-05-28T12:42:51.166Z","name":"Rozálie","surname":"Novotnýová","tempWorkload":40},{"gender":"male","birthdate":"1979-06-15T12:42:51.166Z","name":"Ondřej","surname":"Růžička","tempWorkload":40},{"gender":"male","birthdate":"1969-07-10T12:42:51.166Z","name":"Martin","surname":"Sedláček","tempWorkload":20},{"gender":"male","birthdate":"1986-08-11T12:42:51.166Z","name":"Jan","surname":"Beneš","tempWorkload":20},{"gender":"male","birthdate":"1991-10-03T12:42:51.166Z","name":"Antonín","surname":"Kučera","tempWorkload":10},{"gender":"male","birthdate":"1986-01-29T12:42:51.166Z","name":"Matěj","surname":"Čermák","tempWorkload":10},{"gender":"female","birthdate":"1997-10-23T12:42:51.166Z","name":"Viktorie","surname":"Nováková","tempWorkload":30},{"gender":"male","birthdate":"2001-12-22T12:42:51.166Z","name":"Marek","surname":"Fiala","tempWorkload":40},{"gender":"female","birthdate":"1980-04-26T12:42:51.166Z","name":"Amálie","surname":"Sedláčeková","tempWorkload":10},{"gender":"male","birthdate":"2001-06-21T12:42:51.166Z","name":"Michal","surname":"Pocházka","tempWorkload":30},{"gender":"female","birthdate":"2000-09-13T12:42:51.166Z","name":"Amálie","surname":"Urbanová","tempWorkload":20},{"gender":"female","birthdate":"1979-02-24T12:42:51.166Z","name":"Julie","surname":"Zemanová","tempWorkload":30},{"gender":"male","birthdate":"1996-11-11T12:42:51.166Z","surname":"Kozina","tempWorkload":40},{"gender":"male","birthdate":"1970-09-10T12:42:51.166Z","name":"Michal","surname":"Beneš","tempWorkload":20},{"gender":"female","birthdate":"1982-10-18T12:42:51.166Z","name":"Ema","surname":"Němecová","tempWorkload":10},{"gender":"male","birthdate":"1988-01-07T12:42:51.166Z","name":"Michal","surname":"Král","tempWorkload":30},{"gender":"female","birthdate":"1967-08-20T12:42:51.166Z","name":"Anna","surname":"Pocházkaová","tempWorkload":10},{"gender":"male","birthdate":"1995-06-21T12:42:51.166Z","name":"Adam","surname":"Pocházka","tempWorkload":10},{"gender":"female","birthdate":"1974-01-08T12:42:51.166Z","name":"Laura","surname":"Růžičkaová","tempWorkload":30},{"gender":"female","birthdate":"1999-03-24T12:42:51.166Z","name":"Sofie","surname":"Nováková","tempWorkload":40},{"gender":"male","birthdate":"1979-08-06T12:42:51.166Z","name":"Ondřej","surname":"Kozina","tempWorkload":10},{"gender":"female","birthdate":"1973-11-09T12:42:51.166Z","name":"Amálie","surname":"Kučeraová","tempWorkload":40},{"gender":"male","birthdate":"1967-03-02T12:42:51.166Z","name":"Jan","surname":"Němec","tempWorkload":40},{"gender":"male","birthdate":"1980-06-24T12:42:51.166Z","name":"Matěj","surname":"Král","tempWorkload":20},{"gender":"male","birthdate":"1969-06-15T12:42:51.166Z","name":"Matěj","surname":"Krejčí","tempWorkload":30},{"gender":"male","birthdate":"1978-04-26T12:42:51.166Z","name":"Antonín","surname":"Zeman","tempWorkload":40},{"gender":"male","birthdate":"1977-12-25T12:42:51.166Z","name":"Dominik","surname":"Novák","tempWorkload":10},{"gender":"male","birthdate":"1982-11-02T12:42:51.166Z","name":"Antonín","surname":"Novák","tempWorkload":10},{"gender":"male","birthdate":"1995-02-15T12:42:51.166Z","name":"Ondřej","surname":"Urban","tempWorkload":20},{"gender":"male","birthdate":"1975-04-12T12:42:51.166Z","name":"Filip","surname":"Čermák","tempWorkload":30},{"gender":"male","birthdate":"1980-04-26T12:42:51.166Z","name":"Lukáš","surname":"Novák","tempWorkload":20},{"gender":"male","birthdate":"1968-07-26T12:42:51.166Z","name":"Tobiáš","surname":"Zeman","tempWorkload":20},{"gender":"female","birthdate":"1991-09-24T12:42:51.167Z","name":"Laura","surname":"Zemanová","tempWorkload":10},{"gender":"female","birthdate":"1990-01-09T12:42:51.167Z","name":"Anežka","surname":"Jelíneková","tempWorkload":40},{"gender":"male","birthdate":"1969-03-01T12:42:51.167Z","name":"Jakub","surname":"Krejčí","tempWorkload":40},{"gender":"male","birthdate":"1975-09-12T12:42:51.167Z","name":"Tomáš","surname":"Beneš","tempWorkload":20},{"gender":"male","birthdate":"1984-06-24T12:42:51.167Z","name":"Matyáš","surname":"Růžička","tempWorkload":10}];

async function runFile(file) {
  const dtoOut = await tools.runFile(path.resolve(__dirname, file), dtoIn);
  console.log(JSON.stringify(dtoOut, null, 1));
}

runFile("task.js");
