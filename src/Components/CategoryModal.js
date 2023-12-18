import React from 'react';

const CategoryModal = ({ show, category, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={category.image} alt={category.name} />
            <div className="info">
              <h1>Title: {category.name}</h1>
              <h3>Famous Author : {category.author}</h3>
              <h3>Number of books : {category.noBook}</h3>
              <h3>Average Price : {category.Avgprice}</h3>
              {/* Additional category-specific information */}
            </div>
          </div>
          <h5 className="description">{category.description}</h5>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
