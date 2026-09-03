import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px',
      background: '#07090e',
      color: '#f8fafc',
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '16px' }}>404</h1>
      <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '24px' }}>
        Page Not Found
      </p>
      <Link
        href="/"
        style={{
          padding: '10px 24px',
          background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
          color: '#ffffff',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
