let userInputElement = document.getElementById("userinput")

function sendmessage(){
    let mobileNumber = userInputElement.value 

    if(mobileNumber.length < 10){
        alert("Enter Valid Mobile Number")
    }

    if(mobileNumber.length > 10){
        alert("Enter Valid Mobile Number")
    }

    if(mobileNumber.length === 10){
        let openlink = "https://wa.me/" + "+91" + mobileNumber;

        window.open(openlink, '_blank').focus();
    }
}