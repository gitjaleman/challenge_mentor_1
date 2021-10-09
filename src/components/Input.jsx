import InputContainerBill from  "./InputContainerBill";
import InputContainerSelect from  "./InputContainerSelect";
import InputContainerPeople from  "./InputContainerPeople";

const Input = () =>{

  return (
    <div className="input">
      <InputContainerBill/>
      <InputContainerSelect/>
      <InputContainerPeople/>
    </div>
  )

}

export default Input;