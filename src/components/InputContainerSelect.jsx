import InputTittle from "./InputTittle";
import InputButton from "./InputButton";
import InputItem from "./InputItem";


const InputContainerSelect = () =>{

  return (
    <div className="inputselect">
      <InputTittle tittle="Select Tip %"/>
      <div className="select-buttons">
        <InputButton 
          label="5%"
          active={true}
        />
        <InputButton 
          label="10%"
          active={false}
        />
        <InputButton 
          label="15%"
          active={false}
        />
        <InputButton 
          label="25%"
          active={false}
        />
        <InputButton 
          label="50%"
          active={false}
        />
        <InputItem />
      </div>
    </div>
  )

}

export default InputContainerSelect;