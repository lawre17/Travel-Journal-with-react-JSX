import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobeAfrica} from '@fortawesome/free-solid-svg-icons';
function Nav() {
    return (
        <nav className='nav'>
            <h5 className='title'>  <FontAwesomeIcon icon={faGlobeAfrica}/>  My Travel Journal</h5>
        </nav>
    )
}

export default Nav