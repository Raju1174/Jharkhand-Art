import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <div className="product-overlay">
          <Link to="/contact" className="btn btn-primary">
            Inquire Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
