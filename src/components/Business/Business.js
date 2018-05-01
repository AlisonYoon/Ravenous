import React from 'react';
import './Business.css';



class Business extends React.Component {
  render() {
    const {business} = this.props;
    const {name, address, city, state, zipCode, category: categories, rating, reviewCount, imageSrc} = business;
    console.log('component', business);
    return (
      <div className="Business">
        <div className="image-container">
          <img src={imageSrc} alt=''/>
        </div>
        <h2>{name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{address}</p>
            <p>{city}</p>
            <p>{`${state} ${zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            {categories.map((category) => (<h3>{category.title}</h3>))}
            <h3 className="rating">{`${rating} stars`}</h3>
            <p>{`${reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
