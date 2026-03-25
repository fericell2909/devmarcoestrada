import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function WhatsAppButton() {
  const { t, contactInfo } = useLanguage();

  return (
    <a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label={t.whatsapp.ariaLabel}
    >
      <MessageCircle size={26} />
    </a>
  );
}
