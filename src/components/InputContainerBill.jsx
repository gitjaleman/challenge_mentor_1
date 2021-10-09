import InputTittle from "./InputTittle";
import InputField from "./InputField";


const InputContainerBill = () =>{

  return (
    <div className="inputbill">
      <InputTittle tittle="Bill"/>
      <InputField 
        inputId="bill"
        inputPlaceHolder="0.0"
        inputImg="imgDollar"
      />
      
    </div>
  )

}

export default InputContainerBill;