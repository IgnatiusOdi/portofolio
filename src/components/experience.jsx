const Experience = (props) => {
    return (
        <>
            <h1 id={props.id}>{props.title}</h1>
            <ol className="relative border-s border-gray-700">
                {props.data.map((d) => (
                    <li className="ms-4" key={d.time}>
                        <div className="timeline" />
                        <div className="muted">{d.time}</div>
                        <div className="title">
                            {d.link ? (
                                <a href={d.link} target="_blank">
                                    {d.title}
                                </a>
                            ) : (
                                d.title
                            )}
                        </div>
                        <div className="muted">
                            {d.location}
                            <span className="font-semibold">
                                &nbsp;- {d.city}
                            </span>
                        </div>
                        <ul className="plus">
                            {d.jobs.map((j) => (
                                <li key={j}>{j}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Experience;
