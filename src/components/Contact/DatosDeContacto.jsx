import mail from '../../assets/icons/mail.svg';
import instagram from '../../assets/icons/instagram.svg';
import phone from '../../assets/icons/phone.svg';
import facebook from '../../assets/icons/facebook.svg';
import puntoderetiro from '../../assets/icons/punto-de-retiro.svg';

const DatosDeContacto = () => {

    return (
        <div className='contact--container'>
            <h2 className='contact--titles'>CONTACTO</h2>
            <div className='icons--container'>
                <div className='icon--block'>
                    <img src={ mail } alt="mail icon" />
                    <p className='icon__text'>info@brujastore.com</p>
                </div>
                <div className='icon--block'>
                    <img src={ instagram } alt="instagram icon" />
                    <p className='icon__text'>Seguinos en Instagram</p>
                </div>
                <div className='icon--block'>
                    <img src={ phone } alt="phone icon" />
                    <p className='icon__text'>4585-1488</p>
                </div>
                <div className='icon--block'>
                    <img src={ facebook } alt="facebook icon" />
                    <p className='icon__text'>Seguinos en Facebook</p>
                </div>
            </div>
            <hr id='contact--division__line'/>
            <h2 className='contact--titles'>PUNTOS DE RETIRO</h2>
            <div className='retiro__icons--container'>
                <div className='retiro--block'>
                    <img src={ puntoderetiro } alt="Punto de retiro icon" />
                    <h3> CABA - Palermo </h3>
                    <p>
                        Aguirre 728 <br/>
                        Lunes a Sábado de 11 a 19 hs <br/>
                        Domingos de 12 a 19 hs <br/>
                    </p>
                </div>
                <div className='retiro--block'>
                    <img src={ puntoderetiro } alt="Punto de retiro icon" />
                    <h3> CABA - Retiro </h3>
                    <p>
                        Aguirre 728 <br/>
                        Lunes a Sábado de 11 a 19 hs <br/>
                        Domingos de 12 a 19 hs <br/>
                    </p>
                </div>
                <div className='retiro--block'>
                    <img src={ puntoderetiro } alt="Punto de retiro icon" />
                    <h3> GBA - Wilde </h3>
                    <p>
                        Güemes 125 <br/>
                        Lunes a Sábado de 11 a 19 hs <br/>
                        Domingos de 12 a 19 hs <br/>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default DatosDeContacto;