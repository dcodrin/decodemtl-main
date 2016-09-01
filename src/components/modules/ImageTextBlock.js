import React from 'react';

const ImageTextBlock = (props) => {
    return (
        <div className="img-text-container icon-block">
            {props.image}
            <div className="img-text-details icon-details">
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

ImageTextBlock.propTypes= {
    image: React.PropTypes.element.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default ImageTextBlock;