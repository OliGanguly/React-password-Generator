import { useState } from "react";

const usePassGenerator = () => {
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const generatePassword = (checkboxData, length) => {
        
        let charset = "";
        let generatedPass="";
        console.log("checkboxData",checkboxData)
        const selectedOptions = Object.values(checkboxData).filter(checkbox => checkbox.state);
        // console.log("selectedOptions",selectedOptions)
        if(selectedOptions.length===0){
            setErrorMsg("Select atleast one option");
            setPassword("") 
            return;  
        }
        selectedOptions.forEach(option => {
            switch (option.title) {
                case "Include Uppercase letter":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase letter":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset += "0123456789";
                    break;
                case "Include Symbol":
                    charset += "!@$#%^&*()"
                    default:
                    break;
            }
        });
        for(let i=0;i<length;i++){
          const randomIndex=Math.floor(Math.random()*charset.length);
          console.log("raaa",randomIndex)
          console.log("charset",charset)
          generatedPass+=charset[randomIndex];
        }
        console.log("ge...",generatedPass)
        setPassword(generatedPass);
        setErrorMsg('')
    }
    return { password, errorMsg, generatePassword };
}
export default usePassGenerator;