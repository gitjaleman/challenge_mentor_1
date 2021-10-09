import InputTittle from "./InputTittle";
import InputField from "./InputField";

const InputContainerPeople = () =>{

  return (
    <div className="inputpeople">
      <InputTittle tittle="Number of People"/>
      <InputField 
        inputId="people"
        inputPlaceHolder="0"
        inputType="number"
        inputImg="imgPerson"
      />
    </div>
  )

}

export default InputContainerPeople;