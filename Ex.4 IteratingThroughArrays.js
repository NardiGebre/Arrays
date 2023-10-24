// create new array stores square result of the grades
// using map method

const grades = new Array(75,85,95);

const squaredGrades = grades.map ((grade)=>grade *grade);
console.log(`square grades: ${squaredGrades}`);

// Filter ages greater than 18
// Using filter
const ages = [ 7,25,33,41,57,96];
const adults = ages.filter(age=>age>18);
console.log(`ages greater than 18: ${adults}`);

const uniqueColors = new Set ();
uniqueColors.add('Coral');
uniqueColors.add('Orange');
uniqueColors.add('Purple');
uniqueColors.add('MintGreen');
uniqueColors.add('Cyan');

for(const color of uniqueColors)
{
    console.log(color);
}