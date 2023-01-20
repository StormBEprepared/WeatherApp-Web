//values per 100g/ cooked => name : kcal
var foods = {
  "chicken breast": 125,
  "chocolate":300,
  "broccolli":65
  };


function get_action() { // Inside script tags

    var fn = document.getElementById("kcal").value;
    var ln = document.getElementById("protein").value;
    var foodType=get_dropdown_value("foodType");
    alert(`Is this working? ${fn} , ${ln}, ${foodType}. `);//Yes it is.
}


function get_dropdown_value(elemID){
    var element=document.getElementById(elemID);
    return element.value;
}