// Feb 22nd 2019

var totallySketchCarRentalSpot = "JavaScript Hotel";

var carTypes = ["Smashed Batmobile", "Dodge Dart", "Clown Car", "Van full of 'Candy'", "Ford Pinto"];
var carPrices = [ 175, 185, 140, 215, 230];
var availableCarsByRegistration = [["RI-101", "RI-102", "MA-103", "CT-104"], ["RI-105", "AZ-106", "TX-107", "RI-108"], ["FL-201", "CT-202", "MA-203", "FL-204"],["LA-301", "VT-302", "RI-303"], ["MA-304", "VT-305"]];
var reservedCars = [[], [], [], [], []];

function availableCarsQty() {
    var totalAvailableCarsQty = 0;
    
    for (var i = 0; i < availableCarsByRegistration.length; i++) {
        
        totalAvailableCarsQty += availableCarsByRegistration[i].length;
    }
    return totalAvailableCarsQty;
}

function totalAvailableCarsReport() {
    console.log("Total Available Cars in the lot:", availableCarsQty());
}

function bookBatmobile() {
    reservedCars[0].push(availableCarsByRegistration[1].pop());
}

function bookDodge() {
    reservedCars[1].push(availableCarsByRegistration[1].pop());
}

function bookClownCar() {
    reservedCars[2].push(availableCarsByRegistration[2].pop());
}

function bookVan() {
    reservedCars[3].push(availableCarsByRegistration[3].pop());
}

function bookPinto() {
    reservedCars[4].push(availableCarsByRegistration[4].pop());
}

function reservationReport() {
    var totalReservationProfit = 0;
    for (var i = 0; i <reservedCars.length; i++) {
       totalReservationProfit += reservedCars[i].length * carPrices[i];
       }
       if (reservedCars[0]) {
        console.log(reservedCars[0].length, "happy customers drove off in a ", carTypes[0]);
    }  if (reservedCars[1]) {
        console.log(reservedCars[1].length, "happy customers drove off in a ", carTypes[1]);
    } if (reservedCars[2]) {
        console.log(reservedCars[2].length, "happy customers drove off in a ", carTypes[2]);
    } if (reservedCars[3]) {
        console.log(reservedCars[3].length, "happy customers drove off in a ", carTypes[3]);
    } if (reservedCars[4]) {
        console.log(reservedCars[4].length, "happy customers drove off in a ", carTypes[4]);
    } 
    return totalReservationProfit;
};