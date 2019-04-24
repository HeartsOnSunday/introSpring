/* global fetch */

function loadStyle(){
    var main = document.getElementById("main-container");
main.setAttribute("class", "flex-container");
   main.setAttribute("style", "padding: 20px; margin: 20px; border: solid black 2px; border-radius: 25px 50px 30px; width: 85%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);");
   var sub = document.getElementById("sub-container");
   sub.setAttribute("class", "flex-container");
      sub.setAttribute("style", "padding: 20px; margin: 20px; border: solid black 2px; border-radius: 25px 50px 30px; width: 85%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);");
     
   var topicStyle = document.getElementById("topic");
   topicStyle.setAttribute("style", "padding: 20px; margin: 20px; border: solid black 2px; border-radius: 25px 50px 30px; width: 85%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);");

};
const response = ["apple", "banana", "cat", "dog", "elephant"];
//function displays the items in the response array as items in an ordered List
var query = document.getElementById("input").value;

function displayResult(){
    var query = document.getElementById("input").value;
if (query == "") {
    document.getElementById("warning").innerHTML = "please indicate your search item";
} else {
    console.log("Calling for \"" + query + "\"");

const url = `https://cors-anywhere.herokuapp.com/https://www.mediawiki.org/w/api.php?action=opensearch&search=${query}&origin=*`;
fetch(url)
.then(function (res){
    return res.json()
    }).then(function(res){
        console.log(res);

console.log(res[1]);
console.log(res[2]);
console.log(res[3]);

        displayResult(res[0], res[1], res[2], res[3]);
   

function displayResult(topic, titles, blurbs, links){
    //topic assign it
    var topicTitle = document.getElementById("topic").innerText = topic;
    //header an arran to loop through and create an element for each one to append to 
    //var headHere = document.getElementById("")
     
     for (var i = 0; i < titles.length; i++){
        var br = document.createElement("BR");
        let div = document.createElement("div");
        let divId = div.setAttribute("id", i);
        let divClass = div.setAttribute("class", "flex-container");
        let divStyle = div.setAttribute("style", "padding: 20px; margin: 20px; border: solid black 2px; border-radius: 25px 50px 30px; width: 85%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);");
        div.style.borderWidth = "15px 5px 10px 20px";

        var res = document.getElementById("res");

        var head = document.createElement("A");
        
        head.innerHTML = titles[i];
        head.setAttribute("href", links[i]);
        res.appendChild(div);
        div.appendChild(head);
       
        var p = document.createElement("p");
        p.innerHTML = blurbs[i];
        div.appendChild(p);
     }

}
 
 /*
    titles.forEach(head,  => {
        ///iterate through each thing attaching to the thing for Headers
        var headDiv = document.getElementById("header");
        var headAnchor = document.createElement("A");
        console.log(head);
        headAnchor.innerHTML = head;
        headDiv.appendChild(headAnchor);
    
    });

*/    
    
    });
}
};
    
    //take the text from the input and save it to a variable to use in fetch request
    
    
    
    
    
    

/*
        //TOPIC
document.getElementById("topic").innerText = res[0];

res[1].forEach(function(headers){
    //var headers = document.getElementById("header") = headers;
    console.log(headers);


*/    




/*

var headers = document.getElementById("header");
headers.innerHTML = res[1]
console.log(res[1]);
//Headline
var link = document.getElementById("link")
link.setAttribute("href", res[1]);
link.innerHTML = "Read More";



        console.log(res[1]);
        console.log(res[2]);
        console.log(res[3]);
*/

/*
        const eachFormat = res.map(function(topicItem){
            console.log(topicItem[0]);

            console.log(typeof(topicItem));


            return topicItem;
        })
*/
/*
        const renderResponse = res.forEach(function(item){
            document.getElementById("title").innerHTML = item;
        })
*/        
        /*
        const newResponse = res.map(function(each){
            console.log(typeof(each));
            console.log(each);
            //return "<div><a href=\">" + each + "</a></div>"
        })

        */
       /*
        let parent = document.getElementById("results");
        parent.innerHTML = newResponse;
        */






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