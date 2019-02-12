// Feb 22nd 2019

var totallySketchCarRentalSpot = "JavaScript Hotel";

var carTypes = ["Smashed Batmobile", "Dodge Dart", "Clown Car", "Van full of \'Candy\'", "Ford Pinto"];
var carPrices = [ 175, 185, 140, 215, 230];
var availableCarsByRegistration = [[RI-101, RI-102, MA-103, CT-104], [RI-105, AZ-106, TX-107, RI-108], [FL-201, CT-202, MA-203, FL-204],[301, 302, 303], [304, 305]];
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
    reservedCars[0].push(availableCatrsByRegistration[0].pop());
}

function bookSingle() {
    reservedCars[1].push(availableCatrsByRegistration[1].pop());
}

function bookFull() {
    reservedCars[2].push(availableCatrsByRegistration[2].pop());
}

function bookQueen() {
    reservedCars[3].push(availableCatrsByRegistration[3].pop());
}

function bookKing() {
    reservedCars[4].push(availableCatrsByRegistration[4].pop());
}

function reservationReport() {
    var totalReservationProfit = 0;
    for (var i = 0; i <reservedCars.length; i++) {
       totalReservationProfit += reservedCars[i].length * roomPrices[i];
       if (reservedCars[0]) {
           console.log(reservedCars.length, "happy customers drove off in a " carTypes[0]);
       }
    }
    return totalRoomSales;
}