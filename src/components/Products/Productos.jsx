import ProductosNav from './ProductosNav';
import ProductosCard from './ProductosCard';
import './products.css';

const Productos = () => {
    return (
        <div className='productos--container'>
            <ProductosNav />
            <div className='productos__title--container'>
                <p className='productos__title'>ZAPATOS</p>
            </div>
            <ProductosCard />
        </div>
    )
};

export default Productos;