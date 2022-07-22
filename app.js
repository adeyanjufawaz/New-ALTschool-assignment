// The functions below display the newtwotk logo depending on the phone number entered
        function airtel () { document.querySelector(".airtel").style.display = 'block'; }
        function mtn () { document.querySelector(".mtn").style.display = 'block'; }
        function etisalat () { document.querySelector(".etisalat").style.display = 'block'; }
        function glo () { document.querySelector(".glo").style.display = 'block'; }

// This function hides all the network logos
        function displayNothing () {
            document.querySelector(".airtel").style.display = 'none';
            document.querySelector(".mtn").style.display = 'none';
            document.querySelector(".etisalat").style.display = 'none';
            document.querySelector(".glo").style.display = 'none';
        }

// This makes the keys on the keyboard disabled except the Backspace key
        function disableKeys () {
            document.onkeydown =  (e) => {
                if (e.key !== "Backspace" || e.key !== "Enter") {
                    if (e.key === "Backspace") {
                        enableKeys()
                        return true
                    }
                    return false
                }    
            }
        }

// This makes the keys on the keyboard enabled
        function enableKeys () { document.onkeydown = (e) =>  true }
// <------------------------------------------------------------------------------->

// Numbers must start with only "0" or country code
    function startOfPhoneNumberError () {
        document.querySelector(".warn").style.display = "block"
        document.querySelector(".warn").innerText = `Invalid start of phone number`
    }


// Phone number error function
        function phoneNumberError () { 
            document.querySelector(".warn").style.display = "block"
            document.querySelector(".warn").innerText = `Enter a valid number` 
        }
        function clearPhoneNumberError () { document.querySelector(".warn").style.display = "none" }
// Invalid phone number function
        function invalidNumber () {
            displayNothing()
            phoneNumberError()
            disableKeys()
        }
// <------------------------------------------------------------------------------->


let myInterval = setInterval(callNumber)  

// This is the main engine of this program

    function callNumber () {
        const number = document.getElementById("phone").value;
        let phoneNumber = `${number}`
        const checkSlicedpart = phoneNumber.slice(4,7);

        // Phone numbers must start with either 0 or +
        if (phoneNumber !== "" && phoneNumber[0] !== "0" && phoneNumber[0] !== "+") {
            disableKeys()
            phoneNumber = ""
            startOfPhoneNumberError()
        }else{
            clearPhoneNumberError()
        }
            


        if ( number.length === 11 || number.length === 14) {
            
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
                            etisalat()
                            break;

                        case phoneNumber.startsWith("0909") || checkSlicedpart == "909":
                            etisalat()
                            break;

                        case phoneNumber.startsWith("0817") || checkSlicedpart == "817":
                            etisalat()
                            break;

                        case phoneNumber.startsWith("0818") || checkSlicedpart == "818":
                            etisalat()
                            break;

                    
                        default:
                            invalidNumber()
                            break;
                        }
        } else{
            displayNothing()
        }

    // This prevents users from entering more than 11 digits if it does not start with XYZ
                if (phoneNumber.startsWith("0") && phoneNumber.length > 10) {
                    disableKeys()
                }

        // This prevents users from entering more than 14 digits if it starts with XYZ
                if (phoneNumber.startsWith("+") && phoneNumber.length > 13) {
                    disableKeys()
                }

                

        //// Check if the number contains an aphabet 

                const allAphabets = /[\D]/gi
                const checkForAlphabet = allAphabets.test(phoneNumber)  

                
                // This creates an array from the phoneNumber Array
                        let phoneNumberToArray = Array.from(phoneNumber)
                // This cut all phone numbers arr except the first number inputed, e.g [+2348221822] ==> 2348221822
                        let cuttedPhoneNumberArray = phoneNumberToArray.slice(-1 * (phoneNumberToArray.length - 1))
                
        // This if stament allows users to add just numbers to phone number input section
                if (phoneNumber !== "" ) {

                    if (phoneNumber.length > 1 && phoneNumber[0] == "+") {
                        for (const each of cuttedPhoneNumberArray) {
                            if (each !== "0" && each !== "1" && each !== "2" && each !== "3" &&
                                each !== "4" && each !== "5" && each !== "6" &&
                                each !== "7" && each !== "8" && each !== "9") {
                                    invalidNumber()
                                }
                            }
                        } else if (phoneNumber[0] == "0") {
                            if (checkForAlphabet == true) {
                                invalidNumber()
                            }
                            
                        }
                }
            }