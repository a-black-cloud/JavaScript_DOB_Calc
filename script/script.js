/********************** 
CHART STUFF 
*********************
//https://www.youtube.com/watch?v=sE08f4iuOhA
*/


var myChart = document.getElementById('myChart').getContext('2d');

var massPopChart = new Chart(myChart, {

    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
            1115,
            1120,
            1145,
            1565,
            1170,
            1950
          ],
            backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Height Chart',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }


    }

})







function calculateUser(firstName, lastName, gender, dobDay, dobMonth, dobYear) {



    /* 
     ********************* AGE STUFF *********************
     */


    console.log('-------------------- ' + firstName + ' ---------------------');

    /* 
     ********************* GET AGE *********************
     */

    // create date
    var today = new Date();

    // gets the rough age
    var age = (today.getFullYear() - dobYear);


    // processes today's date
    var actualAge = age;
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();


    // checks date against bod date and changes age if needed
    if (mm < dobMonth || (mm == dobMonth && today.getDate() < dobDay)) {
        age--;
        var actualAge = age;
    }
    console.log('AGE: ' + actualAge);


    // adds leading 0's to day and month values
    if (dobDay < 10) {
        dobDay = '0' + dobDay;
    }
    if (dobMonth < 10) {
        dobMonth = '0' + dobMonth;
    }
    // format the day, month, year for dob
    var dob = dobDay + '/' + dobMonth + '/' + dobYear;
    console.log('DATE OF BIRTH: ' + dob);


    /* 
     ********************* RUN FUNCTIONS *********************
     */

    getTheDate();
    getTheTime();


    /* 
     ********************* STATEMENT *********************
     */

    // changes 'he', 'his' to 'she', 'her' for statement
    if (gender == true) {
        genderString = 'he';
        genderStringPast = 'His';

    } else if (gender == false) {
        genderString = 'she';
        genderStringPast = 'Her';
    }

    // statement
    console.log('The users name is ' + firstName + " " + lastName + ' and ' + genderString + ' is ' + actualAge + ' years old. ' + genderStringPast + ' date of birth is ' + dobDay + '/' + dobMonth + '/' + dobYear);

}



//*************************************** SUB FUNCTIONS ***************************************//

// get date with the 0's
function getTheDate() {

    //console.log('-----------------LOG DAY---------------------');

    // process date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    // adds a 0 to the date if < 10
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
    console.log('TODAY: ' + today);
}


// get time
function getTheTime() {

    //console.log('-----------------LOG TIME-------------------');

    this.today = new Date();
    var hour = this.today.getHours();
    var min = this.today.getMinutes();
    var sec = this.today.getSeconds();

    // adds a 0 to the clock time
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    console.log('TIME: ' + hour + ":" + min + ":" + sec);
}


//*************************************** RUN FUNCTIONS ***************************************//
var usersAge = calculateUser('Dave', 'Gilligan', true, 19, 12, 1973);

var usersAge = calculateUser('Reuben', 'Gilligan', true, 9, 10, 2011);

var usersAge = calculateUser('Clare', 'Butler', false, 21, 11, 1978);

var usersAge = calculateUser('Coen', 'Gilligan', true, 5, 5, 2016);



/* ---- TEST ------- */
