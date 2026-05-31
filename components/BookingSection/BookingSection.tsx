import Image from "next/image";
import "./booking.css";

const BookingSection = () => {
  return (
    <section className='bookingSection'>
      <div className='bookingContent'>
        <div className='bookingText'>
          <h2>Book your stay with us</h2>
          <p>AND ENJOY</p>
        </div>

        <div className='bookingImage'>
          <Image src='/bookSec.png' width={100} height={100} alt='The Oasis Homestay' />

          <div className='ornament'>✦</div>
        </div>

        <div className='bookingAction'>
          <button>BOOK NOW →</button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
