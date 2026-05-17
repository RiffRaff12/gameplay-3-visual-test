import Link from 'next/link'

type Player = {
  initials: string
  name: string
  color: 'blue' | 'yellow' | 'pink' | 'red' | 'zinc'
  status: 'paid' | 'pending' | 'free'
}

const players: Player[] = [
  { initials: 'TA', name: 'Tom A.',   color: 'blue',   status: 'paid' },
  { initials: 'AN', name: 'Alex N.',  color: 'yellow', status: 'paid' },
  { initials: 'WH', name: 'Will H.',  color: 'red',    status: 'paid' },
  { initials: 'JR', name: 'Jake R.',  color: 'pink',   status: 'pending' },
  { initials: 'MB', name: 'Mark B.',  color: 'zinc',   status: 'pending' },
  { initials: 'RS', name: 'Ryan S.',  color: 'pink',   status: 'pending' },
  { initials: 'LC', name: 'Luke C.',  color: 'zinc',   status: 'free' },
]

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]
}

export default function SessionDetailPage() {
  const paid    = players.filter(p => p.status === 'paid').length
  const pending = players.filter(p => p.status === 'pending').length
  const free    = players.filter(p => p.status === 'free').length

  return (
    <div className="app-viewport h-screen bg-zinc-50">
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col">

        {/* ── Nav Header ── */}
        <header className="nav-header">
          <Link href="/" className="nav-back-btn">
            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 1L1 7.5L8 14" />
            </svg>
            Sessions
          </Link>
          <div className="flex items-center" style={{ gap: 'var(--primitive-space-1)' }}>
            <button className="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </button>
            <button className="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5"  cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
              </svg>
            </button>
          </div>
        </header>

        {/* ── Session Hero ── */}
        <div className="session-hero">
          <span className="session-status-pill">Upcoming</span>
          <h1 className="text-session-title">Tuesday 5-a-side</h1>
          <div className="session-hero-meta">
            <div className="session-hero-meta-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Tue 19 May</span>
            </div>
            <div className="session-hero-meta-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>8:00 PM · 1 hr</span>
            </div>
            <div className="session-hero-meta-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Goals Wandsworth · Pitch 3</span>
            </div>
          </div>
        </div>

        {/* ── Stat Cards ── */}
        <div className="stat-card-grid">
          <div className="stat-card">
            <span className="stat-card-label">Confirmed</span>
            <span className="stat-card-value">
              7<span className="text-stat-md--dim">/8</span>
            </span>
            <span className="stat-card-sub">1 spot left</span>
          </div>

          <div className="stat-card">
            <span className="stat-card-label">Collected</span>
            <span className="stat-card-value">£21</span>
            <span className="stat-card-sub">of £42</span>
          </div>

          <div className="stat-card">
            <span className="stat-card-label">Breakdown</span>
            <div className="flex flex-col" style={{ gap: 'var(--primitive-space-1)', marginTop: 'var(--primitive-space-1)' }}>
              <div className="stat-card-breakdown-row">
                <span className="stat-card-breakdown-dot stat-card-breakdown-dot--paid" />
                <span className="stat-card-sub">{paid} paid</span>
              </div>
              <div className="stat-card-breakdown-row">
                <span className="stat-card-breakdown-dot stat-card-breakdown-dot--pending" />
                <span className="stat-card-sub">{pending} pending</span>
              </div>
              <div className="stat-card-breakdown-row">
                <span className="stat-card-breakdown-dot stat-card-breakdown-dot--free" />
                <span className="stat-card-sub">{free} free</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Action Buttons ── */}
        <div className="action-row">
          <button className="action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            Share
          </button>
          <button className="action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy
          </button>
          <button className="action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Edit
          </button>
        </div>

        {/* ── Roster ── */}
        <div className="section-header-row" style={{ marginTop: 'var(--primitive-space-3)' }}>
          <h2 className="text-section-title">Roster</h2>
          <button className="btn-pill bg-zinc-100">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add
          </button>
        </div>

        <div className="session-card-list pb-5">
          {players.map((player) => (
            <div key={player.initials} className="roster-row">
              <div className="flex items-center" style={{ gap: 'var(--primitive-space-3)' }}>
                <div className={`avatar-chip avatar-chip--lg avatar-chip--${player.color}`}>
                  {player.initials}
                </div>
                <span className="text-body font-medium">{player.name}</span>
              </div>
              <div className="flex items-center" style={{ gap: 'var(--primitive-space-2)' }}>
                <span className={`status-badge status-badge--${player.status}`}>
                  {player.status.charAt(0).toUpperCase() + player.status.slice(1)}
                </span>
                <button className="btn-icon" style={{ color: 'var(--color-text-muted)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5"  r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Bottom Tab Bar ── */}
      <nav className="tab-bar">
        <Link href="/" className="tab-bar-item tab-bar-item--active">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-tab">Sessions</span>
        </Link>
        <Link href="/archive" className="tab-bar-item tab-bar-item--inactive">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-tab">Archive</span>
        </Link>
        <Link href="/community" className="tab-bar-item tab-bar-item--inactive">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="text-tab">Community</span>
        </Link>
      </nav>
    </div>
  )
}
