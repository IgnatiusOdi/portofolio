const PartProgrammingLanguage = (props) => {
    return (
        <div>
            <div className="title border-b-2">{props.title}</div>
            <ul>
                {props.details.map((d) => (
                    <li key={d.name}>
                        <div className="underline">
                            {d.icons}
                            {d.name}
                        </div>
                        {d.details != "" && (
                            <div className="font-light">&emsp;{d.details}</div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PartProgrammingLanguage;
