import { Avis } from "./avis";
import { Contact } from "./contact";
import { Info } from "./info";
import { Map } from "./map";
import { Pres } from "./pres";

export const Home: React.FC<{}> = () => {
return (

    <>
        <Pres></Pres>
        <br/><br/>
        <Info></Info><br/><br/>
            <Map></Map>
            <Contact></Contact><br/>
        <br/><br/>
        <Avis></Avis>
        <br/><br/><br/><br/><br/><br/>
    </>
  )
}