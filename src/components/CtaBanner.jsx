import { Link } from 'react-router-dom';
import Icon from './Icon';
import { whatsappLink } from '../config/site';

// The site's one primary call to action: Get a Quote. WhatsApp is the secondary route.
export default function CtaBanner({
  eyebrow = 'Send your bathroom',
  title = 'Get a quote for your shower enclosure',
  text = 'Share a few photos and rough measurements of your shower area. We will suggest the right enclosure, glass and finish, and send you a clear quote.',
  quoteHref = '/quote',
  whatsappMessage = 'I would like a quote for a shower enclosure.',
}) {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="send-bathroom-banner">
          <div className="banner-content">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="banner-title">{title}</h2>
            <p className="banner-desc">{text}</p>
            <div className="banner-actions">
              <Link to={quoteHref} className="btn btn-accent btn-lg">
                Get a Quote
                <Icon name="arrow" size={18} strokeWidth={2} />
              </Link>
              <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg" data-track="cta-banner">
                <Icon name="chat" size={18} />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
