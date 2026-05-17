import Link from 'next/link'

type AvatarColor = 'blue' | 'yellow' | 'pink' | 'red' | 'zinc'
type Sport = 'Football' | 'Futsal' | 'Both'

type Player = {
  initials: string
  name: string
  phone: string
  color: AvatarColor
  sport?: Sport
}

const players: Player[] = [
  { initials: 'TA', name: 'Tom Ashworth',   phone: '07700 900 123', color: 'blue',   sport: 'Football' },
  { initials: 'AN', name: 'Aleks Nowak',    phone: '07700 900 456', color: 'yellow', sport: 'Futsal'   },
  { initials: 'JR', name: 'Jamal Reid',     phone: '07700 900 789', color: 'pink',   sport: 'Both'     },
  { initials: 'WH', name: 'Will Hutchings', phone: '07911 654 321', color: 'red'     },
  { initials: 'MB', name: 'Marcus Boateng', phone: '07911 654 987', color: 'zinc'    },
  { initials: 'SW', name: 'Sam Whitaker',   phone: '07700 100 200', color: 'blue'    },
  { initials: 'JF', name: 'Joe Ferreira',   phone: '07984 112 233', color: 'yellow'  },
  { initials: 'RS', name: 'Rav Singh',      phone: '07984 445 566', color: 'pink'    },
  { initials: 'EL', name: 'Eddie Liang',    phone: '07700 998 877', color: 'red'     },
  { initials: 'KM', name: 'Kofi Mensah',    phone: '07911 223 344', color: 'zinc'    },
  { initials: 'LM', name: 'Leo Marsden',    phone: '07984 778 899', color: 'blue'    },
  { initials: 'DO', name: "Danny O'Brien",  phone: '07700 556 677', color: 'yellow'  },
  { initials: 'AH', name: 'Archie Holt',    phone: '07911 887 766', color: 'pink'    },
]

export default function CommunityPage() {
  return (
    <div className="app-viewport h-screen bg-zinc-50">

      {/* ── Scrollable body ── */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col">

        {/* ── Nav Header ── */}
        <header className="nav-header">
          <div className="nav-logo-row">
            <span className="text-label-md">Community</span>
          </div>
          <div className="nav-actions">
            <button className="btn-pill bg-zinc-100">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add player
            </button>
          </div>
        </header>

        {/* ── Section header ── */}
        <div className="section-header-row--lg">
          <h2 className="text-section-title flex items-baseline gap-1.5">
            All players
            <span className="font-normal text-zinc-400" style={{ fontSize: '15px', letterSpacing: '-0.075px' }}>13</span>
          </h2>
        </div>

        {/* ── Breakdown stats: Regular · Occasional · New ── */}
        <div className="flex items-center px-5 pb-3" style={{ gap: '8px' }}>
          <span className="text-meta">6 Regular</span>
          <span className="dot-separator" />
          <span className="text-meta">4 Occasional</span>
          <span className="dot-separator" />
          <span className="text-meta">3 New</span>
        </div>

        {/* ── Player list ── */}
        <div className="session-card-list pb-5">
          {players.map((player) => (
            <button key={player.initials} className="session-card">
              <div className="flex items-center" style={{ gap: '12px' }}>

                <div className={`avatar-chip avatar-chip--lg avatar-chip--${player.color}`}>
                  {player.initials}
                </div>

                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="text-label-md">{player.name}</span>
                  <span className="text-meta">{player.phone}</span>
                </div>

                {player.sport && (
                  <span className="text-label-sm flex-shrink-0">{player.sport}</span>
                )}

                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-zinc-300 flex-shrink-0">
                  <polyline points="9 18 15 12 9 6" />
                </svg>

              </div>
            </button>
          ))}
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

        <Link href="/archive" className="tab-bar-item tab-bar-item--inactive">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-tab">Archive</span>
        </Link>

        <Link href="/community" className="tab-bar-item tab-bar-item--active">
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
