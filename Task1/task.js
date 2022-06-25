//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
  /**
   * Returns random number in range <min,max>
   * 
   * @param {number} min min value
   * @param {number} max max value
   * @return {number} random number
  **/

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


const femaleNameList = ["Eliška","Anna","Adéla","Tereza","Sofie","Viktorie","Ema","Karolína","Natálie","Amálie","Julie","Kristýna","Barbora","Nela","Laura","Klára","Emma","Anežka","Rozálie","Sára"];
const maleNameList = ["Jakub","Jan","Tomáš","Matyáš","Adam","Filip","Vojtěch","Lukáš","Martin","Matěj","Ondřej","Daniel","David","Dominik","Antonín","Michal","Petr","Štěpán","Tobiáš","Marek"];
const surnameList = ["Novák", "Novotný", "Dvořák", "Pocházka", "Kučera", "Němec", "Pospíšil", "Hájek", "Král", "Jelínek", "Růžička", "Beneš", "Fiala", "Sedláček", "Zeman", "Krejčí", "Čermák", "Čermák", "Urban", "Kozina"];


//@@viewOff:helpers
  //returns random gender
  function randomGender(){
      const number = getRandom(0,1);
      if(number === 0){
          return "male"
      } else {
          return "female"
      }
  }

  function randomBirthdate(min, max){
      const today = new Date();
      const birthdate = new Date(); // create date for birthdate
      const year = today.getFullYear() - getRandom(min, max); //set year
      birthdate.setFullYear(year)
      const month = getRandom(0, 11); //month
      birthdate.setMonth(month)
      const date = getRandom(0, 31); //month
      birthdate.setDate(date)

      return birthdate;
  }

  function randomName(gender){
      if(gender === "male"){
          const position = getRandom(1, maleNameList.length);
          return maleNameList[position - 1]
      } else {
          const position = getRandom(1s, femaleNameList.length);
          return femaleNameList[position - 1]
      }
  }


  function randomSurname(gender){
      const position = getRandom(1, surnameList.length);
      let surname = surnameList[position - 1];
      if(gender === "female"){
          const femaleSurname = surnameList[position - 1]
          //set correct surname ending
          if(surname.slice(-1) === "ý"){
              const tempName = surname.slice(0, -1)
              surname = surname + "á"
          } else if(surname.slice(-1) === "a"){
              const tempName = surname.slice(0, -1)
              surname = surname + "ová"

          } else {
                surname = surname + "ová"
          }
      }

      return surname;
  }


//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {array} outputs data
**/
function main(dtoIn={}) {
    // create variables with input data

    const count = dtoIn.count;
    const minAge = dtoIn.age.min;
    const maxAge = dtoIn.age.max;
    const allEmployee = []; //initialize array where we will put all employees

    //loop count times
    for (let i = 0; i < count ; i++) {
        const employee = {};    //initialize an object

        const gender = randomGender();  //choose a gender
        employee["gender"] = gender;

        const birthdate =  randomBirthdate(minAge, maxAge);  //choose birthdate
        employee["birthdate"] = birthdate

        employee["name"] = randomName(gender);    //choose name
        employee["surname"] = randomSurname(gender);    //choose name
        employee["tempWorkload"] = getRandom(1, 4) * 10;   //get workload


        allEmployee.push(employee);
    }
    //
    return allEmployee


}

main();