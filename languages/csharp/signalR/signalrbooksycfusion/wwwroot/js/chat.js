"use strict"
var connection = new signalR.HubConnectionBuilder().withUrl("/chathub").build()

document.getElementById("sendButton").disabled = true

connection.on("MessageReceiver", function(user, message){
  let msg = message.replace(/&/g, "&amp;").replace(/</g, 
"&lt;").replace(/>/g, "&gt;"); 
 var encodedMsg = user + ": " + msg;
 var li = document.createElement("li");

 var currenUser = document.getElementById("userInput").value;

 if(currenUser === user){
    li.className = "list-group-item list-group-item-primary";
 }else{
    li.className = "list-group-item list-group-item-success";
 }
 li.textContent = encodedMsg
 document.getElementById("messagesList").appendChild(li);
})

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false
}).catch(function(err){ return console.log(err.toString())})

document.getElementById("sendButton").addEventListener("click", function (event) {
   var user = document.getElementById("userInput").value
   var message = document.getElementById("messageInput").value

   connection.invoke("MessageSender", user, message).catch(function(err){ return console.log(err.toString())})

   event.preventDefault()
})

