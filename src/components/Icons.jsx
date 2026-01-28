export const Icon = {
    Home: (props) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" />
        </svg>
    ),
    Office: (props) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="3" y="3" width="7" height="18" rx="1" /><rect x="14" y="7" width="7" height="14" rx="1" /><path d="M6.5 7.5h0" /><path d="M6.5 11.5h0" /><path d="M6.5 15.5h0" /><path d="M17.5 11.5h0" /><path d="M17.5 15.5h0" />
        </svg>
    ),
    Healthcare: (props) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M12 7v10M7 12h10" />
        </svg>
    ),
    School: (props) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5.5L12 21l6-3.5V12" />
        </svg>
    ),
    Check: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M20 6L9 17l-5-5" />
        </svg>
    ),
    Phone: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.19a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    Mail: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M4 4h16v16H4z" fill="none" /><path d="M22 6l-10 7L2 6" />
        </svg>
    ),
    MapPin: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
    ),
    Star: (props) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.211l8.2-1.193z" />
        </svg>
    ),
    Quote: (props) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M7 7h6v6H7z" /><path d="M17 7h6v6h-6z" transform="translate(-4 4)" />
        </svg>
    ),
    ArrowUp: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
        </svg>
    ),
    Sun: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
    ),
    Moon: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    ),
    WhatsApp: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 .02 5.36.02 11.98c0 2.11.55 4.18 1.59 6.01L0 24l6.16-1.6a11.97 11.97 0 0 0 5.85 1.5h.01c6.62 0 11.98-5.36 11.98-11.98a11.94 11.94 0 0 0-3.48-8.44ZM12.01 22c-1.9 0-3.76-.5-5.38-1.45l-.39-.23-3.66.95.98-3.57-.25-.37A9.91 9.91 0 0 1 2.03 12C2.03 6.47 6.48 2.02 12 2.02S21.98 6.47 21.98 12 17.54 22 12.01 22Zm5.54-7.33c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.67.15-.2.29-.77.95-.95 1.14-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.29-.02-.45.13-.6.13-.13.3-.35.44-.53.15-.18.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
    ),
    Calendar: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    ),
    TrendingUp: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M23 7l-7 7-5-5-7 7" />
            <path d="M17 7h6v6" />
        </svg>
    ),
    Trophy: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M8 21h8M12 17a6 6 0 0 0 6-6V3H6v8a6 6 0 0 0 6 6z" />
            <path d="M4 5h2a2 2 0 0 1 2 2v0a4 4 0 0 1-4 4v-6zM20 5h-2a2 2 0 0 0-2 2v0a4 4 0 0 0 4 4v-6z" />
        </svg>
    ),
    Info: (props) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
        </svg>
    ),
    Layers: (props) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 2l10 6-10 6L2 8l10-6z" /><path d="M2 14l10 6 10-6" />
        </svg>
    ),
    Folder: (props) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M3 7h6l2 2h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
    ),
    Instagram: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    ),
}
