import Logo from "./images/logo.png"
import Hamburguer from "./images/hamburguericon.svg"
import Cart from "./images/shop-bag.png"
const HeaderContainer = () => {
    return (
        <div className="header__flex">
            <img src={Hamburguer} alt="navegacion" className="header__hamburguer" />
            <img src={Logo} alt=" logo de brujas" className="header__logo" />
            <div className="header__cart-widget">
                <img src={Cart} alt="carrito de compras" className="header__cart" />
            </div>
        </div>);
};

export default HeaderContainer;
