import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Image from "../Images/support1.jpg"
function BoostrapCard() {
    return (
        <div className="col-md-6">
            <div className="card d-flex flex-row flex-fill my-2">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <div className='card-img-container'>
                        <img className="image" src={ Image} alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-6 card-body">
                        <div className='d-flex flex-row mx-auto'>
                            <h6 className='link'><FontAwesomeIcon icon={faLocationDot} className='text-danger' /> JAPAN</h6>
                            <a className='maplink mx-2' href='https.google.com'>View on google maps</a>
                        </div>
                        <div>
                            <h4 className='name'>Mount Fuji</h4>
                            <div className='d-flex flex-row'>
                                <p className='fw-bold otitle'>Credits: </p>
                                <span className='otitle px-2'>Lawrence Njoroge</span>
                            </div>
                            <div className='card-text overflow-y-scroll'>
                                <p>Inside the row, there are two columns created using col-md-6,
                                    each taking up half of the available width on medium-sized screens
                                    and above. You can adjust the col-md-6 class to customize the distribution
                                    of space between the image and text.</p>
                                <p>Inside the row, there are two columns created using col-md-6,
                                    each taking up half of the available width on medium-sized screens
                                    and above. You can adjust the col-md-6 class to customize the distribution
                                    of space between the image and text.</p>
                                <p>Inside the row, there are two columns created using col-md-6,
                                    each taking up half of the available width on medium-sized screens
                                    and above. You can adjust the col-md-6 class to customize the distribution
                                    of space between the image and text.</p>
                                <p>Inside the row, there are two columns created using col-md-6,
                                    each taking up half of the available width on medium-sized screens
                                    and above. You can adjust the col-md-6 class to customize the distribution
                                    of space between the image and text.</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </ div>
        
    )
}

export default BoostrapCard