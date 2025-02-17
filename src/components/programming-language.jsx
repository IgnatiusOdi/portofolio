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
} from "@assets/programming_language";
import PartProgrammingLanguage from "./part-programming-language";

const ProgrammingLanguage = () => {
    return (
        <>
            <h1>All the Programming Technologies I have used</h1>
            <div className="grid grid-cols-3 gap-8">
                <PartProgrammingLanguage
                    title={"Frontend"}
                    details={frontend}
                />
                <PartProgrammingLanguage title={"Backend"} details={backend} />
                <PartProgrammingLanguage
                    title={"Database"}
                    details={database}
                />
                <PartProgrammingLanguage title={"Mobile"} details={mobile} />
                <PartProgrammingLanguage title={"IoT"} details={iot} />
                <PartProgrammingLanguage title={"Desktop"} details={desktop} />
                <PartProgrammingLanguage
                    title={"Web Testing"}
                    details={webtesting}
                />
                <PartProgrammingLanguage title={"Linux"} details={linux} />
                <PartProgrammingLanguage title={"Other"} details={other} />
            </div>
        </>
    );
};

export default ProgrammingLanguage;
