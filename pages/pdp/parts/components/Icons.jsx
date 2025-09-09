// components/Icons.jsx
// eslint-disable-next-line react/prop-types
export function CaretDown({ size = 20 }) {
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
    // eslint-disable-next-line react/no-unknown-property
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="34" height="34" fill="url(#pattern0_36_756)"/>
    <defs>
    <pattern id="pattern0_36_756" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_36_756" transform="scale(0.00444444)"/>
    </pattern>
    <image id="image0_36_756" width="225" height="225" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
    </defs>
    </svg>
  );
}
