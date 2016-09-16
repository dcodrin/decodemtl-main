import React from 'react';

const QuoteModule = (props) => {
    return (
        <section className="module module-quote module-about">
            <div className="wrapper">
                <div style={{backgroundImage: 'url(' + props.background + ')'}} className="module-bg-img">
                    <blockquote>
                        <p className="text-body-large">The more successful you are, the more you need to learn and grow. Your commitment to learning has to be continuous and unrelenting.</p>
                    </blockquote>
                    <p className="credit">John Donahoe</p>
                </div>
                {/*<!-- /.module-bg-img -->*/}
            </div>
            {/*<!-- /.wrapper -->*/}
        </section>
    );
};

QuoteModule.propTypes = {
    background: React.PropTypes.string
};

export default QuoteModule;