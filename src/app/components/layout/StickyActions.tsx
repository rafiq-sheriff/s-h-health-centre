import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_TEL, whatsappHref } from '../../constants/contact';

/**
 * Floating CTAs pinned to the bottom-right corner.
 * WhatsApp on top, Call below (vertical stack on all breakpoints).
 */
export default function StickyActions() {
  const wa = whatsappHref(
    'Hello, I would like to book a consultation at S H Health Centre (from website sticky button).',
  );

  const pillBase =
    'pointer-events-auto flex items-center justify-center shadow-lg transition hover:brightness-[0.97] active:brightness-95';

  const iconCircle =
    'h-14 w-14 shrink-0 rounded-full sm:h-auto sm:w-fit sm:rounded-full sm:px-4 sm:py-3 sm:shadow-xl';

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end items-end p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6"
      aria-label="Quick contact"
    >
      <div className="pointer-events-auto flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:max-w-none">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className={`${pillBase} ${iconCircle} gap-0 bg-[#25D366] text-white sm:justify-start sm:gap-3`}
        >
          <MessageCircle className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" aria-hidden />
          <span className="hidden text-sm font-semibold tracking-wide whitespace-nowrap sm:inline">
            Chat with us
          </span>
        </a>
        <a
          href={PHONE_TEL}
          aria-label="Call us"
          className={`${pillBase} ${iconCircle} gap-0 bg-[#7AA98C] text-white sm:justify-start sm:gap-3`}
        >
          <Phone className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" aria-hidden />
          <span className="hidden text-sm font-semibold tracking-wide whitespace-nowrap sm:inline">
            Call us
          </span>
        </a>
      </div>
    </div>
  );
}
