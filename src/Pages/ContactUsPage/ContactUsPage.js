import './ContactUsPage.css';
import '../../Components/MapWrapper/MapWrapper.js';
import MapWrapper from '../../Components/MapWrapper/MapWrapper.js';
import ShopsWrapper from '../../Components/ShopWrapper/ShopsWrapper';

function ContactUsPage() {
    return (
    <div id="main-content">
        <div className='container'>
            <div className='content'>
                <ShopsWrapper title='Find Us' />
                <MapWrapper />
            </div>
        </div>
    </div>
    )
}

export default ContactUsPage;