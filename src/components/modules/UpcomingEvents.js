import React from 'react';

const UpcomingEvents = (props) => {
        return (
            <section className="module module-events">
                <div className="wrapper">
                    <h2 className="module-title">Upcoming Events</h2>
                    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id
                        nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <ul className="events-list">

                        {props.events.map((event, i) => (
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
                        <a href="#">This is a block link<span className="fa fa-caret-right" aria-hidden="true"/></a>
                    </div>
                </div>
                {/*<!-- /.wrapper -->*/}
            </section>
        );
};

UpcomingEvents.propTypes = {
    events: React.PropTypes.array.isRequired
};

export default UpcomingEvents;