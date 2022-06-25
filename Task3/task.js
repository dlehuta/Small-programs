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
    //for pie chart
    let workloadCount = {
        "10": { female: 0,  male: 0 },
        "20": { female: 0,  male: 0 },
        "30": { female: 0,  male: 0 },
        "40": { female: 0,  male: 0 }
    }
    let maleAgeCount = {}; //for bar chart


    for (const employee of dtoIn) {
        //add to pie chart
        if (employee.gender === "female") {
            workloadCount[employee.workload].female++;
        }

        if (employee.gender === "male") {
            workloadCount[employee.workload].male++;

            //calculate age
            const currentDate = new Date();
            const birthdate = new Date(employee.birthdate);
            let age = currentDate.getFullYear() - birthdate.getFullYear();
            const month = currentDate.getMonth() - birthdate.getMonth();

            if (month < 0 || (month === 0 && currentDate.getDate() < birthdate.getDate())) {
                age--;
            }

            if (maleAgeCount[age]) {
                maleAgeCount[age]++;
            } else {
                maleAgeCount[age] = 1;
            }
        }
    }
    let barChart = [];
    for (const age in maleAgeCount) {
        barChart.push({ label: age, value: maleAgeCount[age] })
    }
    return {
        "pieChart": [
            {"label": "10","value": workloadCount[10].female + workloadCount[10].male},
            {"label": "20","value": workloadCount[20].female + workloadCount[20].male},
            {"label": "30","value": workloadCount[30].female + workloadCount[30].male},
            {"label": "40","value": workloadCount[40].female + workloadCount[40].male},
        ],
        barChart,
        "stackedBarChart": [
            {"label": "10","valueMale": workloadCount[10].male,"valueFemale": workloadCount[10].female},
            {"label": "20","valueMale": workloadCount[20].male,"valueFemale": workloadCount[20].female},
            {"label": "30","valueMale": workloadCount[30].male,"valueFemale": workloadCount[30].female},
            {"label": "40","valueMale": workloadCount[40].male,"valueFemale": workloadCount[40].female}
        ],

    };
}

//@@viewOff:main