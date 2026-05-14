export const styles = {
  global: {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    background: '#070808',
    fontFamily:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  page: {
    minHeight: '100vh',
    background:
      'radial-gradient(circle at bottom, rgba(163,255,72,0.12), transparent 42%), radial-gradient(circle at 80% 30%, rgba(163,255,72,0.055), transparent 28%), #070808',
    color: '#fff',
    padding: '34px 20px 110px',
  },

  content: {
    maxWidth: '1180px',
    margin: '0 auto',
  },

  stepsBar: {
    maxWidth: '760px',
    margin: '0 auto 38px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
  },

  step: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'rgba(255,255,255,0.36)',
    fontSize: '14px',
    fontWeight: 700,
    position: 'relative',
  },

  stepCircle: {
    width: '30px',
    height: '30px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.22)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
  },

  stepActive: {
    color: '#fff',
  },

  stepCircleActive: {
    background: '#c8ff3e',
    color: '#070808',
    borderColor: '#c8ff3e',
  },

  stepLine: {
    flex: 1,
    height: '2px',
    borderRadius: '999px',
    background: 'rgba(255,255,255,0.12)',
  },

  stepLineDone: {
    background: '#c8ff3e',
  },

  pageTitle: {
    fontSize: 'clamp(42px, 5vw, 72px)',
    lineHeight: 0.95,
    fontWeight: 900,
    letterSpacing: '-2px',
    margin: '0 0 20px',
    textAlign: 'center',
  },

  pageSub: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.62)',
    margin: '0 auto 28px',
    fontSize: '18px',
    maxWidth: '620px',
  },

  goalSelector: {
    maxWidth: '920px',
    margin: '0 auto 44px',
    padding: '20px',
    borderRadius: '28px',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.035), transparent), rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.085)',
  },

  goalOptions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
  },

  goalChip: {
    textAlign: 'left',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.035)',
    color: '#fff',
    borderRadius: '20px',
    padding: '16px',
    cursor: 'pointer',
  },

  goalChipActive: {
    borderColor: '#c8ff3e',
    background: 'rgba(200,255,62,0.08)',
    boxShadow: '0 0 28px rgba(200,255,62,0.08)',
  },

  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '34px',
  },

  offerCard: {
    minHeight: '560px',
    position: 'relative',
    borderRadius: '28px',
    padding: '34px',
    cursor: 'pointer',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.035), transparent), rgba(255,255,255,0.035)',
    border: '1px solid rgba(255,255,255,0.085)',
  },

  offerCardActive: {
    border: '2px solid #c8ff3e',
    boxShadow: '0 0 44px rgba(200,255,62,0.14)',
  },

  bestBadge: {
    position: 'absolute',
    top: '-1px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#c8ff3e',
    color: '#070808',
    padding: '10px 22px',
    borderRadius: '0 0 999px 999px',
    fontSize: '12px',
    fontWeight: 900,
  },

  chooseBtn: {
    position: 'absolute',
    bottom: '28px',
    left: '34px',
    right: '34px',
    height: '58px',
    borderRadius: '18px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 900,
    background: 'rgba(255,255,255,0.065)',
    color: '#fff',
  },

  chooseBtnSelected: {
    background: '#c8ff3e',
    color: '#070808',
  },

  continueBtn: {
    background: '#c8ff3e',
    color: '#070808',
    border: 'none',
    height: '58px',
    padding: '0 38px',
    borderRadius: '18px',
    fontSize: '18px',
    fontWeight: 900,
    cursor: 'pointer',
  },

  continueBtnDisabled: {
    opacity: 0.38,
    cursor: 'not-allowed',
  },

  fadeIn: {
    animation: 'fadeIn 0.28s ease',
  },
}