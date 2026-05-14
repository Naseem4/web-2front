export const styles = {
  body: {
    backgroundColor: '#0B0E0D',
  },

  app: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '-0.5px',
  },

  heroWrapper: {
    position: 'absolute',
    width: '740px',
    left: 0,
    top: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
  },

  hero: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },

  header: {
    position: 'absolute',
    top: '165px',
    left: '-40px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
    cursor: 'pointer',
  },

  logo: {
    width: '220px',
    height: 'auto',
  },

  title: {
    margin: 0,
    marginLeft: '-70px',
    fontSize: '35px',
    color: '#FAFAFA',
  },

  greenText: {
    color: '#86D411',
  },

  section: {
    position: 'absolute',
    top: '280px',
    left: '40px',
    bottom: '30px',
    maxWidth: '500px',
    zIndex: 2,
  },

  sectionTitle: {
    color: '#FAFAFA',
    fontSize: '42px',
    marginBottom: '30px',
  },

  sectionText: {
    color: '#87928C',
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '50px',
  },

  statusContainer: {
    marginTop: '15px',
    display: 'flex',
    gap: '60px',
  },

  statusText: {
    margin: 0,
    color: '#86D411',
    fontSize: '25px',
  },

  statusLabel: {
    color: '#87928C',
    fontSize: '15px',
    marginTop: 0,
  },

  statsNumber: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#FAFAFA',
  },

  authContainer: {
    position: 'absolute',
    left: '740px',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 40px',
  },

  authTitle: {
    color: '#FAFAFA',
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '8px',
  },

  subtitle: {
    color: '#87928C',
    fontSize: '16px',
    marginBottom: '32px',
  },

  googleBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#86D411',
    color: '#0B0E0D',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    marginBottom: '25px',
  },

  googleIcon: {
    width: '20px',
    height: '20px',
    marginRight: '12px',
    fill: 'currentColor',
    color: '#000',
  },

  signinText: {
    marginTop: '24px',
    color: '#87928C',
    fontSize: '14px',
  },

  termsText: {
    marginTop: '10px',
    color: '#87928C',
  },

  linkText: {
    color: '#86D411',
    cursor: 'pointer',
    fontWeight: '600',
  },
}