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
            <h1 id={props.id}>Programming Technologies I've used</h1>
            <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                <PartProgrammingTechnologies
                    title={"Frontend"}
                    data={frontend}
                />
                <PartProgrammingTechnologies title={"Backend"} data={backend} />
                <PartProgrammingTechnologies
                    title={"Database"}
                    data={database}
                />
                <PartProgrammingTechnologies title={"Mobile"} data={mobile} />
                <PartProgrammingTechnologies title={"IoT"} data={iot} />
                <PartProgrammingTechnologies title={"Desktop"} data={desktop} />
                <PartProgrammingTechnologies
                    title={"Web Testing"}
                    data={webtesting}
                />
                <PartProgrammingTechnologies title={"Linux"} data={linux} />
                <PartProgrammingTechnologies title={"Other"} data={other} />
            </div>
        </>
    );
};

export default ProgrammingTechnologies;
