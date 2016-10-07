import React from 'react';
import {Link} from 'react-router';

const UpcomingEvents = (props) => {
    const filterDates = ({startDate}) => {
        return props.filterOld ? new Date(startDate).getTime() >= new Date().getTime() : startDate;
    };

    return (
        <section className="module module-events">
            <div className="wrapper">
                <h2 className="module-title">{props.title}</h2>
                <p>{props.text}</p>
                <ul className="events-list">
                    {props.events.filter(filterDates).slice(0, props.limit ? props.limit : props.events.length).map((event, i) => (
                        <li key={i} className="text-body-small" itemScope itemType="http://schema.org/Event">
                            <a className="event-url" href={event.url} itemProp="url" target="_blank">
                                <div className="event-date" itemProp="startDate">{event.startDate}</div>
                                <div className="event-name" itemProp="name">{event.eventName}</div>
                                <div className="event-description" itemProp="description">{event.description}
                                    <span className="event-arrow fa fa-chevron-circle-right text-body-large"
                                          aria-hidden="true"/>
                                    <span className="visually-hidden">Event URL</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                {/*<!-- /.events-list -->*/}
                <div className="link-more text-body-small">
                    {window.location.pathname !== '/events'
                        ? <Link to="/events">View all events
                        <span className="fa fa-caret-right" aria-hidden="true"/>
                    </Link>
                        : null}
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