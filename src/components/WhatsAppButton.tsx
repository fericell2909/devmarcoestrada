import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
