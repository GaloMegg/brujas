
const FormularioDeContacto = () => {

    return (
        <div className='contact__form--container'>
            <h2 className='contact--titles'>ESPERAMOS TU CONSULTA</h2>
            <form className='contact__form'>
                <div className="contact__form--fieldset">
                    <label className='contact__form--label' htmlFor="name">Nombre*</label><br/>
                    <input className='contact__form--input' type="text" placeholder='Nombre'/><br/>
                </div>
                <div className="contact__form--fieldset">
                    <label className='contact__form--label' htmlFor="lastName">Apellido*</label><br/>
                    <input className='contact__form--input' type="text" placeholder='Apellido' /><br/>
                </div>
                <div className="contact__form--fieldset">
                    <label className='contact__form--label' htmlFor="mail">Mail*</label><br/>
                    <input className='contact__form--input' type="email" placeholder='ejemplo@mail.com' /><br/>
                </div>
                <div className="contact__form--fieldset">
                    <label className='contact__form--label' htmlFor="phone">Teléfono  (opcional)</label><br/>
                    <input className='contact__form--input' type="tel" placeholder='Telefono' /><br/>
                </div>
                <label className='contact__form--label' htmlFor="message">Mensaje*</label><br/>
                <textarea className='contact__form--msg' type="text" placeholder='Mensaje' /><br/>
                <p className='form--warning'>* ¡Necesitamos esta información!</p>
                <button className='contact__form--btn' type='submit'> ENVIAR </button>
            </form>
        </div>
    )
};

export default FormularioDeContacto;