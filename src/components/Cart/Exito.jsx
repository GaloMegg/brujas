import check from '../../assets/icons/check.svg';
import logo from '../../assets/Mobile/logo.png';
import './cart.css';

const Exito = () => {
    return (
        <div className='exito--container'> 
            <img className='exito--img' src={ check } alt="check" />
            <p id='exito'>TU PEDIDO FUE REALIZADO CON ÉXITO</p>
            <p id='exito--txt'>En breve recibirás un mensaje para coordinar el pago y el envío.</p>
            <img className='exito--img' src={ logo } alt="logo bruja store" />
            <p id='exito--gracias'>¡MUCHAS GRACIAS!</p>
            <button id='exito--btn'>VOLVER AL INICIO</button>
        </div>
    )
};

export default Exito;