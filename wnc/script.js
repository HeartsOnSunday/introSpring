var todoList = {
    todos: [], //todos Array

    displaytd: function() {

           if (this.todos.length == []) {
               console.log("Your To Do List is Empty!");
           } else {
            console.log("My ToDos: "); 
            for (var i = 0; i < this.todos.length; i++)  {
           
           //checkif .completed is true
           if (this.todos[i].completed == true) {
                //print w (x)
                console.log(i, '(X)', this.todos[i].tdText);

           } else {
               //print w ()
               console.log(i, '( )', this.todos[i].tdText);
           }
        }
    }

},


    addtd: function(tdText) {
        this.todos.push({
            tdText: tdText,
            completed: false,
        });  //adding to array
        console.log(this.todos);
        this.displaytd();
},

    changetd: function(index, tdText) {
       // this.todos[index] = newtd; //identify and change todos by index
       this.todos[index].tdText = tdText; 
       this.displaytd();
},

    deletetd: function(index) {
    this.todos.splice(index, 1); //remove todo w/ splice (index, Qt);
    this.displaytd();
},
    toggleCompletedtd: function(index) {
        var todo = this.todos[index];
        todo.completed = !todo.completed;
        this.displaytd();

    },

    toggleAll: function() {
var totaltds = this.todos.length;
var completedtds = 0;
for (var j = 0; j <totaltds; j++) {
    if(this.todos[j].completed === true) { //count number of completed tds
        completedtds++; //incriment variable for each completed td to get a count
    }
}
        //if all true, make all false
        if (completedtds === totaltds) {
            for (var k = 0; k < this.todos.length; k++) {
            this.todos[k].completed = false;
        } 
    }     
    //Otherwise make all true
    else {
            for (var l = 0; l < totaltds; l++) {
            this.todos[l].completed = true;
        }
    }

        this.displaytd();
    }

};


var handlers = {
    displaytds: function() {
        todoList.displaytd();
    },
    toggleAll: function() {
        todoList.toggleAll();
},
    addtd: function() {
        var addtdTextInput = document.getElementById('add');
        todoList.addtd(addtdTextInput.value);
        addtdTextInput.value = '';
    },
    changetd: function() {
        var changetdPositionInput = document.getElementById("changetdPositionInput");
        var changetdTextInput = document.getElementById('changetdTextInput');
        todoList.changetd(changetdPositionInput.valueAsNumber, changetdTextInput.value);
        changetdPositionInput.value = "";
        changetdTextInput.value = "";
    }

}