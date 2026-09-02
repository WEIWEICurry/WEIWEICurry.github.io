import { ScrollReveal } from '@/components/scroll-reveal';

const roleTags = ['JAVA BACKEND', 'AGENT ENGINEERING', 'FULL-STACK'];

const capabilities = [
  {
    index: '01',
    title: 'Backend Systems',
    subtitle: '稳健的业务底座',
    description:
      '用清晰的边界与可靠的中间件组合处理认证、缓存、消息、分片和高并发交易，让复杂链路在压力下仍然可控。',
    skills: ['Java / JUC / JVM', 'Spring Cloud', 'MySQL / ShardingJDBC', 'Redis / Caffeine', 'RocketMQ / XXL-JOB'],
  },
  {
    index: '02',
    title: 'Agent Engineering',
    subtitle: '可交付的智能工作流',
    description:
      '将开放式需求收敛为可编排、可验证的 Agent 工作流，并把结构化中间结果进一步变成用户能直接消费的产品。',
    skills: ['LangGraph orchestration', 'Supervisor / SubAgents', 'Skills Registry', 'SSE streaming', 'Evaluation / Replay'],
  },
  {
    index: '03',
    title: 'Product Delivery',
    subtitle: '跨越前后端的闭环',
    description:
      '从 API 事实源、交互工作台到可观测与自动化回归，关注的不只是代码完成，而是产品能否长期运行和持续演进。',
    skills: ['Next.js / React', 'FastAPI', 'PostgreSQL / TimescaleDB', 'Loki / Grafana / Alloy', 'Pytest / Vitest'],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <ScrollReveal />
      <header className="site-shell relative z-20 flex h-20 items-center justify-between border-b border-white/10">
        <a href="#top" className="font-mono text-sm font-semibold tracking-[0.18em]">
          WWC<span className="text-primary">/</span>DEV
        </a>
        <nav aria-label="主导航" className="flex items-center gap-1 sm:gap-7">
          <a className="nav-link hidden sm:inline-flex" href="#projects">项目</a>
          <a className="nav-link hidden sm:inline-flex" href="#capabilities">能力</a>
          <a className="nav-link hidden sm:inline-flex" href="#contact">联系</a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:border-primary/60 hover:bg-primary/10"
            href="https://github.com/WEIWEICurry"
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-mono text-[11px]">GH</span>
            GitHub
          </a>
        </nav>
      </header>

      <section id="top" className="hero-grid relative border-b border-white/10">
        <div className="hero-glow" aria-hidden="true" />
        <div className="site-shell relative z-10 grid min-h-[calc(100vh-5rem)] content-between py-10 lg:py-14">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] tracking-[0.16em] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="status-dot" /> OPEN TO OPPORTUNITIES
            </div>
            <span>CHINA / 2026</span>
          </div>

          <div className="py-16 lg:py-20" data-reveal="up">
            <div className="mb-8 flex flex-wrap gap-2">
              {roleTags.map((tag, index) => (
                <span key={tag} className="role-chip">0{index + 1} / {tag}</span>
              ))}
            </div>

            <p className="mb-4 text-sm font-medium tracking-[0.28em] text-primary sm:text-base">钱森 · WEIWEICURRY</p>
            <h1 className="max-w-6xl text-[clamp(3.4rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
              BUILD THE<br />
              <span className="text-stroke">SYSTEM.</span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1fr_1.25fr_auto] lg:items-end">
              <p className="font-mono text-xs uppercase leading-6 tracking-[0.13em] text-muted-foreground">
                Java backend depth<br />
                Agent-native delivery<br />
                Full-stack ownership
              </p>
              <p className="max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                我关注的不只是功能实现，而是把复杂业务拆成可验证、可观测、可持续迭代的工程系统——从高并发交易链路，到多 Agent
                工作流与真实数据驱动的产品交付。
              </p>
              <a className="scroll-cue" href="#projects" aria-label="前往精选项目"><span aria-hidden="true">↘</span></a>
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-white/10 pt-5 text-center sm:text-left" data-reveal="up">
            <Metric value="03" label="FOCUS PROJECTS" />
            <Metric value="246" label="AUTOMATED TESTS" />
            <Metric value="∞" label="ITERATION MINDSET" />
          </div>
        </div>
      </section>

      <section id="projects" className="site-shell py-24 lg:py-32">
        <SectionHeading
          index="01"
          eyebrow="SELECTED WORK"
          title="把能力落在作品里。"
        />

        <article className="project-card project-card-featured" data-reveal="up">
          <div className="project-copy">
            <ProjectMeta index="01" period="2026 — NOW" />
            <div>
              <p className="mb-3 font-mono text-[13px] tracking-[0.16em] text-primary">QUANT RESEARCH · AGENT WORKSPACE</p>
              <h3 className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">PrismX</h3>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/68">
                面向策略研究与投研日报的量化投研 AI 工作台。围绕用户提问、Agent 规划、真实数据取数、工作空间生成、自动验证与修复构建闭环。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Redis', 'Grafana'].map((item) => <TechPill key={item}>{item}</TechPill>)}
            </div>
          </div>

          <figure className="prism-image-wrap">
            <img
              src="/PrismX.png"
              alt="PrismX 量化投研 AI 工作台产品首页"
              className="prism-project-image"
              loading="eager"
              decoding="async"
            />
          </figure>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="project-card-small travel-card" data-reveal="left" data-reveal-delay="0">
            <ProjectMeta index="02" period="2026.01 — 03" />
            <div>
              <p className="mb-3 font-mono text-[12px] tracking-[0.14em] text-[#a995ff]">MULTI-AGENT · ARTIFACT-FIRST</p>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">AI 旅游规划系统</h3>
              <p className="mt-5 text-sm leading-7 text-white/66">
                以 Supervisor、SubAgents 与 Skills 拆解信息搜集、路线规划、预算测算和风险校验，并将结构化结果渲染成可直接浏览与分享的 HTML 旅行方案。
              </p>
            </div>
            <div className="pipeline" aria-label="旅游规划 Agent 流程">
              {['需求', '研究', '规划', '校验', '交付'].map((step, index) => (
                <div key={step} className="pipeline-step">
                  <span>0{index + 1}</span><strong>{step}</strong>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {['LangGraph', 'FastAPI', 'Next.js', 'SSE', 'Skills Registry'].map((item) => <TechPill key={item}>{item}</TechPill>)}
            </div>
            <span className="card-corner" aria-hidden="true">↗</span>
          </article>

          <article className="project-card-small commerce-card" data-reveal="right" data-reveal-delay="1">
            <ProjectMeta index="03" period="2025.08 — 12" />
            <div>
              <p className="mb-3 font-mono text-[12px] tracking-[0.14em] text-[#ff9e55]">DISTRIBUTED COMMERCE · JAVA</p>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">ART-X 数字藏品</h3>
              <p className="mt-5 text-sm leading-7 text-white/66">
                覆盖网关、用户、交易和订单核心模块，以多级缓存、事务消息、分库分表和定时任务支撑从展示、下单支付到上链的完整售卖闭环。
              </p>
            </div>
            <div className="commerce-flow" aria-label="数字藏品交易链路">
              <div><span>01</span><strong>AUTH</strong><small>SaToken</small></div>
              <div><span>02</span><strong>ORDER</strong><small>防重提交</small></div>
              <div><span>03</span><strong>STOCK</strong><small>Redis 预扣</small></div>
              <div><span>04</span><strong>COMMIT</strong><small>事务消息</small></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Spring Cloud', 'Redis', 'RocketMQ', 'ShardingJDBC', 'XXL-JOB'].map((item) => <TechPill key={item}>{item}</TechPill>)}
            </div>
            <span className="card-corner" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section id="capabilities" className="capability-section border-y border-white/10 py-24 lg:py-32">
        <div className="site-shell">
          <SectionHeading
            index="02"
            eyebrow="ENGINEERING RANGE"
            title="深度、编排与交付。"
            copy="我的能力结构不是一串技术名词，而是三个相互连接的工程层：稳定的后端底座、可控的 Agent 工作流，以及面向真实用户的全栈交付。"
          />

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.index} className="capability-card" data-reveal="up" data-reveal-delay={item.index}>
                <span className="capability-index">{item.index}</span>
                <div>
                  <p className="mb-2 font-mono text-[12px] tracking-[0.14em] text-primary">{item.subtitle}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/62">{item.description}</p>
                </div>
                <ul className="skill-list">
                  {item.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section id="contact" className="contact-grid relative overflow-hidden py-24 lg:py-36">
        <div className="contact-glow" aria-hidden="true" />
        <div className="site-shell relative z-10">
          <p className="section-kicker" data-reveal="up">03 / CONTACT</p>
          <div className="grid gap-12 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
            <div data-reveal="left">
              <h2 className="max-w-5xl text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                LET&apos;S BUILD<br /><span className="text-stroke">SOMETHING REAL.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/66">
                正在寻找 Java 后端、Agent 应用开发与全栈开发方向的机会。如果你也在做复杂系统、AI 产品或真实业务工程，欢迎联系。
              </p>
            </div>

            <address className="not-italic" data-reveal="right" data-reveal-delay="1">
              <ContactLink label="EMAIL" value="1468345176@qq.com" href="mailto:1468345176@qq.com" />
              <ContactLink label="PHONE" value="151 8995 9921" href="tel:15189959921" />
              <ContactLink label="GITHUB" value="@WEIWEICurry" href="https://github.com/WEIWEICurry" external />
            </address>
          </div>

          <footer className="mt-24 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[12px] tracking-[0.12em] text-muted-foreground sm:flex-row" data-reveal="up">
            <span>© 2026 QIAN SEN / WEIWEICURRY</span>
            <span>DESIGNED AROUND SYSTEMS, BUILT FOR PEOPLE.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end" data-reveal="up">
      <div>
        <p className="section-kicker">{index} / {eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {copy ? <p className="max-w-md text-base leading-7 text-muted-foreground">{copy}</p> : null}
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-white/10 px-3 first:border-l-0 first:pl-0 sm:px-6">
      <strong className="block text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{value}</strong>
      <span className="mt-1 block font-mono text-[11px] tracking-[0.12em] text-muted-foreground sm:text-[12px]">{label}</span>
    </div>
  );
}

function ProjectMeta({ index, period }: { index: string; period: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="project-index">{index}</span>
      <span className="project-year">{period}</span>
    </div>
  );
}

function TechPill({ children }: { children: React.ReactNode }) {
  return <span className="tech-pill">{children}</span>;
}

function ContactLink({ label, value, href, external = false }: { label: string; value: string; href: string; external?: boolean }) {
  return (
    <a
      className="contact-link"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span>{label}</span><strong>{value}</strong><b aria-hidden="true">↗</b>
    </a>
  );
}
