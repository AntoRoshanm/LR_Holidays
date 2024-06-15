
const closeButtons = () => {
    let botCommandChatBox = document.getElementById("botCommandChatBox");
    let closeButton = document.getElementById("closeButton")
    closeButton.addEventListener("click", function() {
        document.getElementById("chatingPlace").style.display = "none";
        botCommandChatBox.style.display = "block";
    })
}

closeButtons()

const botButoonlogo = () => {
    let botCommandChatBox = document.getElementById("botCommandChatBox");
    let botButoonlogo = document.getElementById("botButoonlogo")
    botButoonlogo.addEventListener("click",function(){
        document.getElementById("chatingPlace").style.display = "block";
        botCommandChatBox.style.display = "none";
    })
}

botButoonlogo()

// const botCommandChatBoxs = () => {
//     let botCommandChatBox = document.getElementById("botCommandChatBox")
//     botCommandChatBox.addEventListener("click",function(){
//         document.getElementById("chatingPlace").style.display = "block";
//         botCommandChatBox.style.display = "none";
//     })
// }

// botCommandChatBoxs()






