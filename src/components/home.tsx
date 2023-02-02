import { Avis } from "./avis";
import { Contact } from "./contact";
import { Info } from "./info";
import { Pres } from "./pres";

export const Home: React.FC<{}> = () => {
return (
    <>
        <Pres></Pres>
        <a id='informations' href=" "> </a>
        <Info></Info>
            <div className="bg-apple"><br/><Contact></Contact><br/><br/></div><div className="bg-white"><br/>
        <br/><br/>
        <Avis></Avis>
        <br/><br/><br/><br/><br/><br/></div>
    </>
    )
}