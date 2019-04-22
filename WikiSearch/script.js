/* global fetch */

const response = ["apple", "banana", "cat", "dog", "elephant"];
//function displays the items in the response array as items in an ordered List

const url = "https://cors-anywhere.herokuapp.com/https://www.mediawiki.org/w/api.php?action=opensearch&search=sdlc&origin=*";
fetch(url)
.then(function (res){
    return res.json();
    }).then(function(res){
        console.log(res);
        const newResponse = res.map(function(each){
            console.log(each);
            return "<div><a>" + each + "</a></div>"
        })
        let parent = document.getElementById("results");
        parent.innerHTML = newResponse;
    })

/*
function displayResult() {
 const newResponse = response.map(function(item) {
    console.log(item);
    return "<li>" + item + "</li>";
})
const joinedResponse = newResponse.join("");
let parent = document.getElementById("results");
parent.innerHTML = joinedResponse;
}
//

*/

// you can disable CORS with chrome extensions
// or add a parameter origin=* and this allows for any server to give you info
// prepend https://cors-anywhere.herokuapp.com/ to url