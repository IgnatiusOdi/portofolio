const PartProgrammingTechnologies = (props) => {
    return (
        <div>
            <div className="title border-b-2">{props.title}</div>
            {props.data.map((d) => (
                <div key={d.name}>
                    <div className="flex items-center gap-2 font-semibold">
                        {d.icon}
                        {d.name}
                    </div>
                    <ul className="plus px-6 py-0">
                        {d.details.map((detail) => (
                            <li key={detail} className="font-light">
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PartProgrammingTechnologies;
