async function getRandomMessage(){
  let data = await fetch("http://127.0.0.1:8080/data.json")
          .then((res) => res.text())
          .then((json) => JSON.parse(json))
  let index = Math.floor(Math.random() * data.messages.length - 1)
  if(document.getElementById("messageDisplay") !== null){
    document.getElementById("messageDisplay").remove()
  }
  const messageSpan = document.createElement("span");
  messageSpan.setAttribute("id","messageDisplay")
  messageSpan.setAttribute("class","animate__animated animate__fadeInUp")
  let messageSection = document.getElementById("mainSection")
  messageSection.insertBefore(messageSpan, messageSection.firstChild);
  let randoMessage = document.getElementById("messageDisplay").innerHTML = data.messages[index]
}

document.getElementById("getMessage").addEventListener("click", getRandomMessage);