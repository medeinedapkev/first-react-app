import './ContactUsPage.css';
import MapWrapper from '../../Components/ContactUsComponents/MapWrapper/MapWrapper.js';
import ShopsWrapper from '../../Components/ContactUsComponents/ShopWrapper/ShopsWrapper.js';
import Container from '../../Components/Container/Container';

function ContactUsPage() {
    return (
        <Container classes='' >
            <div className='contact-content'>
                <ShopsWrapper title='Find Us' />
                <MapWrapper />
            </div>
        </Container>
       
    )
}

export default ContactUsPage;