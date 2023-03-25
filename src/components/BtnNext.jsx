
const Btn = ({btnchangephrase, btnchangeColor}) =>{
    
    return(
        <div className="container-btn">

            <button
                onClick={() => {
                    const funcionPhrase = btnchangephrase
                    const funcionColor = btnchangeColor
                    funcionPhrase();
                    funcionColor();
                }}
            >Ver siguiente 🔜</button>
        </div>
    )
}

export default Btn