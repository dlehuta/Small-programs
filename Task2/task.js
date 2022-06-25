//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers


//calculate age

function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function getMadian(arr){
    arr.sort((a, b) => (a > b) ? 1 : -1)
    const mid = Math.floor(arr.length / 2)
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
**/
function main(dtoIn=[]) {
    const employeeData ={}

    let totalAge = 0;
    let minAge = 0;
    let maxAge = 0;
    let allAges = [];   //for median
    let allWorkload = [];   //for median
    let allWomanWorkload = []
    let totalWoman = 0;
    let total = dtoIn.length;
    
    employeeData.total = total;

   for (let i = 0; i < total; i++) {
       const employee = dtoIn[i]
     //save employee to variable

        //calculate workload
        const workload = employee.workload
        if(employeeData["workload" + workload] > 0){
            employeeData["workload" + workload]++
        } else {
            employeeData["workload" + workload] = 1
        }
        allWorkload.push(workload)  // for madian calculation
        //for averageWomenWorkload
        if(employee.gender === "female"){
            allWomanWorkload = allWomanWorkload + workload
            totalWoman ++
        }

        //calculate age
        const age = getAge(employee.birthdate)
        allAges.push(age)   //for calculating madian
        totalAge = totalAge + age;
        if(age < minAge || minAge === 0){
            minAge = age
        }
        if(age>maxAge){
            maxAge = age
        }





    }

    const averageAge = totalAge/total
    employeeData.averageAge = averageAge
    employeeData.minAge = minAge
    employeeData.maxAge = maxAge
    employeeData.medianAge = getMadian(allAges)
    employeeData.medianWorkload = getMadian(allWorkload)
    employeeData.averageWomenWorkload = allWomanWorkload/totalWoman
    return employeeData


}
main()
//@@viewOff:main
