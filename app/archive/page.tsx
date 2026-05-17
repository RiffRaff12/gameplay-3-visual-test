import Link from 'next/link'

type Session = {
  date: string
  sport: 'Football' | 'Futsal'
  location: string
  time: string
  players: number
  maxPlayers: number
  pricePerPlayer: number
}

const maySessions: Session[] = [
  { date: 'Tue 12', sport: 'Football', location: 'Goals · Wandsworth',       time: '8:00 – 9:00 PM', players: 8, maxPlayers: 8, pricePerPlayer: 7 },
  { date: 'Tue 5',  sport: 'Football', location: 'Goals · Wandsworth',       time: '8:00 – 9:00 PM', players: 7, maxPlayers: 8, pricePerPlayer: 5 },
  { date: 'Fri 1',  sport: 'Futsal',   location: 'PlayFootball · Battersea', time: '7:00 – 8:00 PM', players: 6, maxPlayers: 6, pricePerPlayer: 6 },
]

const aprilSessions: Session[] = [
  { date: 'Tue 28', sport: 'Football', location: 'Goals · Wandsworth',       time: '8:00 – 9:00 PM', players: 8, maxPlayers: 8, pricePerPlayer: 7 },
  { date: 'Fri 24', sport: 'Futsal',   location: 'PlayFootball · Battersea', time: '7:00 – 8:00 PM', players: 5, maxPlayers: 6, pricePerPlayer: 6 },
  { date: 'Tue 21', sport: 'Football', location: 'Goals · Wandsworth',       time: '8:00 – 9:00 PM', players: 7, maxPlayers: 8, pricePerPlayer: 7 },
  { date: 'Tue 14', sport: 'Football', location: 'Goals · Wandsworth',       time: '8:00 – 9:00 PM', players: 8, maxPlayers: 8, pricePerPlayer: 7 },
  { date: 'Fri 3',  sport: 'Futsal',   location: 'PlayFootball · Battersea', time: '7:00 – 8:00 PM', players: 6, maxPlayers: 6, pricePerPlayer: 6 },
]

function SessionCard({ session }: { session: Session }) {
  const full = session.players === session.maxPlayers
  return (
    <button className="session-card">
      <div className="session-card-top">
        <div className="flex flex-col gap-0.5">
          <span className="text-label-md">{session.date}</span>
          <div className="session-card-meta">
            <span className="text-meta">{session.sport}</span>
            <span className="dot-separator" />
            <span className="text-meta">{session.location}</span>
          </div>
          <span className="text-label-sm">{session.time}</span>
        </div>
        <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
          <span className="text-stat-md">
            {session.players}<span className="text-stat-md--dim">/{session.maxPlayers}</span>
          </span>
          {full
            ? <span className="text-paid">Paid</span>
            : <span className="text-meta">£{session.pricePerPlayer}/player</span>
          }
        </div>
      </div>
    </button>
  )
}

export default function ArchivePage() {
  return (
    <div className="app-viewport h-screen bg-zinc-50">

      {/* ── Scrollable body ── */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col">

        {/* ── Nav Header ── */}
        <header className="nav-header">
          <div className="nav-logo-row">
            <span className="text-label-md">Archive</span>
          </div>
          <div className="nav-actions">
            <button className="btn-icon">
              {/* Sliders / filter icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="20" y2="12" />
                <line x1="12" y1="18" x2="20" y2="18" />
                <circle cx="4" cy="6" r="2" fill="currentColor" stroke="none" />
                <circle cx="8" cy="12" r="2" fill="currentColor" stroke="none" />
                <circle cx="12" cy="18" r="2" fill="currentColor" stroke="none" />
              </svg>
            </button>
            <div className="avatar-chip avatar-chip--md avatar-chip--blue">TA</div>
          </div>
        </header>

        {/* ── Summary stat ── */}
        <div className="section-header-row--lg">
          <h1 className="text-section-title">
            8
            <span className="font-normal text-zinc-400 ml-1.5" style={{ fontSize: '15px', letterSpacing: '-0.075px' }}>sessions</span>
          </h1>
        </div>

        {/* ── May group ── */}
        <div className="section-header-row">
          <h2 className="text-section-title">May</h2>
          <span className="text-meta">3 sessions</span>
        </div>
        <div className="session-card-list">
          {maySessions.map((s, i) => <SessionCard key={i} session={s} />)}
        </div>

        {/* ── April group ── */}
        <div className="section-header-row">
          <h2 className="text-section-title">April</h2>
          <span className="text-meta">5 sessions</span>
        </div>
        <div className="session-card-list pb-5">
          {aprilSessions.map((s, i) => <SessionCard key={i} session={s} />)}
        </div>

      </div>

      {/* ── Bottom Tab Bar ── */}
      <nav className="tab-bar">
        <Link href="/" className="tab-bar-item tab-bar-item--inactive">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-tab">Sessions</span>
        </Link>

        <Link href="/archive" className="tab-bar-item tab-bar-item--active">
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
