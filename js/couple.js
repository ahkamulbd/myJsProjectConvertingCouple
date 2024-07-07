/** 4 men are defined by 4 one (1) and 4 women are defined by 4 zero (0) who were watching movie by sitting beside. Order was started with men and then women in a row. That movie length was 100 minutes. As the movie was going on, all the light were off at 89 minutes and came on at 90 minutes. After on the light, we see the men and women were found in a couple on that row.
 */
/* 
How the project idea came from:
In calculator, if you put 1 button for 4 times and then 0 button for 4 times respectively, the number will be shown as 11110000. Then you have to insert '-' button. Then you will have type 100 for the movie length, and 89 and 90 respectively for light off and on i.e. the number will be 1008990. If you insert '=' button, you will get the result 10101010. 
*/

function clickToSeeTheOrder() {
    const menCount = '1111';
    const womenCount = '0000';
    const besideMenWomen = menCount + womenCount;
    const besideMenWomenInt = parseInt(besideMenWomen);
    showOrder = document.getElementById('show-order');
    showOrder.innerText = besideMenWomenInt;

    return besideMenWomenInt;
}

document.getElementById('what-happened-btn').addEventListener('click', () => {
    // console.log('Click event added');
    const outputOfClickToSeeTheOrder = clickToSeeTheOrder();
    const movieLength = '100';
    const currentGoneAt = '89';
    const currentCameOnAt = '90';
    const minusPortion = movieLength + currentGoneAt + currentCameOnAt;
    const minusPortionInt = parseInt(minusPortion);
    // console.log(minusPortionInt);
    const result = outputOfClickToSeeTheOrder - minusPortionInt;
    console.log(result);
    const showWhatHappened = document.getElementById('show-what-happened');
    showWhatHappened.innerText = result;
})
