import React from 'react';
import {Link} from 'react-router';

const UpcomingEvents = (props) => {
        console.log(window.location);
        const filterDates = ({startDate}) => {
            return props.filterOld ? new Date(startDate).getTime() >= new Date().getTime() : startDate;
        };

        return (
            <section className="module module-events">
                <div className="wrapper">
                    <h2 className="module-title">{props.title}</h2>
                    <p>{props.text}</p>
                    <ul className="events-list">

                        {props.events.filter(filterDates).slice(0,props.limit ? props.limit : props.events.length).map((event, i) => (
                            <li key={i} className="text-body-small" itemScope itemType="http://schema.org/Event">
                                <div className="event-date" itemProp="startDate">{event.startDate}</div>
                                <div className="event-name" itemProp="name">{event.description}</div>
                                <div className="event-url">
                                    <a className="text-body-large" href={event.url} itemProp="url" target="_blank">
                                        <span className="fa fa-chevron-circle-right" aria-hidden="true"/>
                                        <span className="visually-hidden">Event URL</span>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/*<!-- /.events-list -->*/}
                    <div className="link-more text-body-small">
                        {window.location.pathname !== '/events' ? <Link to="/events">View all events<span className="fa fa-caret-right" aria-hidden="true"/></Link> : null}
                    </div>
                </div>
                {/*<!-- /.wrapper -->*/}
            </section>
        );
};

UpcomingEvents.defaultProps = {
    filterOld: false
};

UpcomingEvents.propTypes = {
    events: React.PropTypes.array.isRequired,
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    limit: React.PropTypes.number,
    filterOld: React.PropTypes.bool
};

export default UpcomingEvents;