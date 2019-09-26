/***********************************
 * Challenge 1
 */
// var johnWeight = 72;
// var markWeight = 70;
// // ***********
// var johnHeight = 180;
// var markHeight = 165;
// // ***********

// var johnBMI = johnWeight / (johnHeight*johnHeight);
// var markBMI = markWeight / (markHeight*markHeight);
// var biggestBMI = johnBMI > markBMI;

// console.log('Is John\'s BMI bigger than Mark\'s BMI?' + ' ' + biggestBMI);


/***********************************
 * Challenge 2
 */
// var johnAverageScore = (89 + 120 + 103) / 3;
// var mikeAverageScore = (116 + 94 + 123) / 3;
// var maryAverageScore = (97 + 134 + 105) / 3;
// console.log(johnAverageScore + ' John\'s avg score.' + ' ' + mikeAverageScore + ' Mike\'s avg score.' + ' ' + maryAverageScore + ' Mary\'s avg score.');

// Meu approach:
// if (johnAverageScore > mikeAverageScore && maryAverageScore) {
//     console.log('John\'s team won!');
// } else if (mikeAverageScore > johnAverageScore && maryAverageScore) {
//     console.log('Mike\'s team won!');
// } else if (maryAverageScore > johnAverageScore && mikeAverageScore) {
//     console.log('Mary\'s team won!');
// } else {
//     // do nothing
// }

// Tentiva por ternary
// var highestAverage = mikeAverageScore > johnAverageScore ? console.log('Mike\'s team has a higher average score. Points: ' + mikeAverageScore) : console.log('John\'s team has a higher average score. Points: ' + johnAverageScore);
// var evenAverage = mikeAverageScore === johnAverageScore ? console.log('It\'s a draw!') : console.log('Do nothing.');

// Solução:
// if (johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore) {
//     console.log('John\'s team has a higher average score. Points: ' + johnAverageScore);
// } else if (mikeAverageScore > johnAverageScore && mikeAverageScore > maryAverageScore) {
//     console.log('Mike\'s team has a higher average score. Points: ' + mikeAverageScore);
// } else if (maryAverageScore > mikeAverageScore && maryAverageScore > johnAverageScore) {
//     console.log('Mary\'s team has a higher average score. Points: ' + maryAverageScore);
// } else {
//     console.log('Draw.');
// }


/***********************************
 * Challenge 3
 */

// function tipCalculator (bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]), 
//             tipCalculator(bills[1]), 
//             tipCalculator(bills[2])];
// console.log(bills + ' these are the bills.');
// console.log(tips + ' these are the tips.');

// var finalValues = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]]
// console.log(finalValues + ' these are both combined.');

// Mini challenge
// var john = ['John', 'Smith', 1990, false, 'blue'];
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }


/***********************************
 * Challenge 5
 */

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {
            
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
        }

        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;
    }
}

var mark = {
    fullName: 'Mark Boiii',
    bills: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {
            
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
        }

        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;
    }
}

john.calcTips();
mark.calcTips();
console.log(john);