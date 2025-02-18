import {
    frontend,
    backend,
    database,
    mobile,
    iot,
    desktop,
    webtesting,
    linux,
    other,
} from "@assets/programming_technologies";
import PartProgrammingTechnologies from "./part-programming-technologies";

const ProgrammingTechnologies = (props) => {
    return (
        <>
            <h1 id={props.id}>All the Programming Technologies I have used</h1>
            <div className="grid grid-cols-3 gap-8">
                <PartProgrammingTechnologies
                    title={"Frontend"}
                    details={frontend}
                />
                <PartProgrammingTechnologies
                    title={"Backend"}
                    details={backend}
                />
                <PartProgrammingTechnologies
                    title={"Database"}
                    details={database}
                />
                <PartProgrammingTechnologies
                    title={"Mobile"}
                    details={mobile}
                />
                <PartProgrammingTechnologies title={"IoT"} details={iot} />
                <PartProgrammingTechnologies
                    title={"Desktop"}
                    details={desktop}
                />
                <PartProgrammingTechnologies
                    title={"Web Testing"}
                    details={webtesting}
                />
                <PartProgrammingTechnologies title={"Linux"} details={linux} />
                <PartProgrammingTechnologies title={"Other"} details={other} />
            </div>
        </>
    );
};

export default ProgrammingTechnologies;
