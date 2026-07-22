const githubUrl = "https://github.com/AitorGallardo/tabknight";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="TabKnight home">
      <img src="/tabknight-icon.png" alt="" width="42" height="42" />
      <span>
        Tab<span>Knight</span>
      </span>
    </a>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return <kbd>{children}</kbd>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="shell nav-shell">
          <Brand />
          <nav aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#privacy">Privacy</a>
            <a href="#open-source">Open source</a>
          </nav>
          <a className="nav-cta" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
        </div>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> Open-source Chrome extension · v0.28.0
          </div>
          <h1 id="hero-title">
            Every tab.
            <br />
            <span>One shortcut.</span>
          </h1>
          <p>
            Search, preview, and switch across every Chrome window—without leaving
            the page you&apos;re on.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#install">
              Get TabKnight <Arrow />
            </a>
            <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
              View source
            </a>
          </div>
          <div className="shortcut-line">
            <span>Open anywhere</span>
            <span className="key-combo"><Key>⌘</Key><Key>K</Key></span>
            <span className="platform-note">macOS · Ctrl Shift K on Windows/Linux</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="TabKnight command palette preview">
          <div className="blue-orbit blue-orbit-one" />
          <div className="blue-orbit blue-orbit-two" />
          <div className="browser-frame">
            <div className="browser-topbar" aria-hidden="true">
              <div className="traffic-lights"><i /><i /><i /></div>
              <div className="address-bar">youtube.com/watch</div>
              <div className="browser-dots">•••</div>
            </div>
            <img
              src="/product/overlay.jpg"
              alt="TabKnight overlay showing a searchable tab list beside a large live preview"
              width="1600"
              height="1004"
            />
          </div>
          <div className="floating-chip chip-top">
            <span>●</span> Captured just now
          </div>
          <div className="floating-chip chip-bottom">
            <span>⌘</span> Switch in milliseconds
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Product principles">
        <div className="shell trust-grid">
          <div><strong>Local-first</strong><span>Your data stays in Chrome</span></div>
          <div><strong>Open source</strong><span>MIT licensed on GitHub</span></div>
          <div><strong>No accounts</strong><span>Install and start switching</span></div>
          <div><strong>No telemetry</strong><span>Zero tracking, by design</span></div>
        </div>
      </section>

      <section className="problem shell section-pad">
        <div className="section-kicker">Less tab hunting. More flow.</div>
        <div className="problem-grid">
          <h2>Chrome tabs multiply.<br />Your attention shouldn&apos;t.</h2>
          <div>
            <p className="lead">
              TabKnight turns the tab strip into a fast command surface. One shortcut
              brings every tab, in every window, into focus.
            </p>
            <p>
              Fuzzy search by title or URL, arrow through live previews, then press
              Enter. No tab archaeology. No context switch. No mouse required.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="features shell section-pad">
        <article className="feature feature-hero">
          <div className="feature-copy">
            <span className="feature-number">01 / FIND</span>
            <h2>See where you&apos;re going before you go.</h2>
            <p>
              Search every open tab across every window. TabKnight shows the best
              preview available—instantly—and upgrades it in place as richer data arrives.
            </p>
            <ul className="clean-list">
              <li>Fuzzy search across titles and URLs</li>
              <li>Live thumbnails with freshness indicators</li>
              <li>Recent and most-visited tabs surfaced first</li>
            </ul>
          </div>
          <div className="media-card">
            <img
              src="/product/demo.gif"
              alt="Animated TabKnight demo showing search, preview and tab switching"
              width="900"
              height="565"
            />
          </div>
        </article>

        <div className="feature-pair">
          <article className="feature-small audio-card">
            <span className="feature-number">02 / CONTROL</span>
            <h3>Your audio tabs, on command.</h3>
            <p>
              Press Tab to reveal every tab playing sound. Pause, play, mute, or jump
              there without breaking focus.
            </p>
            <div className="audio-demo" aria-hidden="true">
              <div className="audio-head"><span>Audio mode</span><span>♪ 3 playing</span></div>
              <div className="audio-row selected"><i className="audio-icon">▶</i><span>Deep focus mix</span><b className="equalizer"><i /><i /><i /><i /></b></div>
              <div className="audio-row"><i className="audio-icon">◼</i><span>Design review</span><em>muted</em></div>
              <div className="audio-keys"><Key>Space</Key> play / pause <Key>←</Key><Key>→</Key> mute</div>
            </div>
          </article>

          <article className="feature-small sessions-card">
            <span className="feature-number">03 / RETURN</span>
            <h3>Save the whole train of thought.</h3>
            <p>
              Turn a working set into a bookmark-backed session, close it cleanly,
              and restore every tab when you&apos;re ready.
            </p>
            <div className="mini-shot">
              <img
                src="/product/popup.png"
                alt="TabKnight popup for searching and saving a browser session"
                width="1280"
                height="800"
              />
            </div>
          </article>
        </div>
      </section>

      <section id="privacy" className="privacy-section section-pad">
        <div className="shell privacy-grid">
          <div className="privacy-mark" aria-hidden="true">
            <img src="/tabknight-icon.png" alt="" width="260" height="260" />
            <div className="privacy-ring" />
          </div>
          <div className="privacy-copy">
            <div className="section-kicker">Private by architecture</div>
            <h2>Your tabs are your business.</h2>
            <p className="lead">
              No servers. No accounts. No analytics. Tab titles, URLs, snippets, and
              preview thumbnails stay on your device in Chrome&apos;s local storage.
            </p>
            <div className="privacy-stats">
              <div><strong>0</strong><span>trackers</span></div>
              <div><strong>0</strong><span>accounts</span></div>
              <div><strong>1 click</strong><span>to clear preview data</span></div>
            </div>
            <a className="text-link" href={`${githubUrl}/blob/main/PRIVACY.md`} target="_blank" rel="noreferrer">
              Read the plain-English privacy policy <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section id="open-source" className="open-source shell section-pad">
        <div className="open-source-head">
          <div>
            <div className="section-kicker">Built in the open</div>
            <h2>Inspect it. Improve it. Make it yours.</h2>
          </div>
          <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
            Browse the repository <Arrow />
          </a>
        </div>
        <div className="source-grid">
          <div className="source-card"><span>License</span><strong>MIT</strong><p>Use, study, modify, and share.</p></div>
          <div className="source-card"><span>Built with</span><strong>React + TypeScript</strong><p>A clean, typed extension core.</p></div>
          <div className="source-card"><span>Platform</span><strong>Manifest V3</strong><p>Modern Chrome extension architecture.</p></div>
        </div>
      </section>

      <section id="install" className="install-section">
        <div className="shell install-grid">
          <div>
            <div className="section-kicker">Install from source</div>
            <h2>Your command bar for tabs is three steps away.</h2>
            <p>
              TabKnight is currently available as an open-source build. Grab the code,
              build it with Bun, and load the generated folder into Chrome.
            </p>
            <a className="button button-primary" href={`${githubUrl}#getting-started`} target="_blank" rel="noreferrer">
              Open install guide <Arrow />
            </a>
          </div>
          <ol className="install-steps">
            <li><span>1</span><div><strong>Clone the repository</strong><code>git clone github.com/AitorGallardo/tabknight</code></div></li>
            <li><span>2</span><div><strong>Build TabKnight</strong><code>bun install &amp;&amp; bun run build</code></div></li>
            <li><span>3</span><div><strong>Load the extension</strong><p>Chrome → Extensions → Load unpacked → choose <code>dist/</code></p></div></li>
          </ol>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div>
            <Brand />
            <p>Every tab. One shortcut.</p>
          </div>
          <div className="footer-links">
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`${githubUrl}/issues`} target="_blank" rel="noreferrer">Issues</a>
            <a href={`${githubUrl}/blob/main/PRIVACY.md`} target="_blank" rel="noreferrer">Privacy</a>
            <a href={`${githubUrl}/blob/main/LICENSE`} target="_blank" rel="noreferrer">MIT License</a>
          </div>
          <p className="copyright">© 2025 Aitor Gallardo</p>
        </div>
      </footer>
    </main>
  );
}
