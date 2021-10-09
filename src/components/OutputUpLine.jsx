const OutputUpLine = ({tittle}) =>{

  return (
    <div className="output-up-line">
      <div className="line-tittle">
        <div className="tittle">{tittle}</div>
        <div className="sub">/ person</div>
      </div>
      <div className="value">
        0.0
      </div>
    </div>
  )

}

export default OutputUpLine;