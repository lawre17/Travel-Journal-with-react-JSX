import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
function BoostrapCard(props) {
    // console.log(props.image);
    return (
        <div className="col-md-6">
            <div className="card d-flex flex-row flex-fill my-2">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <div className='card-img-container'>
                            <img className="image" src={props.image} alt={ props.name} />
                        </div>
                    </div>
                    <div className="col-md-6 card-body">
                        <div className='d-flex flex-row mx-auto'>
                            <h6 className='link'><FontAwesomeIcon icon={faLocationDot} className='text-danger' /> {props.location}</h6>
                            <a className='maplink mx-2' href={props.maplink}>View on google maps</a>
                        </div>
                        <div>
                            <h4 className='name'>{props.title }</h4>
                            <div className='d-flex flex-row'>
                                <p className='fw-bold otitle'>Credits: </p>
                                <span className='otitle px-2'><a href={ props.clink}>{props.credits }</a></span>
                            </div>
                            <div className='card-text overflow-y-scroll'dangerouslySetInnerHTML={{ __html: props.description }} />
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </ div>
        
    )
}

export default BoostrapCard