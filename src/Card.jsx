const Card = ({characterInfo, handleClink}) => {
    //console.log(characterInfo)
    return (
        <div className="characterCard" id={characterInfo.name}  >
            <img id={characterInfo.id} src={characterInfo.image} alt={characterInfo.name}  name={characterInfo.name} onClick={handleClink}/>
            <label htmlFor={characterInfo.id} name={characterInfo.name}>{characterInfo.name} </label>
        </div>
    )
}

export default Card