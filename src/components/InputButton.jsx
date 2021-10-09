const InputButton = ({
  label,
  active
}) =>{
  let classActive;
  active===true?classActive="item-active":classActive="";

  return (
    <button className={`button-item ${classActive} `}>
      {label}
    </button>
  )

}

export default InputButton;