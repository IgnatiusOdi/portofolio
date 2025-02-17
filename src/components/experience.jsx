const Experience = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <ol className="relative border-s border-gray-700">
                {props.data.map((d) => (
                    <li className="ms-4" key={d.time}>
                        <div className="timeline" />
                        <div className="muted">{d.time}</div>
                        <div className="title">{d.title}</div>
                        <div className="muted">
                            {d.location}
                            <span className="font-semibold">
                                &nbsp;- {d.city}
                            </span>
                        </div>
                        <ul className="list-['+'] py-2">
                            {d.jobs.map((j) => (
                                <li key={j.time}>{j}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Experience;
