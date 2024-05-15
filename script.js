let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-circle-check"></i> Submitted Successfully!';
let errorMsg = '<i class="fa-solid fa-circle-exclamation"></i> Error Occured! Try again.';
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid Input!';

function toastNotification(message){
    let toast = document.createElement("div");
    toast.classList.add("toast-notification");
    toast.innerHTML = message;
    toastBox.appendChild(toast);

    if (message.includes("Error")){
        toast.classList.add("error");
    }
    if (message.includes("Invalid")){
        toast.classList.add("invalid");
    }

    setTimeout( () =>{
        toast.remove();
    }, 3000);
}