type IconProps = { className?: string };

export function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ScaleIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 4v24M9 28h14M7 9h18M9 9 4.5 19h9L9 9Zm14 0-4.5 10h9L23 9Z" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 19c.8 2.3 2.3 3.4 4.5 3.4s3.7-1.1 4.5-3.4m5 0c.8 2.3 2.3 3.4 4.5 3.4s3.7-1.1 4.5-3.4" fill="none" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

export function ShieldIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3.5c3.6 2.5 7 3.6 10.5 3.6v7.6c0 6.3-3.5 10.9-10.5 13.8-7-2.9-10.5-7.5-10.5-13.8V7.1C9 7.1 12.4 6 16 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="m11.5 16 3 3 6.5-7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3c.4 7.8 4.7 12.1 12.5 13-7.8.9-12.1 5.2-12.5 13-.4-7.8-4.7-12.1-12.5-13C11.3 15.1 15.6 10.8 16 3Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
