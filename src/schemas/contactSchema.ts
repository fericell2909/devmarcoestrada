import { z } from 'zod';
import type { Translations } from '../types';
import { containsProfanity } from '../utils/profanityFilter';

const CREDIT_CARD_REGEX = /\b(?:\d[ -]*?){13,19}\b/;
const LETTERS_ONLY_REGEX = /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]+$/;

export function createContactSchema(t: Translations) {
  const v = t.contact.validation;

  return z.object({
    name: z
      .string()
      .min(2, v.nameMin)
      .max(50, v.nameMax)
      .regex(LETTERS_ONLY_REGEX, v.nameLettersOnly)
      .refine((val) => !containsProfanity(val), { message: v.nameProfanity }),
    email: z
      .string()
      .email(v.emailInvalid),
    message: z
      .string()
      .min(10, v.messageMin)
      .max(500, v.messageMax)
      .refine((val) => !CREDIT_CARD_REGEX.test(val), { message: v.messageCreditCard })
      .refine((val) => !containsProfanity(val), { message: v.messageProfanity }),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
