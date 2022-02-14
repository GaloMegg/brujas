import nosotrosMobile from 'C:/Users/Blas/Desktop/BRUJASTORE/brujas/src/assets/Mobile/nosotros-mobile.png';
import './aboutUs.css';
// import { Link } from 'react-router-dom';

const SobreNosotros = () => {

    return (
        <div className='about__us--container'>
            <h2 className='about__us--title'>SOBRE NOSOTROS</h2>
            <img className='about__us--img' src={ nosotrosMobile } alt='chica al sol usando sandalias by BrujaStore'/>
            <h3 className='about__us--subtitle'>
                Bruja store nace,<br/>
                Bruja store es
            </h3>
            <p className='about__us--text'>
                Nos caracterizamos por brindar una gran variadad de productos de vestir 
                de excelente calidad. Ofrecemos un gran abanico de opciones que van desde 
                articulos modernos y comodos como zapatillas o zapatos con plataforma, 
                hasta clasicos como zapatos bajos. Dentro de esa variedad tambien ofrecemos 
                distintos materiales como el cuero o eco cuero. 
                
                Queremos facilitar la compra de estos productos, por eso tambien ofrecemos 
                envios a todo el pais y contamos con hasta tres puntos para el retiro 
                de los productos en CABA y GBA.
            </p>
            <button className='about__us--btn' >VER TODOS PRODUCTOS   
                <svg id='arrow__right' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5303 24.5303C37.8232 24.2374 37.8232 23.7626 37.5303 23.4697L32.7574 18.6967C32.4645 18.4038 31.9896 18.4038 31.6967 18.6967C31.4038 18.9896 31.4038 19.4645 31.6967 19.7574L35.9393 24L31.6967 28.2426C31.4038 28.5355 31.4038 29.0104 31.6967 29.3033C31.9896 29.5962 32.4645 29.5962 32.7574 29.3033L37.5303 24.5303ZM12 24.75L37 24.75L37 23.25L12 23.25L12 24.75Z" fill="#FFFFFF"/>
                </svg>
            {/* <img id='arrow__right' src={ arrowRight } alt="flecha hacia la derecha" /> */}
            </button>
        </div>
    )
};

export default SobreNosotros;