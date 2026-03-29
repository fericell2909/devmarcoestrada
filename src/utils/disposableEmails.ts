const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net',
  'tempmail.com', 'temp-mail.org', 'throwaway.email',
  'fakeinbox.com', 'sharklasers.com', 'guerrillamailblock.com',
  'grr.la', 'dispostable.com', 'yopmail.com', 'yopmail.fr',
  'trashmail.com', 'trashmail.net', 'trashmail.org',
  'mailnesia.com', 'maildrop.cc', 'discard.email',
  'mailcatch.com', 'mintemail.com', 'tempail.com',
  'mohmal.com', 'burnermail.io', 'tempr.email',
  'tempmailo.com', 'tempmailaddress.com', 'emailondeck.com',
  'getnada.com', 'inboxbear.com', 'mailsac.com',
  'harakirimail.com', 'crazymailing.com', 'tmail.ws',
  '10minutemail.com', '10minutemail.net', 'minutemail.com',
  'mailtemp.net', 'mailnator.com', 'anonbox.net',
  'binkmail.com', 'bobmail.info', 'devnullmail.com',
  'spamgourmet.com', 'spamfree24.org', 'jetable.org',
  'mailexpire.com', 'mailzilla.com', 'nomail.xl.cx',
  'nospam.ze.tc', 'trash-mail.com', 'uggsrock.com',
  'mytemp.email', 'tmpmail.net', 'tmpmail.org',
  'guerrillamail.de', 'guerrillamail.biz', 'mailpoof.com',
  'pookmail.com', 'filzmail.com', 'fastacura.com',
  'emailfake.com', 'emkei.cz', 'mailhero.io',
  'tempmails.net', 'disposableemailaddresses.emailmiser.com',
  'mailseal.de', 'getairmail.com', 'meltmail.com',
]);

export function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;
  return DISPOSABLE_DOMAINS.has(domain);
}
