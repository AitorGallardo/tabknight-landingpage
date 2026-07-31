import {
  ArrowUpRight,
  AtSign,
  Code2,
  PanelRightOpen,
  Search,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";

const githubUrl = "https://github.com/AitorGallardo/tabknight";
const installUrl = `${githubUrl}#getting-started`;

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="TabKnight home">
      <img src="/tabknight-icon.png" alt="" width="40" height="40" />
      <span>TabKnight</span>
    </a>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return <kbd>{children}</kbd>;
}

function ExternalArrow() {
  return <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />;
}

export default function Home() {
  return (
    <main id="top" className="current-v3">
      <header className="site-header">
        <div className="shell nav-shell">
          <Brand />
          <nav aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#privacy">Privacy</a>
            <a href="#open-source">Open source</a>
          </nav>
          <a className="nav-cta" href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" size={16} />
            GitHub
          </a>
        </div>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> Open source · Chrome · v0.34.3
          </div>
          <h1 id="hero-title">
            Every tab.
            <br />
            <span>One shortcut.</span>
          </h1>
          <p>
            Search tabs, bookmarks, history, and the web from one private command
            surface—without leaving the page you&apos;re on.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={installUrl} target="_blank" rel="noreferrer">
              <SiGooglechrome aria-hidden="true" size={17} />
              Install for Chrome
            </a>
            <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" size={18} />
              View source
            </a>
          </div>
          <div className="shortcut-line">
            <span>Open anywhere</span>
            <span className="key-combo"><Key>⌘</Key><Key>K</Key></span>
            <span className="platform-note">Ctrl Shift K on Windows / Linux</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Current TabKnight command palette">
          <div className="product-frame">
            <video autoPlay muted loop playsInline poster="/product/overlay.png" aria-label="TabKnight searching tabs and running browser commands">
              <source src="/product/hero-demo-hd.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Product principles">
        <div className="shell trust-composition">
          <img
            className="principles-illustration"
            src="/illustrations/principles-signal.png"
            alt="A quiet signal path connecting local browsing, open code, account-free access, and zero telemetry"
            width="2172"
            height="724"
          />
          <div className="trust-grid">
            <div><strong>Local-first</strong><span>Your data stays in Chrome</span></div>
            <div><strong>Open source</strong><span>MIT licensed on GitHub</span></div>
            <div><strong>No account</strong><span>Install and start switching</span></div>
            <div><strong>No telemetry</strong><span>Zero tracking by design</span></div>
          </div>
        </div>
      </section>

      <section className="problem shell section-pad">
        <div className="section-kicker">Less tab hunting. More flow.</div>
        <div className="problem-grid">
          <h2>Chrome tabs multiply.<br />Your attention shouldn&apos;t.</h2>
          <div>
            <p className="lead">
              TabKnight turns scattered browser state into one fast, searchable
              command surface.
            </p>
            <p>
              Find an open tab, recover a page from history, launch a bookmark,
              open a URL, or search the web—then act without reaching for the mouse.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="features shell section-pad">
        <article className="feature feature-hero">
          <div className="feature-copy">
            <span className="feature-number">01 / FIND ANYTHING</span>
            <h2>Your browser, finally searchable.</h2>
            <p>
              One query spans every Chrome window, bookmarks, recent history,
              direct URLs, and web search. Results stay grouped and easy to scan.
            </p>
            <ul className="clean-list">
              <li>Universal, fuzzy intent search</li>
              <li>Fresh previews that resolve in place</li>
              <li>Keyboard-first navigation and actions</li>
            </ul>
          </div>
          <div className="media-card video-card">
            <video autoPlay muted loop playsInline poster="/product/overlay.png">
              <source src="/product/search-demo-hd.mp4" type="video/mp4" />
            </video>
          </div>
        </article>

        <div className="capability-grid">
          <article className="capability-card">
            <Search aria-hidden="true" size={20} strokeWidth={1.7} />
            <span>Universal search</span>
            <h3>Tabs are only the beginning.</h3>
            <p>Jump across tabs, bookmarks, history, direct URLs, and Google results.</p>
          </article>
          <article className="capability-card">
            <Sparkles aria-hidden="true" size={20} strokeWidth={1.7} />
            <span>Quick actions</span>
            <h3>Act before you switch.</h3>
            <p>Close, duplicate, pin, mute, and manage a result from the same surface.</p>
          </article>
          <article className="capability-card">
            <PanelRightOpen aria-hidden="true" size={20} strokeWidth={1.7} />
            <span>Native Split View</span>
            <h3>Put pages side by side.</h3>
            <p>Send the selected page into Chrome Split View without rebuilding your flow.</p>
          </article>
        </div>

        <article className="feature search-feature">
          <div className="feature-copy">
            <span className="feature-number">02 / COMMAND</span>
            <h2>Type &gt; when you know the action.</h2>
            <p>
              The command mode gives browser controls a searchable home, while the
              action bar keeps the next move visible at the bottom of the palette.
            </p>
            <div className="command-example">
              <span>&gt;</span>
              <code>split view</code>
              <Key>↵</Key>
            </div>
          </div>
          <div className="media-card">
            <img
              src="/product/search.png"
              alt="TabKnight universal search showing tabs, history, a direct URL, and web search"
              width="1280"
              height="800"
            />
          </div>
        </article>
      </section>

      <section id="privacy" className="privacy-section section-pad">
        <div className="shell privacy-grid">
          <div className="privacy-visual">
            <img
              src="/illustrations/privacy-architecture-v2.png"
              alt="Tab data following a single contained route into device-local browser storage"
              width="1774"
              height="887"
            />
          </div>
          <div className="privacy-copy">
            <div className="section-kicker">Private by architecture</div>
            <h2>Your tabs are your business.</h2>
            <p className="lead">
              No servers. No accounts. No analytics. Tab titles, URLs, snippets,
              and preview thumbnails stay on your device.
            </p>
            <div className="privacy-stats">
              <div><strong>0</strong><span>trackers</span></div>
              <div><strong>0</strong><span>accounts</span></div>
              <div><strong>Local</strong><span>browser storage</span></div>
            </div>
            <a className="text-link" href={`${githubUrl}/blob/main/PRIVACY.md`} target="_blank" rel="noreferrer">
              Read the privacy policy <ExternalArrow />
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
            <FaGithub aria-hidden="true" size={18} />
            Browse repository
          </a>
        </div>
        <div className="source-grid">
          <div className="source-card"><span>License</span><strong>MIT</strong><p>Use, study, modify, and share.</p></div>
          <div className="source-card"><span>Built with</span><strong>React + TypeScript</strong><p>A small, typed extension core.</p></div>
          <div className="source-card"><span>Platform</span><strong>Manifest V3</strong><p>Modern Chrome extension architecture.</p></div>
        </div>
      </section>

      <section id="install" className="install-section">
        <div className="shell install-grid">
          <div>
            <div className="section-kicker">Install from source</div>
            <h2>Three steps from shortcut to flow.</h2>
            <p>
              TabKnight is an open-source Chrome build. Clone it, build it with Bun,
              and load the generated folder into Chrome.
            </p>
            <a className="button button-primary" href={installUrl} target="_blank" rel="noreferrer">
              <SiGooglechrome aria-hidden="true" size={17} />
              Open install guide
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
        <div className="shell footer-cta">
          <div>
            <span className="section-kicker">Close the tab gap</span>
            <h2>Keep the thought.<br />Lose the tab hunt.</h2>
          </div>
          <div className="footer-actions">
            <a className="button button-primary" href={installUrl} target="_blank" rel="noreferrer">
              <SiGooglechrome aria-hidden="true" size={17} />
              Install for Chrome
            </a>
            <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" size={18} />
              Star on GitHub
            </a>
          </div>
        </div>
        <div className="shell footer-main">
          <div className="footer-brand">
            <Brand />
            <p>A private, open-source command bar for Chrome.</p>
            <a href="https://x.com/gmsudo" target="_blank" rel="noreferrer">
              <AtSign aria-hidden="true" size={15} /> Built by @gmsudo
            </a>
          </div>
          <div className="footer-column">
            <strong>Product</strong>
            <a href="#features">Features</a>
            <a href="#privacy">Privacy</a>
            <a href="#install">Install</a>
          </div>
          <div className="footer-column">
            <strong>Project</strong>
            <a href={githubUrl} target="_blank" rel="noreferrer">Repository</a>
            <a href={`${githubUrl}/issues`} target="_blank" rel="noreferrer">Issues</a>
            <a href={`${githubUrl}/blob/main/LICENSE`} target="_blank" rel="noreferrer">MIT License</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 @gmsudo</span>
          <span className="footer-status"><i /> v0.34.3 · Open source</span>
          <span><Code2 aria-hidden="true" size={14} /> Built for the browser</span>
        </div>
      </footer>
    </main>
  );
}
