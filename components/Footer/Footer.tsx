import './footer.css';
const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__nav'>
            <a href='#'>About</a>
            <a href='#'>Rooms</a>
            <a href='#'>Gallery</a>
          </div>

          <div className='footer__contact'>
          <h3 className='footerPhone'>+91 98765 43210</h3>
            <h2 className='footerEmail'>stay@theoasishomestay.com</h2>
            <p className='footerAddress'>
              Village Road, Near Riverside <br />
              Uttarakhand, India
            </p>
          </div>

          <div className='footer__social'>
            <a className='footerLink' href='#'>Instagram</a>
            <a  className='footerLink' href='#'>Facebook</a>
            <a className='footerLink' href='#'>WhatsApp</a>
          </div>

          <div className='footer__copyright'>
            <p>© The Oasis Homestay. All Rights Reserved.</p>
          </div>

         
        </div>
        <div className='footer__watermark'>OASIS</div>
      </footer>
    </div>
  );
};

export default Footer;
