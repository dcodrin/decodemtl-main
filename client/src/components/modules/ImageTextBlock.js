import React from 'react';

const ImageTextBlock = (props) => {
    return (
        <div className="img-text-container icon-block">
            <div className="icon" aria-hidden="true">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className="img-text-details icon-details">
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

ImageTextBlock.propTypes= {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default ImageTextBlock;