//TODO MAKE THIS DYNAMIC WITH CONFIG FILES
import React from 'react';

const TwoThirdColumns = (props) => {
    return (
        <section className="module employer-module">
            <div className="wrapper">
                <h2 className="module-title">What Makes Our Grads Special?</h2>
                <div className="row-container row-two-third-container alternating">
                    <div className="two-third-content">
                        <h4>Rigor</h4>
                        <p>Each one of our grads has gone against the grain and made sacrifices in order to get through our program. They are ready and eager to take on the challenges your company has waiting for them.</p>
                    </div>
                    <div className="one-third-content">
                        <img src="https://unsplash.it/600/360?image=0" alt="" />
                    </div>
                </div>
                {/*<!-- /.row-container -->*/}
                <div className="row-container row-two-third-container alternating">
                    <div className="two-third-content">
                        <h4>Passion</h4>
                        <p>Our grads have been taught to think and learn like developers. New languages are not a barrier but rather an opportunity to grow their knowledge-base and evaluate the best tools for the given job.</p>
                    </div>
                    <div className="one-third-content">
                        <img src="https://unsplash.it/600/360?image=0" alt="" />
                    </div>
                </div>
                {/*<!-- /.row-container -->*/}
                <div className="row-container row-two-third-container alternating">
                    <div className="two-third-content">
                        <h4>Team Players</h4>
                        <p>Coding skills are not enough. All of our students are selected as much for their personality and communications skills as their ability to learn and execute. We know that “fit" is the key to a successful team.</p>
                    </div>
                    <div className="one-third-content">
                        <img src="https://unsplash.it/600/360?image=0" alt="" />
                    </div>
                </div>
                {/*<!-- /.row-container -->*/}
            </div>
            {/*<!-- /.wrapper -->*/}
        </section>
    );
};

TwoThirdColumns.propTypes = {};

export default TwoThirdColumns;