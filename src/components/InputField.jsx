import React, {useState} from 'react';
import imgDollar from '../img/icon-dollar.svg';
import imgPerson from '../img/icon-person.svg';


const InputField = ({
  inputId,
  inputPlaceHolder,
  inputImg
}) =>{
  
  const [inputValue,setInputValue] = useState({
    bill:"",
    people: ""
  });

  const obj = {
    imgDollar,
    imgPerson
  }
 
console.log('fuera ',inputValue);

  const chageInputValue = ({target}) => {
    console.log('dentro',inputValue);
    setInputValue({...inputValue, [target.id]:target.value })
  };



  return (
    <div className="input-field ">
      <input className={inputValue===0&&"error"} id={inputId} type="number" onChange={chageInputValue}  placeholder={inputPlaceHolder} />
      <img src={obj[inputImg]} alt="" />
    </div>
  )

}

export default InputField;