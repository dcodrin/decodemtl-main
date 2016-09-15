import React from 'react';

//INDIVIDUAL COLUMN EXAMPLE
//DATA PASSED MUST BE AN ARRAY OF SUCH ELEMENTS
/*
<div className="row-container row-two-third-container alternating">
    <div className="two-third-content">
        <h4>Rigor</h4>
        <p>Each one of our grads has gone against the grain and made sacrifices in order to get through our program. They are ready and eager to take on the challenges your company has waiting for them.</p>
    </div>
    <div className="one-third-content">
        <img src="https://unsplash.it/600/360?image=0" alt="" />
    </div>
</div>
*/

const TwoThirdColumns = (props) => {
    return (
        <section className="module employer-module">
            <div className="wrapper">
                <h2 className="module-title">{props.title}</h2>
                {props.columns.map((column, i) => (
                    React.cloneElement(column, {key: i})
                ))}
                {/*<!-- /.row-container -->*/}
            </div>
            {/*<!-- /.wrapper -->*/}
        </section>
    );
};

TwoThirdColumns.propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
};

export default TwoThirdColumns;