import EventWrapper from '../EventWrapper/EventWrapper';
import PodcastWrapper from '../PodcastWrapper/PodcastWrapper';

function SidePart() {
    return (
        <div className="side-part">
          <section className="podcast">
            <PodcastWrapper title='Podcastai ir radijo laidos' />
          </section>
    
          <section className="event">
            <EventWrapper title='Renginiai' button='Daugiau' />
          </section>
    
        </div>
    )
}

export default SidePart;