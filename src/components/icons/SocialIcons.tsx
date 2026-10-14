type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden>
      <path d="M311.4 288l14.2-92.7h-88.9v-60.1c0-25.4 12.4-50.1 52.2-50.1h40.4V6.2S292.7 0 257.4 0c-73.2 0-121.1 44.4-121.1 124.7v70.6H55v92.7h81.4V512h100.2V288z" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1-.8-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.9-4.1 4.1 0 .3 0 .6.1.9C8.3 8.8 5.6 7.4 3.7 5c-.3.5-.5 1.2-.5 1.8 0 1.4.7 2.6 1.8 3.4-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.6 3.2 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.1 1.7-5 1.7-.3 0-.6 0-1-.1C3.9 19.4 6 20 8.3 20c7 0 10.8-5.8 10.8-10.8v-.5c.8-.5 1.4-1.2 1.9-2z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.9 8.4H3.6V20h3.3V8.4zM5.3 3.7a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 20v-6.4c0-3.4-1.8-5-4.3-5-1.9 0-2.8 1.1-3.3 1.8V8.4H9.5c0 .1 0 4.9 0 11.6h3.3v-6.5c0-.3 0-.7.1-.9.3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V20h3.5z" />
    </svg>
  );
}

export function PinterestIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.5c-5.2 0-8.8 3.7-8.8 7.9 0 2.6 1.4 4.7 3.5 5.5.3.1.5 0 .6-.3l.3-1.1c.1-.3 0-.4-.2-.6-.5-.6-.9-1.5-.9-2.6 0-3.4 2.5-6.4 6.6-6.4 3.6 0 5.6 2.2 5.6 5.1 0 3.9-1.7 7.1-4.2 7.1-1.4 0-2.4-1.1-2.1-2.5.4-1.7 1.2-3.5 1.2-4.7 0-1.1-.6-2-1.8-2-1.4 0-2.6 1.5-2.6 3.4 0 1.3.4 2.1.4 2.1l-1.6 6.9c-.5 2-.1 4.4 0 4.6 0 .1.2.2.3 0 .1-.2 1.7-2.1 2.3-4.1l.9-3.4c.4.8 1.7 1.5 3.1 1.5 4.1 0 6.9-3.7 6.9-8.7-.1-3.9-3.3-7.7-8.5-7.7z" />
    </svg>
  );
}
