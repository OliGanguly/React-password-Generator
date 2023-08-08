import React, { useState } from 'react';
import "./passgen.css"
import usePassGenerator from '../../customHook/usePassGenerator';
function PasswordGenerator(props) {
    const [charLength,setCharLength]=useState(5);
    const [copied,setCopied]=useState(false)
    const [checkboxData,setCheckboxData]=useState(
        [
            {title:"Include Uppercase letter",state:false},
            {title:"Include Lowercase letter",state:false},
            {title:"Include Numbers",state:false},
            {title:"Include Symbol",state:false},
        ]
    )
    const handleCheckboxChange=(i)=>{
    const updatedCheckboxData=[...checkboxData];
    updatedCheckboxData[i].state=!updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(password);
        setCopied(true)
        setTimeout(()=>{
        setCopied(false)
        },1000)
    }
   const {password,errorMsg,generatePassword}=usePassGenerator();
   console.log("password",password)
    return (
        <div style={{          
            display:'flex',
            justifyContent:'center',
           
        }}>
        <div className='container'>
         <div className='header'>
            <div className='title'>{password}</div>
            <button onClick={()=>{handleCopy()}} className='copy-btn border'>{copied?"Copied":"Copy"}</button>
        </div>
          
          <div className='char-length'>
          <span className='second-title'>
            <label>Character Length</label>
            <label>{charLength}</label>
          </span>
             <input
             className='range-style'
             type='range'
             min={5}
             max={20}
             value={charLength}
            onChange={(e)=>setCharLength(e.target.value)}
             />
<div className='checkboxes'>
 {
    checkboxData.map((checkbox,index)=>{
        return <div key={index}>
        <input 
        type='checkbox' 
        checked={checkbox.state}
        onChange={()=>handleCheckboxChange(index)}
        />
        <label>{checkbox.title}</label>
        </div>
    })
 }
</div>
{errorMsg&&<p className='errorMsg'>{errorMsg}</p>}
<button 
className='generateBtn' 
onClick={()=>{generatePassword(checkboxData,charLength)}}>
    Generate</button>



          </div>

       </div>
        </div>
      
    );
}

export default PasswordGenerator;