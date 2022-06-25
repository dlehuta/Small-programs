
//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
**/

function main(dtoIn=[]) {

    // Declarate output variable
    let dtoOut = {
        "names": {
            "all": {},
            "male": {},
            "female": {},
            "femalePartTime": {},
            "maleFullTime": {}
        },
        "chartData": {
            "all": [],
            "male": [],
            "female": [],
            "femalePartTime": [],
            "maleFullTime": []
        },
    };

    // Iterate through all input data and put data to output variable
    for (const employee of dtoIn) {

        //add to all employee
        if (dtoOut.names.all[employee.name]) {
            dtoOut.names.all[employee.name]++;
        } else {
            dtoOut.names.all[employee.name] = 1;
        }

        //add to male
        if (employee.gender === "male") {
            if (dtoOut.names.male[employee.name]) {
                dtoOut.names.male[employee.name]++;
            } else {
                dtoOut.names.male[employee.name] = 1;
            }

            //add to all maleFullTime
            if (employee.workload === 40) {
                if (dtoOut.names.maleFullTime[employee.name]) {
                    dtoOut.names.maleFullTime[employee.name]++
                } else {
                    dtoOut.names.maleFullTime[employee.name] = 1;
                }
            }
        }
                //add to female
                if (employee.gender === "female") {
                    if (dtoOut.names.female[employee.name]) {
                        dtoOut.names.female[employee.name]++;
                    } else {
                        dtoOut.names.female[employee.name] = 1;
                    }

                    //add to femalePartTime
                    if (employee.workload !== 40) {
                        if (dtoOut.names.femalePartTime[employee.name]) {
                            dtoOut.names.femalePartTime[employee.name]++
                        } else {
                            dtoOut.names.femalePartTime[employee.name] = 1;
                        }
                    }
                }
            }
            //add to map char data
            //all
            for (const name in dtoOut.names.all) {
                dtoOut.chartData.all.push({ label: name, value: dtoOut.names.all[name] });
            }

            //male
            for (const maleName in dtoOut.names.male) {
                dtoOut.chartData.male.push({ label: maleName, value: dtoOut.names.male[maleName] });
            }

            //female
            for (const femaleName in dtoOut.names.female) {
                dtoOut.chartData.female.push({ label: femaleName, value: dtoOut.names.female[femaleName] });
            }

            //female part time
            for (const femaleName in dtoOut.names.femalePartTime) {
                dtoOut.chartData.femalePartTime.push({ label: femaleName, value: dtoOut.names.femalePartTime[femaleName] });
            }

            //maleFullTime
            for (const maleName in dtoOut.names.maleFullTime) {
                dtoOut.chartData.maleFullTime.push({ label: maleName, value: dtoOut.names.maleFullTime[maleName] });
            }

    return dtoOut;

}
main();
//@@viewOff:main