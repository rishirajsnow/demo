//1. create a request variable XMLHttpRequest.object
var request= new XMLHttpRequest();//build in object
//2.create a connection1. method 2.endpoint url
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3. Send the request
request.send();
//4.Load the response-- create a event listeners
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    //console.log(data[0].name);
    
    for(let i=0;i<data.length;i++)
         {console.log(data[i].name);}//Print all the country name in the console
}