import { useEffect, useRef, useState } from "react";
import "./Qarin.css";

/* ---------- helpers ---------- */

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`qr-reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CountUp({ to, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1);
        setVal(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="3.4" />
    <path d="M14.6 14.6 20 20" stroke="#DA4167" strokeWidth="3.4" strokeLinecap="round" />
  </svg>
);
const Mark = ({ size }) => (
  <svg className="qr-logo-mark" viewBox="0 0 24 24" fill="none" aria-hidden width={size} height={size}>
    <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="3.2" />
    <path d="M14.6 14.6 21 21" stroke="#DA4167" strokeWidth="3.2" strokeLinecap="round" />
  </svg>
);
const Logo = () => (
  <span className="qr-logo">
    <Mark />
    Qarin
  </span>
);

const Btn = ({ children, variant = "primary", href = "#" }) => (
  <a href={href} className={`qr-btn qr-btn-${variant}`}>
    {children}
  </a>
);

const Eyebrow = ({ children }) => <span className="qr-eyebrow">{children}</span>;

/* ---------- data ---------- */

const NAV = ["Features", "Pricing", "About", "Blog", "Contact"];

const FEATURES = [
  ["Smart contact management", "Organize leads and customers in one place with automatic enrichment and tagging."],
  ["AI sales forecasting", "Predict revenue with models trained on your pipeline and historical deal data."],
  ["Team collaboration tools", "Share notes, assign tasks and keep every conversation in context."],
  ["Data security & permissions", "Granular roles and enterprise-grade encryption keep your data protected."],
  ["Real-time alerts & notifications", "Get notified the moment a deal moves, a lead replies or a task is due."],
  ["AI-powered insights", "Surface the next best action for every account, automatically."],
];

const POWER = [
  ["Advanced Analytics", "Dig into pipeline health, rep performance and conversion trends with live dashboards."],
  ["Marketing & Engagement", "Run campaigns and nurture leads with automation tied directly to your pipeline."],
  ["Integrated CRM", "Bring sales, marketing and support together for a truly connected team."],
];

const INTEGRATIONS = ["Google Analytics", "Meta Pixel", "LinkedIn Conversion API", "Mailchimp campaigns", "YouTube Analytics"];

const PLANS = [
  { name: "Starter", m: 10.99, users: "Up to 10 users", tasks: "5 Tasks & Projects" },
  { name: "Growth", m: 19.99, users: "Up to 20 users", tasks: "20 Tasks & Projects", popular: true },
  { name: "Professional", m: 49.99, users: "Unlimited users", tasks: "Unlimited Tasks & Projects" },
];

const FAQS = [
  ["What is Qarin?", "Qarin is an AI-powered sales management platform that helps teams automate workflows, track pipelines, forecast revenue and close more deals."],
  ["Does Qarin integrate with CRM tools?", "Yes. Qarin connects with popular CRM, marketing and analytics tools so your data stays in sync across your stack."],
  ["Is there a free trial available?", "Every plan starts with a 14-day free trial. No credit card required."],
  ["How does Qarin use AI?", "AI powers forecasting, lead scoring, activity summaries and next-best-action suggestions throughout the platform."],
  ["What kind of support does Qarin provide?", "Our support team is available by chat and email, with onboarding help for every plan."],
  ["How does Qarin help teams collaborate?", "Shared pipelines, comments, task assignments and real-time notifications keep everyone aligned."],
];

const POSTS = [
  ["David Lee", "10 Ways Automation Can Transform Your Sales Workflow"],
  ["Amina Torres", "The Ultimate Guide to Improving Team Communication"],
  ["Amina Torres", "Why Your CRM Should Do More Than Just Manage Contacts"],
];

/* ---------- mock UI pieces ---------- */

function ActivityChart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const h = [46, 70, 38, 88, 60, 30, 52];
  return (
    <div className="qr-mock">
      <div className="qr-mock-head">
        <b>Activity Time</b>
        <span className="qr-chip">Last 7 Days</span>
      </div>
      <div className="qr-bars">
        {days.map((d, i) => (
          <div key={d} className="qr-bar-col">
            <div className="qr-bar-track">
              <div className="qr-bar" style={{ height: `${h[i]}%`, transitionDelay: `${i * 60}ms` }} />
            </div>
            <span>{d}</span>
          </div>
        ))}
      </div>
      <div className="qr-pill-row">
        <span className="qr-tag">Meeting · 2 hours</span>
      </div>
    </div>
  );
}

function ActivityList() {
  const rows = [
    ["Maintaining & Upgrade", "Progress", "12 Day", "$619,000"],
    ["Develop CRM Product", "Done", "24 Day", "$251,000"],
  ];
  return (
    <div className="qr-mock">
      {rows.map((r) => (
        <div key={r[0]} className="qr-row">
          <div>
            <b>{r[0]}</b>
            <small>Raymond Baratheon · {r[2]}</small>
          </div>
          <div className="qr-row-r">
            <span className={`qr-status ${r[1] === "Done" ? "done" : ""}`}>{r[1]}</span>
            <b>{r[3]}</b>
          </div>
        </div>
      ))}
    </div>
  );
}

function Stats() {
  return (
    <div className="qr-mock qr-mock-center">
      <small>Active Deals</small>
      <div className="qr-big">
        $<CountUp to={40} decimals={2} />
        <span>k</span>
      </div>
      <span className="qr-chip">#1 Rank</span>
      <svg viewBox="0 0 200 60" className="qr-spark" preserveAspectRatio="none">
        <path d="M0 48 L30 40 L60 44 L90 26 L120 32 L150 14 L200 8" className="qr-spark-line" />
      </svg>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="qr-dash">
      <aside>
        <Logo />
        {["Dashboard", "Deals", "Contacts", "Reports", "Tasks"].map((x, i) => (
          <span key={x} className={i === 0 ? "on" : ""}>
            {x}
          </span>
        ))}
      </aside>
      <div className="qr-dash-main">
        <div className="qr-dash-top">
          <b>Sales overview</b>
          <span className="qr-chip">This month</span>
        </div>
        <div className="qr-dash-kpis">
          {[["Revenue", "$128,400"], ["Deals won", "342"], ["Win rate", "68%"]].map(([k, v]) => (
            <div key={k}>
              <small>{k}</small>
              <b>{v}</b>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 600 160" className="qr-area" preserveAspectRatio="none">
          <defs>
            <linearGradient id="qrg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#DA4167" stopOpacity=".35" />
              <stop offset="1" stopColor="#DA4167" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 120 C60 100 100 130 160 90 S260 60 320 80 S430 30 490 50 S570 20 600 25 V160 H0Z" fill="url(#qrg)" />
          <path d="M0 120 C60 100 100 130 160 90 S260 60 320 80 S430 30 490 50 S570 20 600 25" className="qr-area-line" />
        </svg>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

export default function Qarin() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [yearly, setYearly] = useState(false);
  const [open, setOpen] = useState(0);

  const rootRef = useRef(null);

  useEffect(() => {
    const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><rect width='24' height='24' rx='6' fill='#2a1230'/><circle cx='11' cy='11' r='5.5' stroke='white' stroke-width='2.6'/><path d='M14.8 14.8 19 19' stroke='#DA4167' stroke-width='2.6' stroke-linecap='round'/></svg>";
    let link = document.querySelector("link[rel='icon']");
    const prev = link?.getAttribute("href");
    if (!link) { link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
    link.type = "image/svg+xml";
    link.href = "data:image/svg+xml," + encodeURIComponent(svg);
    const prevTitle = document.title;
    document.title = "Qarin — Manage Your Sales Process";
    return () => { document.title = prevTitle; if (prev) link.setAttribute("href", prev); };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // query once, not per frame; only touch elements near the viewport
    const pEls = [...root.querySelectorAll("[data-p]")];
    const sEls = [...root.querySelectorAll("[data-speed]")];
    let raf = 0;
    let wasScrolled = null;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const sc = y > 12;
      if (sc !== wasScrolled) { wasScrolled = sc; setScrolled(sc); }
      const max = document.documentElement.scrollHeight - vh;
      root.style.setProperty("--progress", max > 0 ? y / max : 0);
      if (reduce) return;
      for (const el of pEls) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) continue;
        el.style.setProperty("--p", Math.min(1, Math.max(0, 1 - r.top / (vh * 0.8))).toFixed(3));
      }
      for (const el of sEls) {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        el.style.setProperty("--py", `${((r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.speed)).toFixed(1)}px`);
      }
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="qr" ref={rootRef}>
      <div className="qr-progress" />
      {/* NAV */}
      <header className={`qr-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="qr-nav-in">
          <Logo />
          <nav className={menu ? "open" : ""}>
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMenu(false)}>
                {n}
              </a>
            ))}
          </nav>
          <div className="qr-nav-cta">
            <Btn>Get Started Now</Btn>
            <button className="qr-burger" aria-label="Menu" onClick={() => setMenu((m) => !m)}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="qr-hero">
        <div className="qr-glow" />
        <div className="qr-wrap qr-center" data-speed="-0.12">
          <Reveal><span className="qr-badge"><i />Meet Qarin</span></Reveal>
          <Reveal delay={80}><h1>Manage Your Sales Process with Clarity and Control</h1></Reveal>
          <Reveal delay={160}>
            <p className="qr-lead">Deliver customer support at scale with AI-powered tools built for modern sales teams.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="qr-actions">
              <Btn>Book a Demo</Btn>
              <Btn variant="ghost">Contact Sales</Btn>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="qr-proof">
              <div className="qr-avatars">
                {["#DA4167", "#f59e8b", "#5a3a63", "#f2c14e"].map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </div>
              <span>Trusted by <b>12,000+</b> founders & business owners</span>
            </div>
          </Reveal>
          <Reveal delay={400} className="qr-hero-shot"><div data-p><DashboardMock /></div></Reveal>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section id="features" className="qr-section">
        <div className="qr-wrap">
          <Reveal className="qr-head">
            <h2>Everything you need to manage and grow sales</h2>
            <p>One dashboard combining analytics, activity tracking and deal insights.</p>
          </Reveal>
          <div className="qr-grid3">
            {[
              ["Time tracking breakdown", <ActivityChart />],
              ["Activity tracking & insights", <ActivityList />],
              ["Real-time sales statistics", <Stats />],
            ].map(([t, m], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="qr-card">
                  <div className="qr-card-vis">{m}</div>
                  <h4>{t}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="qr-section qr-tight">
        <div className="qr-wrap">
          <Reveal className="qr-center"><Eyebrow>Leading CRM platform for modern teams</Eyebrow></Reveal>
          <div className="qr-stats">
            {[
              [7.3, "M+", "Customer interactions handled worldwide", 1],
              [250, "k+", "Businesses grow yearly with Qarin", 0],
              [70, "k+", "Sales teams trust Qarin to close more deals", 0],
            ].map(([n, s, l, d], i) => (
              <Reveal key={l} delay={i * 100}>
                <div className="qr-stat">
                  <b><CountUp to={n} suffix={s} decimals={d} /></b>
                  <span>{l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISIBILITY */}
      <section className="qr-section">
        <div className="qr-wrap qr-split">
          <Reveal>
            <h2>Visibility into every sales action</h2>
            <p className="qr-muted">See when and where sales activity is most effective.</p>
            <ul className="qr-checks">
              {[
                "Track activity patterns across your entire sales workflow",
                "Connect effort, timing, and outcomes in one view",
                "Make data-informed decisions without manual reporting",
              ].map((x) => (
                <li key={x}><Check />{x}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="qr-card qr-feature-stat">
              <h3><CountUp to={72} suffix="%" /></h3>
              <b>Increase in operational efficiency</b>
              <p>From customers who used Qarin for at least 12 months.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GROWTH STACK */}
      <section className="qr-section qr-alt">
        <div className="qr-wrap">
          <Reveal className="qr-head">
            <Eyebrow>Growth Engine by Qarin</Eyebrow>
            <h2>AI-Powered growth stack</h2>
            <p>Intelligence, automation and customer management, combined.</p>
          </Reveal>
          <div className="qr-bento">
            {["Cost Breakdown", "Reports & Insights", "Task Management", "Key Features"].map((t, i) => (
              <Reveal key={t} delay={i * 80} className={`qr-bento-${i}`}>
                <div className="qr-card qr-bento-card" data-speed={i % 2 ? "0.06" : "-0.04"}>
                  <div className="qr-skel">
                    <i /><i /><i />
                  </div>
                  <h4>{t}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="qr-section">
        <div className="qr-wrap">
          <Reveal className="qr-head">
            <Eyebrow>Key Features</Eyebrow>
            <h2>Core features that power your workflow</h2>
            <p>AI, automation and CRM tools in one platform.</p>
          </Reveal>
          <div className="qr-grid3 qr-feat-grid">
            {FEATURES.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 90}>
                <div className="qr-feat">
                  <span className="qr-icon">{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POWER PACK */}
      <section className="qr-section qr-dark">
        <div className="qr-wrap">
          <Reveal className="qr-head">
            <Eyebrow>Power Pack</Eyebrow>
            <h2>Designed for how sales teams actually work</h2>
            <p>Visibility, automation and collaboration.</p>
          </Reveal>
          <div className="qr-grid3">
            {POWER.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="qr-dark-card">
                  <h6>{t}</h6>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="qr-section">
        <div className="qr-wrap">
          <Reveal className="qr-head">
            <Eyebrow>How it works</Eyebrow>
            <h2>A smarter way to manage your work</h2>
            <p>One connected workspace that captures leads and automates follow-ups.</p>
          </Reveal>
          <Reveal>
            <div className="qr-integrations">
              {INTEGRATIONS.map((x) => (
                <div key={x}><span>{x}</span><a href="#">Connect</a></div>
              ))}
            </div>
          </Reveal>
          <div className="qr-steps">
            {[
              ["01", "Start with instant setup", "Connect your contacts and import leads in minutes."],
              ["02", "Manage every deal seamlessly", "Track conversations, assign tasks and follow up on time."],
              ["03", "Review, close, and repeat", "Measure results and keep improving every cycle."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 100}>
                <div className="qr-step" data-speed={0.03 * (i - 1)}>
                  <span className="qr-step-n">{n}</span>
                  <h5>{t}</h5>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="qr-section qr-alt">
        <div className="qr-wrap">
          <Reveal className="qr-head"><h2>Trusted by 10 million users worldwide</h2></Reveal>
          <div className="qr-grid2">
            {[
              ["“Qarin keeps our growing team aligned. Everything just works.”", "David Lee", "Head of Operations", 32, 3.4],
              ["“Qarin transformed how our small firm operates, and sales grew by 30%.”", "Stefan Persson", "Product Manager", 30, 2.1],
            ].map(([q, n, r, p, x], i) => (
              <Reveal key={n} delay={i * 100}>
                <figure className="qr-quote">
                  <blockquote>{q}</blockquote>
                  <div className="qr-quote-stats">
                    <div><b><CountUp to={p} suffix="%" /></b><small>Revenue Boost in Last 30 Days</small></div>
                    <div><b><CountUp to={x} suffix="X" decimals={1} /></b><small>Team Efficiency</small></div>
                  </div>
                  <figcaption>
                    <i />
                    <div><b>{n}</b><small>{r}</small></div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="qr-section">
        <div className="qr-wrap qr-center">
          <Reveal className="qr-head">
            <h2>Powerful integrations with your essential business tools</h2>
            <p>Simplify project planning and team collaboration.</p>
          </Reveal>
          <Reveal>
            <div className="qr-orbit" data-p>
              {Array.from({ length: 8 }).map((_, i) => (
                <i key={i} style={{ "--a": `${i * 45}deg` }} />
              ))}
              <span className="qr-orbit-core"><Mark /></span>
            </div>
            <Btn variant="ghost">Explore all integration <Arrow /></Btn>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="qr-section qr-alt">
        <div className="qr-wrap">
          <Reveal className="qr-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2>Simple plans. Smarter growth.</h2>
            <div className="qr-toggle">
              <button className={!yearly ? "on" : ""} onClick={() => setYearly(false)}>Pay Monthly</button>
              <button className={yearly ? "on" : ""} onClick={() => setYearly(true)}>Pay Yearly (-20%)</button>
            </div>
          </Reveal>
          <div className="qr-grid3 qr-plans">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className={`qr-plan ${p.popular ? "pop" : ""}`}>
                  {p.popular && <span className="qr-tag">Most Popular</span>}
                  <h4>{p.name}</h4>
                  <p className="qr-muted">Our plan is designed for teams ready to scale.</p>
                  <div className="qr-price">
                    <b>${(yearly ? p.m * 0.8 : p.m).toFixed(2)}</b>
                    <span>/billed {yearly ? "yearly" : "monthly"}</span>
                  </div>
                  <Btn variant={p.popular ? "primary" : "ghost"}>Select Plan</Btn>
                  <ul>
                    {[p.users, p.tasks, "Task and project tracking", "Basic Task Board & Calendar View", "Real-Time Notifications"].map((f) => (
                      <li key={f}><Check />{f}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="qr-section">
        <div className="qr-wrap qr-faq">
          <Reveal>
            <Eyebrow>FAQs</Eyebrow>
            <h2>Got Questions?</h2>
            <p className="qr-muted">Everything about plans, integrations and AI features. Our support team helps with setup and growth.</p>
            <Btn variant="ghost">Contact us</Btn>
          </Reveal>
          <Reveal delay={100}>
            <div className="qr-acc">
              {FAQS.map(([q, a], i) => (
                <div key={q} className={`qr-acc-item ${open === i ? "open" : ""}`}>
                  <button onClick={() => setOpen(open === i ? -1 : i)}>
                    {q}
                    <span className="qr-plus" />
                  </button>
                  <div className="qr-acc-body"><p>{a}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="qr-section qr-tight">
        <div className="qr-wrap">
          <Reveal className="qr-head"><h2>From the Qarin Blog</h2></Reveal>
          <div className="qr-grid3">
            {POSTS.map(([a, t], i) => (
              <Reveal key={t} delay={i * 100}>
                <a href="#" className="qr-post">
                  <div className="qr-post-img" style={{ "--h": 250 + i * 25 }} />
                  <small>{a} · Apr 22, 2025</small>
                  <h4>{t}</h4>
                  <span>Read article <Arrow /></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="qr-cta-sec">
        <div className="qr-wrap">
          <Reveal>
            <div className="qr-cta">
              <div className="qr-glow qr-glow-cta" />
              <Btn variant="light">Use for Free</Btn>
              <h2>Get started today and unlock the power of our solutions.</h2>
              <p>A SaaS and startup template for startups and fast-growing teams.</p>
              <Btn variant="primary">Start 14 Days Free Trial</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="qr-footer">
        <div className="qr-wrap qr-foot">
          <Logo />
          <div className="qr-foot-links">
            {["Features", "Pricing", "Changelog", "About", "Blog", "Integration", "Case Study", "Request Demo", "Contact", "Privacy Policy", "Terms & Conditions"].map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
