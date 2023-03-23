//values per 100g/ cooked => name : kcal
var foods = {
  "chicken breast": 125,
  "chocolate":300,
  "broccolli":65
  };


function get_action() { // Inside script tags

    var ft=get_dropdown_value("foodType");
    var kc = document.getElementById("kcal").value;
    var prt = document.getElementById("protein").value;
   
    alert(`Is this working? ${ft} , ${kc}, ${prt}. `);//Yes it is.
}
function updateValues(){
  var ft=get_dropdown_value("foodType");
  var kc = document.getElementById("kcal").value;
  var prt = document.getElementById("protein").value;
  if (ft=="chicken breast") {//not working, must do function individually for each element to get it's 
    //innertext/innerhtml? updated once value in specific element is selected
    kc=150;
    document.getElementById("kcal").value=kc;
    //document.getElementById("kcal").innerHTML=kc;

    prt=25;
    document.getElementById("protein").value=prt;
  }else{
    document.getElementById("protein").value=0;
    document.getElementById("kcal").value=0;

  }
}

function get_dropdown_value(elemID){
    var element=document.getElementById(elemID);
    return element.value;
}

function sendApiGetReq(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const city = document.getElementById("InputCity").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30ad8b12cff1d96e78b93a835665538e`, requestOptions)
    .then(response => response.json())
    .then(json => {
      document.getElementById("Temperature").innerHTML=`Temperature: ${parseInt(json.main.temp)-272}<span>°C</span>`;//-272 as the json.main.temp is in kelvin
      document.getElementById("City").innerHTML=`City: ${json.name}.`;
      document.getElementById("Main").innerHTML=`State: ${json.weather[0].main}.`;
      document.getElementById("Description").innerHTML=`Details: ${json.weather[0].description}.`;
      document.getElementById("Country").innerHTML=`Country: ${json.sys.country}.`;

    
    } )
    .catch(error => console.log('error', error));
    
    

}