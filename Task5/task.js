//@@viewOff:const

// Deklarace pomocných proměnných
const currentDateMonth = new Date().getMonth();

const currentDateYear = new Date().getFullYear();

//@@viewOff:const

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
 **/
function main(dtoIn=[]) {

    // Deklarace výstupního pole
    let dtoOut = [];

    // Iterace přes všechny zaměstance, obdržené prostřednictvím dtoIn
    for (let i = 0; i < dtoIn.length; i++) {

        // Inicializace pomocné proměnné pro získání měsíce narozenin zaměstance
        let employeeBirthdateMonth = new Date(dtoIn[i].birthdate).getMonth();

        // Inicializace pomocné proměnné pro získání roku narozenin zaměstance
        let employeeBirthdateYear = new Date(dtoIn[i].birthdate).getFullYear();

        // Selekce pouze těch zaměstnanců, kteří mají tento měsíc narozeniny
        if(employeeBirthdateMonth == currentDateMonth){

            let object = {
                name: dtoIn[i].name,
                surname: dtoIn[i].surname,
                gender: dtoIn[i].gender,

            }

            // Výpočet věku zaměstnance a následné přidaní věku do objektu zaměstnance
            dtoIn[i].age = currentDateYear - employeeBirthdateYear;

            // Přidaní zaměstnance do výsledného pole
            dtoOut.push(dtoIn[i]);
        }
    }

    // Vrácení výsledného pole
    return dtoOut;
}

//@@viewOff:main