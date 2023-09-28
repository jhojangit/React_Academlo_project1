
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
            >¡Abrir otra galleta de la fortuna!</button>
        </div>
    )
}

export default Btn