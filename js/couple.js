/** 4 men are defined by 4 one (1) and 4 women are defined by 4 zero (0) who were watching movie by sitting beside. Order was started with men and then women in a row. That movie length was 100 minutes. As the movie was going on, all the light were off at 89 minutes and came on at 90 minutes. After on the light, we see the men and women were found in a couple on that row.
 */

const menCount = '1111';
const womenCount = '0000';
const besideMenWomen = menCount + womenCount;
const besideMenWomenInt = parseInt(besideMenWomen);
// console.log(besideMenWomenInt);
const movieLength = '100';
const currentGoneAt = '89';
const currentCameOnAt = '90';
const minusPortion = movieLength + currentGoneAt + currentCameOnAt;
const minusPortionInt = parseInt(minusPortion);
// console.log(minusPortionInt);
const result = besideMenWomenInt - minusPortionInt;
console.log(result);