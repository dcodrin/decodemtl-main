//TODO FIX LINK STYLE
import React from 'react';
import {Link} from 'react-router';

const GreenImageBanner = (props) => {
    return (
        <section className="module">
            <div className="wrapper">
                <div style={{backgroundImage: 'url(' + props.background + ')'}} className="module-bg-img">
                    <h2 className="module-title">{props.title}</h2>
                    <p className='text-body-small'>{props.text}</p>
                    {props.link ? <p className="text-body-large"><Link to={props.link}>Shoot us an email</Link> with the details!</p> : null}
                </div>
            </div>
        </section>
    );
};

GreenImageBanner.propTypes = {
    background: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    link: React.PropTypes.string
};

export default GreenImageBanner;