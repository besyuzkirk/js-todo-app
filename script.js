const addButton = document.getElementById("add-button");
const input = document.getElementById("todo-text");
const list = document.getElementById("list");
const thrash = document.getElementsByTagName('i');
var el = document.getElementsByTagName('li');


addButton.onclick = function() {
    var txt = input.value;
    if(txt == '') {
        alert('you must write something');
    } else {

        


        li = document.createElement('li');
        li.innerHTML = "<span>" + txt + "</span>"  + "<i class='fas fa-trash bin' ></i>" ;
        
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
};

list.onclick = function(ev) {
    if (ev.target.tagName == 'LI') {

        var selectItem = ev.target;

       selectItem.classList.toggle('checked');
        selectItem.classList.toggle('white');
    }
};

thrash.onclick = function() {

   console.log("burdayım");

};