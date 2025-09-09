// components/Icons.jsx
// eslint-disable-next-line react/prop-types
export function CaretDown({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M7.5 11.25L15 18.75L22.5 11.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// eslint-disable-next-line react/prop-types
export function BurgerMenu({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M11.25 7.5H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.25 15H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.25 22.5H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.25 7.5V7.5125" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.25 15V15.0125" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.25 22.5V22.5125" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// eslint-disable-next-line react/prop-types
export function SearchIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// eslint-disable-next-line react/prop-types
export function WishlistIcon({ size = 22, strokeWidth = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s-8-5.2-8-10.1C4 7.1 5.9 5 8.3 5 9.9 5 11 6 12 7c1-1 2.1-2 3.7-2 2.4 0 4.3 2.1 4.3 4.9C20 14.8 12 20 12 20z"
        stroke="currentColor" strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
}

// eslint-disable-next-line react/prop-types
export function CartIcon({ size = 22, strokeWidth = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="20" r="1.5" fill="currentColor"></circle>
      <circle cx="17" cy="20" r="1.5" fill="currentColor"></circle>
      <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L22 8H7" stroke="currentColor" strokeWidth={strokeWidth} fill="none"/>
    </svg>
  );
}

// eslint-disable-next-line react/prop-types
export function AccountIcon({ size = 20, strokeWidth = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

// eslint-disable-next-line react/prop-types
export function HeadsetIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="2"/>
      <path d="M4 12v5a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
