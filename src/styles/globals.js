export const styles = {
  app: {
    minHeight: '100vh',
    background: '#050505',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },

  navbar: {
    height: '80px',
    padding: '0 80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #1d1d1d',
  },

  logo: {
    color: '#a3ff12',
    fontSize: '28px',
    fontWeight: 'bold',
  },

  navLinks: {
    display: 'flex',
    gap: '40px',
  },

  navActions: {
    display: 'flex',
    gap: '16px',
  },

  primaryBtn: {
    background: '#a3ff12',
    color: 'black',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '40px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  secondaryBtn: {
    background: 'transparent',
    color: 'white',
    border: '1px solid #2b2b2b',
    padding: '14px 28px',
    borderRadius: '40px',
  },

  hero: {
    padding: '120px 20px',
    textAlign: 'center',
  },

  heroTitle: {
    fontSize: '90px',
    lineHeight: '1.1',
  },

  greenText: {
    color: '#a3ff12',
  },

  heroText: {
    marginTop: '24px',
    color: '#a0a0a0',
    maxWidth: '700px',
    marginInline: 'auto',
    lineHeight: '1.7',
  },

  heroButtons: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },

  badge: {
    display: 'inline-block',
    border: '1px solid #2b2b2b',
    padding: '12px 24px',
    borderRadius: '40px',
    marginBottom: '30px',
    color: '#a3ff12',
  },

  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '100px',
    paddingBottom: '120px',
  },

  statsNumber: {
    color: '#a3ff12',
    fontSize: '50px',
  },

  features: {
    padding: '100px 80px',
  },

  featuresTitle: {
    textAlign: 'center',
    fontSize: '60px',
    marginBottom: '60px',
  },

  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  },

  featureCard: {
    border: '1px solid #232323',
    padding: '40px',
    borderRadius: '24px',
    background: '#090909',
  },

  paymentPage: {
    padding: '100px 80px',
  },

  paymentWrapper: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '40px',
  },

  paymentHeaderTitle: {
    fontSize: '52px',
    marginBottom: '12px',
  },

  paymentHeaderText: {
    color: '#888',
    marginBottom: '40px',
  },

  liveCard: {
    background: 'linear-gradient(135deg, #151515, #0f0f0f)',
    border: '1px solid #2a2a2a',
    borderRadius: '24px',
    padding: '35px',
    marginBottom: '30px',
    minHeight: '220px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  cardNumber: {
    fontSize: '34px',
    letterSpacing: '4px',
    margin: '30px 0',
  },

  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  paymentForm: {
    background: '#0c0c0c',
    border: '1px solid #1f1f1f',
    padding: '35px',
    borderRadius: '24px',
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '24px',
  },

  input: {
    background: '#111',
    border: '1px solid #232323',
    color: 'white',
    padding: '16px',
    borderRadius: '14px',
    outline: 'none',
    fontSize: '16px',
  },

  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },

  payBtn: {
    width: '100%',
    padding: '18px',
    borderRadius: '16px',
    border: 'none',
    background: '#a3ff12',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },

  billingSummary: {
    background: '#0c0c0c',
    border: '1px solid #1f1f1f',
    borderRadius: '24px',
    padding: '30px',
    position: 'sticky',
    top: '100px',
    height: 'fit-content',
  },

  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '24px',
  },

  total: {
    color: '#a3ff12',
    fontSize: '20px',
    fontWeight: 'bold',
  },

  footer: {
    borderTop: '1px solid #1d1d1d',
    padding: '30px',
    textAlign: 'center',
    color: '#777',
  },
}