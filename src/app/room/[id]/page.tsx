'use client'; 
import Container from '@/src/components/modules/container/Container';
import Gallery from '@/src/components/templates/room/gallery/Gallery';
import Details from '@/src/components/templates/room/details/Details';
import Reservation from '@/src/components/templates/room/reservation/Reservation';
const Room = () => {
    return (
        <Container>
            <div className='Container !mt-20'>
                <Gallery />
                <div className='flex items-start gap-8 mt-9'>
                    <Details />
                    <Reservation />
                </div>
            </div>
        </Container>
    );
};

export default Room;
