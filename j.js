//creating "x" close button

var myListItems = document.getElementsByTagName("LI");
var items;

for (items = 0; items < myListItems.length; items++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myListItems[items].appendChild(span);
}

//activating the close X button display none removes the list item

var close = document.getElementsByClassName("close");
var items;
for(items = 0; items < close.length; items++) {
    close[items].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        
    }
}


// Add a checked symbol when one list item is chosen

var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
  }
}, false);

//when the add button is clicked, create a new list item

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("please enter more text!");
    }else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (items = 0; items < close.length; items++) {
        close[items].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            
        }
    }
}
















































