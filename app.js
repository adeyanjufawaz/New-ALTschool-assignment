let myInterval = setInterval(callNumber)  

function callNumber () {
    let number = document.getElementById("phone").value;
    phoneNumber = `${number}`
    let checkSlicedpart = phoneNumber.slice(4,7);


   if (number.length === 11 || number.length === 14) {
    
        switch (true) {
            // <-------  All Airtel Numbers    ----->
            case phoneNumber.startsWith("0802") || checkSlicedpart == "802":
                airtel() 
                break;
            case phoneNumber.startsWith("0902") || checkSlicedpart == "902":
                airtel()
                break;
            case phoneNumber.startsWith("0701") || checkSlicedpart == "701":
                airtel()
                break;
            case phoneNumber.startsWith("0808") || checkSlicedpart == "808":
                airtel()
                break;
            case phoneNumber.startsWith("0708") || checkSlicedpart == "708":
                airtel()
                break;
            case phoneNumber.startsWith("0812") || checkSlicedpart == "812":
                airtel()
                break;

            // <-------  All MTN Numbers    ----->
            case phoneNumber.startsWith("0803") || checkSlicedpart == "803":
                mtn()
                break;
            case phoneNumber.startsWith("0703") || checkSlicedpart == "703":
                mtn()
                break;
            case phoneNumber.startsWith("0903") || checkSlicedpart == "903":
                mtn()
                break;
            case phoneNumber.startsWith("0806") || checkSlicedpart == "806":
                mtn()
                break;
            case phoneNumber.startsWith("0706") || checkSlicedpart == "706":
                mtn()
                break;
            case phoneNumber.startsWith("0813") || checkSlicedpart == "813":
                mtn()
                break;
            case phoneNumber.startsWith("0810") || checkSlicedpart == "810":
                mtn()
                break;
            case phoneNumber.startsWith("0814") || checkSlicedpart == "814":
                mtn()
                break;
            case phoneNumber.startsWith("0816") || checkSlicedpart == "816":
                mtn()
                break;

            // <-------  All GLO Numbers    ----->
            case phoneNumber.startsWith("0805") || checkSlicedpart == "805":
                glo()
                break;
            case phoneNumber.startsWith("0705") || checkSlicedpart == "705":
                glo()
                break;
            case phoneNumber.startsWith("0905") || checkSlicedpart == "905":
                glo()
                break;
            case phoneNumber.startsWith("0807") || checkSlicedpart == "807":
                glo()
                break;
            case phoneNumber.startsWith("0815") || checkSlicedpart == "815":
                glo()
                break;
            case phoneNumber.startsWith("0915") || checkSlicedpart == "915":
                glo()
                break;
            case phoneNumber.startsWith("0811") || checkSlicedpart == "811":
                glo()
                break;

            // <-------  All 9mobile Numbers    ----->
            case phoneNumber.startsWith("0809") || checkSlicedpart == "809":
                console.log("I am a 9mobile number")
                etisalat()
                break;
            case phoneNumber.startsWith("0909") || checkSlicedpart == "909":
                console.log("I am a 9mobile number")
                etisalat()
                break;
            case phoneNumber.startsWith("0817") || checkSlicedpart == "817":
                console.log("I am a 9mobile number")
                etisalat()
                break;
            case phoneNumber.startsWith("0818") || checkSlicedpart == "818":
                console.log("I am a 9mobile number")
                etisalat()
                break;
           
            default:
                console.log("You use a mutherfucker phone number")
                break;
           }
   } else{
    displayNothing()
   }
}

function airtel () {
    document.querySelector(".airtel").style.display = 'block';
}
function mtn () {
    document.querySelector(".mtn").style.display = 'block';
}
function etisalat () {
    document.querySelector(".etisalat").style.display = 'block';
}
function glo () {
    document.querySelector(".glo").style.display = 'block';
}

function displayNothing () {
    document.querySelector(".airtel").style.display = 'none';
    document.querySelector(".mtn").style.display = 'none';
    document.querySelector(".etisalat").style.display = 'none';
    document.querySelector(".glo").style.display = 'none';
}


// let number = "+2348081141926";
// console.log(number);
// console.log(number.length);

// let cuttedOut = number.slice(4,7)
// console.log(cuttedOut);
// console.log(number[0]);