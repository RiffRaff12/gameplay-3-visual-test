import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="app-viewport h-screen bg-zinc-50">

      {/* ── Scrollable body (nav header sticks inside here) ── */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col">

        {/* ── Nav Header ── */}
        <header className="nav-header">
          <div className="nav-logo-row">
            <button className="nav-logo-btn justify-center bg-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </button>
            <span className="text-label-md">Gameplay</span>
          </div>

          <div className="nav-actions">
            <button className="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
            <button className="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <div className="avatar-chip avatar-chip--md avatar-chip--blue">TA</div>
          </div>
        </header>

        {/* ── Upcoming sessions ── */}
        <div className="section-header-row--lg">
          <h2 className="text-section-title flex items-baseline gap-1.5">
            Upcoming
            <span className="font-normal text-zinc-400" style={{ fontSize: '15px', letterSpacing: '-0.075px' }}>3</span>
          </h2>
          <button className="btn-pill bg-zinc-100">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New
          </button>
        </div>

        <div className="session-card-list">

          {/* ── Session 1: TUE 19 MAY ── */}
          <button className="session-card">
            <div className="session-card-top">
              <div className="flex flex-col gap-0.5">
                <span className="text-label-sm">TUE 19 MAY, 8:00 PM</span>
                <span className="text-label-md">Tuesday 5-a-side</span>
                <div className="session-card-meta">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-zinc-400 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-meta">Goals · Wandsworth</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                <span className="text-stat-md">
                  7<span className="text-stat-md--dim">/8</span>
                </span>
                <span className="text-meta">£21 of £42</span>
              </div>
            </div>

            <div className="session-card-divider">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="progress-segment progress-segment--paid" />
              ))}
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="progress-segment progress-segment--unpaid" />
              ))}
            </div>

            <div className="flex items-center gap-1">
              <div className="avatar-chip avatar-chip--md avatar-chip--blue">TA</div>
              <div className="avatar-chip avatar-chip--md avatar-chip--yellow">AN</div>
              <div className="avatar-chip avatar-chip--md avatar-chip--pink">JR</div>
              <div className="avatar-chip avatar-chip--md avatar-chip--red">WH</div>
              <div className="avatar-chip avatar-chip--md avatar-chip--zinc">MB</div>
              <div className="avatar-chip avatar-chip--md avatar-chip--zinc">+2</div>
            </div>
          </button>

          {/* ── Session 2: TUE 26 MAY ── */}
          <button className="session-card">
            <div className="session-card-top">
              <div className="flex flex-col gap-0.5">
                <span className="text-label-sm">TUE 26 MAY, 8:00 PM</span>
                <span className="text-label-md">Tuesday 5-a-side</span>
                <div className="session-card-meta">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-zinc-400 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-meta">Goals · Wandsworth</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                <span className="text-stat-md">
                  4<span className="text-stat-md--dim">/8</span>
                </span>
                <span className="text-meta">£42 pitch</span>
              </div>
            </div>

            <div className="session-card-divider">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="progress-segment progress-segment--unpaid" />
              ))}
            </div>

            <div className="flex items-center gap-1">
              <div className="avatar-chip avatar-chip--md avatar-chip--blue">TA</div>
              <div className="avatar-chip avatar-chip--md avatar-chip--yellow">AN</div>
              <div className="avatar-chip avatar-chip--md avatar-chip--red">WH</div>
              <div className="avatar-chip avatar-chip--md avatar-chip--pink">RS</div>
            </div>
          </button>

          {/* ── Session 3: TUE 2 JUN ── */}
          <button className="session-card">
            <div className="session-card-top">
              <div className="flex flex-col gap-0.5">
                <span className="text-label-sm">TUE 2 JUN, 8:00 PM</span>
                <span className="text-label-md">Tuesday 5-a-side</span>
                <div className="session-card-meta">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-zinc-400 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-meta">Goals · Wandsworth</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                <span className="text-stat-md text-stat-md--dim">
                  0/8
                </span>
                <span className="text-meta">£42 pitch</span>
              </div>
            </div>

            <div className="session-card-divider">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="progress-segment progress-segment--unpaid" />
              ))}
            </div>

            <span className="text-label-sm">No players yet</span>
          </button>

        </div>

        {/* ── Recent sessions ── */}
        <div className="section-header-row">
          <h2 className="text-section-title">Recent</h2>
          <button className="btn-pill bg-zinc-100">See all</button>
        </div>

        <div className="session-card-list pb-5">

          {/* Recent 1: Tue 12 May — not fully paid */}
          <button className="session-card">
            <div className="session-card-top">
              <div className="flex flex-col gap-0.5">
                <span className="text-label-md">Tue 12 May</span>
                <span className="text-meta">Goals · Wandsworth · 8 players</span>
              </div>
              <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                <span className="text-stat-md">£49</span>
                <span className="text-meta">of £56</span>
              </div>
            </div>
          </button>

          {/* Recent 2: Tue 5 May — fully paid */}
          <button className="session-card">
            <div className="session-card-top">
              <div className="flex flex-col gap-0.5">
                <span className="text-label-md">Tue 5 May</span>
                <span className="text-meta">Goals · Wandsworth · 7 players</span>
              </div>
              <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                <span className="text-stat-md">£35</span>
                <span className="text-paid">Paid</span>
              </div>
            </div>
          </button>

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
