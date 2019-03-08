
function ayeHowMuchForThePhone() {

    var phonePrices = [46, 78, 68, 100];
    var phoneSales = [58, 26, 85, 90];
    var phoneNames = ["Razor", " Chocolate", " Nokia", " iPhone"];
    var phoneTotals = [phoneSales[0] * phonePrices[0], phoneSales[1] * phonePrices[1], phoneSales[2] * phonePrices[2], phoneSales[3] * phonePrices[3]];
    
        document.getElementById('phoneName').innerHTML = phoneNames[0] + ", " + phoneNames[1] + ", " +  phoneNames[2] + ", " +  phoneNames[3];
        document.getElementById('phoneSales').innerHTML = phoneSales[0] + ", " + phoneSales[1] + ", " +  phoneSales[2] + ", " +  phoneSales[3];
        document.getElementById('phonePrices').innerHTML = phonePrices[0] + ", " + phonePrices[1] + ", " +  phonePrices[2] + ", " +  phonePrices[3];
        document.getElementById('phoneTotals').innerHTML = phoneTotals[0] + ", " + phoneTotals[1] + ", " +  phoneTotals[2] + ", " +  phoneTotals[3];
    
        var fpf = {
            phonePrices: [46, 78, 68, 100],
            phoneSales: [58, 26, 85, 90],
            phoneNames: ["Razor", " Chocolate", " Nokia", " iPhone"],
            phoneTotals: [phoneSales[0] * phonePrices[0], phoneSales[1] * phonePrices[1], phoneSales[2] * phonePrices[2], phoneSales[3] * phonePrices[3]],
            totalSalesReport: function() {
                var salesTotal = 0;
                for (var j = 0; j < this.phoneNames.length; j++) {
                    salesTotal += this.phoneTotals[j]; 
                }
                document.getElementById("total").innerText = "$" + salesTotal + " in Total Sales";
                document.body.style.backgroundColor = "black";
            }
        }    

        fpf.totalSalesReport();


    
    }
   
