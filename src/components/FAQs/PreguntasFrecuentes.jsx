import pago from '../../assets/Mobile/pago-shadow.png';
import talles from '../../assets/Mobile/talles-shadow.png'
import './FAQs.css';

const PreguntasFrecuentes = () => {

    return (
            <div className='faq--container'>
            <div className='faq--subcontainer'>
                <h2 className='faq--titles'>CÓMO COMPRAR</h2>
                <ol className='faq--text'>
                    <li className='faq--li'>
                        Navegá por las categorías y hacé click sobre el producto que te interese.
                    </li>
                    <li className='faq--li'>
                        Dentro de la sección del  producto  podrás ver más información de este.
                        Deberás seleccionar el talle y color que más te guste.
                    </li>
                    <li className='faq--li'>
                        Hace click en el botón "agregar al carrito". Esto agregará el producto a
                        tu carrito y te llevará al mismo. Si querés agregar más productos podés 
                        seguir navegando y repetir el proceso.
                    </li>
                    <li className='faq--li'>
                        Dentro de la sección del carrito hace click en "comprar".
                    </li>
                    <li className='faq--li'>
                        En la sección de datos de entrega deberás seleccionar si la entrega 
                        a domicilio o retiro en sucursal y completar el formulario con tus datos.
                    </li>
                    <li className='faq--li'>
                        Listo! Un mensaje confirmara tu compra y en breves se comunicarán con vos
                        para coordinar el método de pago y envío.
                    </li>
                </ol>
                <hr/>
            </div>  
            <div className='faq--subcontainer'>
                <h2 className='faq--titles'>POLÍTICA DE DEVOLUCIÓN</h2>
                <p className='faq--text'>
                    Tenés 10 días para devolver y 30 días para cambiar el producto desde la fecha de recepción.<br/>
                    El valor del producto a cambiar será el que pagaste originalmente por el mismo 
                    independientemente del valor que tenga al momento del cambio.
                </p>
            </div>
            <div className='faq__img--container'>
                <img id='faq__top__image' src={ pago } alt='medios de pago' />
                <img id='faq__bottom__image' src={ talles } alt='guia de talles' />
            </div>    
            </div>
    )
}

export default PreguntasFrecuentes;