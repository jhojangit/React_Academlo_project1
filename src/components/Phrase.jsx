

const PrintPhrase = ({randomPhrase}) =>{
    const {phrase, author} = randomPhrase

    return(
        <div className="container-phrase">
            <h2>{phrase}</h2>
            <h4> - {author}</h4>
        </div>
    )

}

export default PrintPhrase