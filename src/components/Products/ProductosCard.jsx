// acá probablemente usemos firestore para pintar los productos con toda su data
import provisoria from '../../assets/Mobile/provisoria.jpg';

const ProductosCard = () => {
    return (
        <div className='productos__card--container'>
            <img className='productos__card--img' src={ provisoria } alt="imagen de sandalias" />
            <p className='productos__card--title'>ZAPATOS COLOR CACA</p>
            <p className='productos__card--price'>$4.140</p>
            <div className='productos__card--cuotas'>
                <p><b>3</b> y <b>6</b> cuotas interés</p>
            </div>
            <button className='productos__card--btn'>AGREGAR AL CARRITO</button>
        </div>
    )
};

export default ProductosCard;