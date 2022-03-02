
const Info = ({ svg, infoBold, infoPlain }) => {
    return (
        <div className="carousel__info">
            <img src={svg} alt=""/>
            <p className="carousel__info--text"><b>{infoBold}</b>{infoPlain}</p>
        </div>
    )
}

export default Info