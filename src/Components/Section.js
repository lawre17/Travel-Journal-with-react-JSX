import Card from "./BoostrapCard"
import data from '../data';
function Section() {
    return (
        <div className=" container-fluid row my-3">
            {data.map(info => <Card
                location={info.location}
                maplink={info.link}
                title={info.title}
                credits={info.credits}
                clink={info.creditslink}
                image={info.image}
                description = {info.desription}
            
            />)}    
        </div>
    )
}

export default Section