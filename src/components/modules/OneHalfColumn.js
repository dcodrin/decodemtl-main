import React from 'react';

const OneHalfColumn = (props) => {
    return (
        <section className="module">
            <div className="wrapper">
                {props.mainTitle ? <h2 className="module-title">{props.mainTitle}</h2> : null}
                {props.text ? <p>{props.text}</p> : null}
                <div className="row-container one-half-container">
                    <div className="one-half-content">
                        {props.titleLeft ? <h4>{props.titleLeft}</h4> : null}
                        {props.contentLeft}
                    </div>
                    <div className="one-half-content">
                        {props.titleRight ? <h4>{props.titleRight}</h4> : null}
                        {props.contentRight}
                    </div>
                </div>
            </div>
        </section>
    );
};

OneHalfColumn.propTypes = {
    mainTitle: React.PropTypes.string,
    text: React.PropTypes.string,
    titleLeft: React.PropTypes.string,
    titleRight: React.PropTypes.string,
    contentLeft: React.PropTypes.element,
    contentRight: React.PropTypes.element
};

export default OneHalfColumn;