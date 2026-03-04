export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: 'salt-report' | 'rec-matters';
  trend?: 'up' | 'down' | 'neutral';
  image?: string;
  summary: string;
  content: string;
}

export const authors = {
  'John Salt': {
    name: 'John Salt',
    slug: 'john-salt',
    role: 'Market Analyst & RecConnect Co-Founder',
    headshot: '/images/authors/john-salt.jpg',
    linkedin: 'https://www.linkedin.com/in/john-salt/',
  },
  'Simon Lewis': {
    name: 'Simon Lewis',
    slug: 'simon-lewis',
    role: 'Founder, RecConnect',
    headshot: '/images/authors/simon-lewis.jpg',
    linkedin: 'https://www.linkedin.com/in/simonlewisrecconnect/',
  },
};

export const articles: Article[] = [
  {
    id: "eot-exit-event-january-2026",
    slug: "how-to-exit-recruitment-business-employee-ownership-trust",
    title: "How to Exit Your Recruitment Business via an Employee Ownership Trust (EOT)",
    date: "2026-01-22",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/lovable-uploads/harbottle-road-to-exit-event-v2.png",
    summary: "RecConnect hosted a successful event exploring Employee Ownership Trusts as a strategic exit route for recruitment business owners, featuring expert insights from Harbottle & Lewis.",
    content: `Recently, RecConnect hosted a highly successful event specifically tailored for recruitment professionals, focusing on the transformative potential of Employee Ownership Trusts (EOTs) as a strategic exit route. Held on 21 January 2026, the session brought together a dynamic group of industry peers to explore how this model can reshape the future of their businesses and allow them to exit quicker than other sale routes.

Led by experts from legal firm [Harbottle & Lewis](https://www.harbottle.com/), the event provided deep-dive insights into the Road to Exit. Amongst a variety of pointers, attendees engaged in collaborative discussions about the significant 50% Capital Gains Tax relief available to founders, succession planning, competitive differentiation, ownership transition, and the ability to reward their teams with annual tax-free bonuses of up to £3,600.

## The Event Atmosphere

The vibe in the room was superb (especially for January!), with a tangible sense of shared ambition as recruitment leaders explored how EOTs can boost employee engagement and protect a company's unique culture. The use of a practical case study brought these concepts to life, illustrating a clear path for founders to transition control while incentivising the next generation of leadership through EMI options.

## Key Takeaways

For those who weren't there, it was a missed opportunity to gain a competitive edge. The collaboration and expert-led insights shared have equipped business leaders with the clarity needed to make truly informed decisions about their long-term business legacies.

### Why Consider an EOT?

- **50% Capital Gains Tax relief** for founders on the sale
- **Tax-free bonuses** of up to £3,600 per employee annually
- **Faster exit route** compared to traditional sale methods
- **Protect company culture** through employee ownership
- **Succession planning** with built-in leadership incentives via EMI options

## Thank You to Our Sponsors

Thanks to [Keybridge IT Solutions](https://www.keybridgeit.com/) for supporting the event and buying the drinks!

If you're interested in learning more about EOTs as an exit strategy for your recruitment business, [join RecConnect](https://buy.stripe.com/3cI00lczo8Hk8QA3JYD) to access future events and expert insights.

**Written by Simon Lewis, Founder, RecConnect**`,
  },
  {
    id: "salt-report-boe-rates-october-2025",
    slug: "no-cuts-no-glory-boe-cold-shower",
    title: "No Cuts, No Glory: Why the BoE's Cold Shower Could Heat Up Smart Recruitment",
    date: "2025-10-22",
    author: "John Salt",
    category: "salt-report",
    trend: "down",
    image: "/images/articles/salt-report-boe-rates.jpg",
    summary: "The Bank of England is holding firm on interest rates, choosing economic restraint over relief. But for smart recruitment agencies, this cold reality presents a hot opportunity.",
    content: `If you were hoping the Bank of England would ride to the rescue with a well‑timed rate cut this autumn, dream on. The Monetary Policy Committee is standing firm, hawkish even, insisting that inflation, not unemployment, is still public enemy number one. After months of labour‑market fatigue and sliding productivity, policymakers have chosen to keep the economic engine idling rather than risk reigniting price pressures.

The outcome is predictable: tighter credit, cooler confidence, and slower hiring. GDP stagnated in July, barely moved in August, and now looks set for another anaemic quarter. Unemployment has edged up again to 4.8%, vacancies have fallen for the 39th straight period to 717,000, and total pay growth slipped to 4.7%. In short, the labour market is deflating faster than the government's growth rhetoric.

But here's the twist; rate paralysis doesn't spell doom for all. For recruitment agencies it signals a shift in tempo and opportunity. When the central bank goes cold, agility gets hot. Clients still need hires, but they need them smarter, cheaper, and with provable return. They are cutting back on "if in doubt, hire" behaviour, instead demanding foresight, workforce data analytics, and frictionless pipelines that add value beyond matching CVs.

Agencies that treat this as a pause for reinvention, not retreat, are already ahead. The smartest players are blending AI with human nuance, using algorithms to sift volume, sentiment tools to map flight‑risk candidates, and predictive modelling to advise clients on when to hire, not just who. According to recent Bloomberg and ONS updates, the BoE's tough‑love policy is likely to persist into mid‑2026, meaning the recruitment world's next 12 months won't reward raw hustle, but operational precision.

Technology alone, however, isn't the whole play. The demographic pinch of an ageing workforce, shrinking graduate pipelines, and record youth inactivity, demands a broader rethink. Clients that invest in retraining schemes, apprenticeships, and inclusive sourcing will fill roles others can't. It's no longer just about finding talent; it's about creating it. Agencies working with these clients must become workforce architects, reshaping careers rather than chasing headcounts.

The irony is rich. While the Bank of England clamps down on demand to cool inflation, the smartest agencies will win by stimulating their own micro‑economy. By blending tech‑powered insight with human empathy, they'll tighten inefficiencies, shorten time‑to‑hire, and expand into high‑value consulting where margins are thicker than the country's GDP growth.

The message is clear. If the economy refuses to grow, make sure your influence does. High rates may be here to stay but that doesn't mean your potential can't compound faster than base interest. When everyone else is waiting for the cut, cut through instead.

**John Salt** is a commercial leader, business consultant, NED, and economist. [Connect with John via LinkedIn](https://www.linkedin.com/in/john-salt/)`,
  },
  {
    id: "salt-report-september-2025",
    slug: "salt-report-hot-air-cold-hires",
    title: "Hot Air, Cold Hires: How to Beat the British Summer of Flat Growth",
    date: "2025-09-25",
    author: "John Salt",
    category: "salt-report",
    trend: "down",
    image: "/images/articles/salt-report-hot-air-cold-hires.jpg",
    summary: "In a market where even the weather\\",
    content: `The UK economy seems stuck in sluggish gear. GDP growth slowed to just 0.3% in Q2 and July saw zero growth, while the latest outlook for 2025 pegs annual gains at barely 1.1–1.3%. Permanent hiring and payroll employment have both dropped, with unemployment now at 4.7% and vacancies slipping again by 40,000 this quarter to around 718,000. Wage growth is still ahead of inflation, with regular earnings up 5%, but most of that momentum is found in resilient sectors, as business sentiment turns cautious and cost pressures bite.

Facing slow growth, elevated living costs, and political pledges to freeze the headline taxes, recruiters and their clients are forced to work smarter. Chancellor Reeves, like many agency owners, finds herself boxed-in, with VAT, NI, and income tax rises off the table (or are they?), pressure for public spending keeps rising, leaving only pension, property, or inheritance taxes as realistic fiscal levers.

None of these would be popular, but they are all the more likely if the economy can't break out of its torpor.

So, what should recruitment agencies do in this climate? The answer is to adapt, diversify and embrace the churn. For most, this means a clear pivot towards advisory, digital, and niche sector offerings, moving beyond 'just hiring', to solve the broader talent problems and support clients with data-led, scenario-rich advice.

Those focusing on public administration, health, education, and infrastructure are already outperforming generalists, demonstrating that sector focus and operational efficiency pay off in leaner times. Temp, contract and gig work are surging forward, while hybrid and remote work are the new norm, supported by tech platforms that cut time-to-hire and drive value for cost-conscious employers. Agencies willing to rethink processes and are using AI for matching, helping to upskill staff, and tracking demographic shifts, are turning slowdown into opportunity.

The changing labour force, too, demands fresh thinking. Ageing demographics, a skills crunch in tech and healthcare, and new work expectations mean agencies must build deeper candidate networks and invest in digital channels. In-demand roles are shifting towards AI, data, project management, and specialist healthcare, where the need is acute and margins can be maintained.

Candidate supply, while improving, is uneven, and the best agencies are those advising on internships, training, and workforce diversification to plug persistent gaps.

Ultimately, sluggish growth and cool demand mean agencies must move faster, become indispensable sector partners, and deliver impact and foresight with every engagement. As the market pivots from volatility to predictability, the field is wide open for recruitment businesses ready to offer more than CVs: deep expertise, automation, and true partnership will define the winners of 2026.

The forecasted lean cycles and economic uncertainty aren't a retreat, but the proving ground for smart thinking, sharper propositions, and lasting growth.

**John Salt** is a commercial leader, business consultant, NED, and economist. [Connect with John via LinkedIn](https://www.linkedin.com/in/john-salt/)`,
  },
  {
    id: "bosses-reject-rival-football-team-applicants",
    slug: "bosses-reject-rival-football-team-applicants",
    title: "Bosses Can Reject Applicants Who Support A Rival Football Team",
    date: "2025-09-23",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/football-team-recruitment-ruling.jpg",
    summary: "Maintaining \\",
    content: `An employment judge has ruled that people can legally be turned down for a job if they happen to support the rival team followed by existing staff.

The Guardian reported the recent case of a Russian international who took legal action after she lost out on a job with a marketing agency because she didn't "vibe" with her interviewer.

Employers are entitled to base recruitment decisions on whether a prospective colleague might "damage office harmony" by not supporting the same team, the employment judge Daniel Wright said.

Wright dismissed Maia Kalina's discrimination claim against Digitas LBI, ruling that the company's recruitment decision was lawful. The tribunal found that employers can legally consider "team fit" as a factor in hiring decisions, even when this might disadvantage certain candidates. In this case, Ms Kalina believed she lost out to another candidate who displayed more "British habits."

'Culture fit' has long been established as the key reason why applicants are hired, though with the prevalence of remote teams and a change in working environments, skills-based hiring is recognised by many employees as the modern recruitment method.

## Key Ruling Outcomes

**Against the Claimant:**
- The tribunal rejected Kalina's argument that she faced discrimination based on cultural stereotypes about British workplace behaviour
- Judge Wright found no evidence of a legitimate stereotype that British workers are universally "outgoing, pub-going, and prone to swearing"
- The decision was deemed lawful as both final candidates were considered equally appointable, making "team fit" a valid tiebreaker
- The interviewer's assessment that she "vibed" more with the other candidate was accepted as a legitimate business consideration

**Legal Precedent Established:**
- Employers can lawfully reject candidates who might not integrate well with existing team dynamics
- "Office harmony" is recognised as a valid recruitment consideration
- The judge's hypothetical Arsenal/Tottenham example illustrates that even seemingly trivial team preferences can justify hiring decisions

## Implications

For employers the ruling provides clarity that cultural fit assessments are permissible when conducted carefully and applied to equally qualified candidates. However, the judge emphasised such assessments must be made "with caution."

For job seekers the decision suggests that personality and cultural compatibility can legitimately influence hiring decisions, potentially disadvantaging those whose working styles differ from established team norms.

While this case specifically addressed alleged nationality-based discrimination, the tribunal's reasoning could apply to various "fit" considerations in recruitment, raising questions about how such assessments might affect workplace diversity in practice.

**Written by Simon Lewis, Founder, RecConnect** – if you're looking for a supportive community of recruitment agency leaders, [join RecConnect today](https://buy.stripe.com/3cI00lczo8Hk8QA3JYD).`,
  },
  {
    id: "job-hugging-recruitment-crisis",
    slug: "job-hugging-recruitment-crisis",
    title: "Job Hugging: The Recruitment Crisis Agencies Must Solve",
    date: "2025-09-16",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/job-hugging-recruitment-crisis.jpg",
    summary: "How workers clinging to jobs is reshaping recruitment and what agencies must do to adapt in this new landscape of job hugging and economic uncertainty.",
    content: `The recruitment landscape has dramatically shifted. Where the Great Resignation saw employees job-hopping with confidence, fast forward four years and we now face 'job hugging' – workers clinging to current positions despite unhappiness, driven by fear and economic uncertainty.

This trend is creating unprecedented challenges for recruitment agencies (and for different reasons, TAs) and fundamentally changing talent acquisition.

## The Job Hugging Reality

Job hugging means workers hold onto roles regardless of satisfaction, driven by anxiety rather than loyalty. Employment Hero research shows UK employment levels declined 0.9% in December 2024 – alarming given December typically sees pre-Christmas hiring surges. 2025 has shown little improvement.

Key drivers include:
- Economic uncertainty from October 2024 budget changes, particularly employer National Insurance increases
- Limited opportunities with job openings to unemployed workers reaching just 1:1
- Inflation eroding real wages despite pay growth
- Market stagnation with only 11% of UK employers planning year-end hires

As Employment Hero's Kevin Fitzgerald notes: "This 'job hugging' trend reflects employees attempting to weather the storm."

## The Recruitment Agency Crisis

### Shrinking Candidate Pools

With 55% of workers prioritising security over advancement, agencies face candidate scarcity. Even high-demand professionals avoid recruiter engagement, with response rates plummeting across all sectors.

### Extended Placement Cycles

Candidates now conduct excessive due diligence, seek security reassurances, and take longer accepting offers. This increases cost per placement while reducing volume.

Alongside this, employers become frustrated with the perceived reduced delivery and seek alternative talent sources, cut recruitment budgets or attempting internal hiring, intensifying agency competition for shrinking talent pools.

## Strategic Adaptations for Recruiters

Recruiters must adapt and evolve within a changing climate.

### Relationship-centric approach

- **Long-term cultivation**: Build lasting relationships through value-added touchpoints like market insights and career guidance rather than transactional interactions.
- **Proactive intelligence**: Invest in understanding which roles and companies will experience turnover, building pipelines before positions open.

### Technology Enhancement

- **AI-powered identification**: Use algorithms to identify passive candidates likely to move based on career patterns and market positioning.
- **Predictive analytics**: Leverage data to optimize outreach timing based on company performance and industry trends.

### Value Proposition Evolution

- **Strategic partnership**: Position as consultants providing market analysis, compensation benchmarking, and competitor insights rather than just candidate suppliers.
- **Risk mitigation**: Offer enhanced verification, post-placement support, and retention-focused onboarding to address security concerns.

### Alternative Revenue Models

- Retained search expansion across broader position ranges
- Consulting services for workforce planning and talent strategy
- Training partnerships creating internal mobility opportunities

## Innovative Engagement Strategies

### 1. Future Opportunity Building

Create 'future opportunity' pipelines by mapping candidate career goals and using market intelligence to identify optimal movement timing.

### 2. Micro-Mobility Focus

- Facilitate internal promotions then backfill with external hires
- Identify lateral moves offering new challenges
- Use contract-to-permanent pathways reducing candidate risk

## Building Resilient Business Models

### Diversification

Expand beyond traditional recruitment into temporary staffing, executive coaching, HR technology support, and organisational development.

### Financial Resilience

Prepare for longer sales cycles through improved cash flow management and evolved KPIs focusing on relationship building over short-term placements.

## The Path Forward

Job hugging represents a fundamental shift in career thinking, not a temporary trend. Recruitment agencies adapting quickly can gain significant competitive advantages as quality recruitment services become more valuable in scarce candidate markets.

Success requires viewing job hugging as an opportunity to build deeper relationships rather than an obstacle. Agencies focusing on long-term value creation over transaction volume will emerge stronger and more resilient.

The job hugging era demands complete reimagining of recruitment operations. Those embracing this challenge will be well-positioned for sustained success regardless of future market conditions.

**Written by Simon Lewis, Founder, RecConnect**

If you're a recruitment agency owner and would like to join a supportive peer group, [sign up today](https://buy.stripe.com/3cI00lczo8Hk8QA3JYD).`,
  },
  {
    id: "5-habits-successful-leaders",
    slug: "5-habits-successful-leaders",
    title: "5 Habits That Separate Successful Leaders from Everyone Else",
    date: "2025-09-10",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/leadership-habits-hero.jpg",
    summary: "Leadership is about the daily habits that compound over time, creating the kind of influence that genuinely moves things forward. After studying hundreds of leaders across industries, five patterns emerge consistently among those who get the best results.",
    content: `**1. They Protect Their Calendar Like Revenue**

Successful leaders understand that time is their most finite resource, and they treat it accordingly. This isn't about being busy; it's about being intentional.

What this looks like in practice:
• Time blocking for deep work – strategic thinking, planning, and high-impact projects get dedicated, uninterrupted slots
• Meeting audits – every recurring meeting gets questioned: "Does this drive action or just provide updates?"
• Energy mapping – they schedule demanding tasks during their peak energy hours and batch similar activities together (sprint working)

The best leaders don't just manage their time; they engineer their days around what creates the most value. They've learned that saying yes to everything is saying no to the things that matter most.

**2. They Lead with Radical Transparency**

Great leaders don't sugarcoat reality. They face it head-on and help others do the same. This creates trust, accelerates problem-solving, and builds resilient teams that can handle whatever comes next.

This means:
• Sharing the 'why' behind decisions, not just the 'what'
• Admitting when they don't know something, rather than pretending they have all the answers
• Creating safe spaces for bad news so problems surface early when they're still manageable
• Being honest about failures and what they learned from them

Transparency isn't about oversharing – it's about creating clarity that enables better decisions at every level.

**3. They Invest in Systems, Not Just People**

While everyone talks about hiring great people, successful leaders know that even talented individuals will struggle without the right systems supporting them. They build infrastructure that makes good performance easier and great performance inevitable.

Key areas they systematize:
• Decision-making processes: Clear frameworks for who decides what and when
• Communication flows: Regular rhythms for updates, feedback, and strategic discussions
• Performance measurement: Metrics that really matter, tracked consistently and acted upon
• Knowledge management: Ensuring critical information doesn't live in one person's head

The goal isn't to create bureaucracy; it's to create predictable excellence that scales beyond any individual.

**4. They Cultivate Relationships Before They Need Them**

The most effective leaders understand that relationships are built in peacetime, not during crises. They invest consistently in their network – both internal and external – because they know that almost every significant opportunity or challenge will require other people to succeed.

How they do this:
• Regular check-ins with key stakeholders, clients, and team members
• Value-first networking that promotes how they can help others, not what they need themselves 
• Cross-functional collaboration that smashes silos by building genuine relationships across departments
• Industry engagement that allows them to stay connected to peers, competitors, and thought leaders in their space

Investing in building meaningful relationships – it's about recognising that business is fundamentally about humans working together to create value.

**5. They Never Stop Learning – But They're Strategic About It**

Successful leaders are voracious learners, but they don't learn randomly. They identify specific gaps in their knowledge or skills and pursue targeted development that directly impacts their effectiveness.

Their learning approach:
• Peer learning: They join mastermind groups, peer communities, advisory boards, or informal networks with other leaders
• Just-in-time education: They learn what they need when they need it, not years in advance
• Experimentation mindset: They test new approaches on a small scale before rolling them out broadly
• Feedback loops: They actively seek input from their teams, customers, and advisors

They treat personal development as a strategic investment, not a nice-to-have activity they'll get to someday.

**The Compound Effect**

What makes these habits powerful isn't any single action – it's the cumulative impact of small, consistent actions over time. 

• A protected calendar leads to better strategic thinking
• Transparency builds trust, which enables faster execution
• Systems create reliability, which attracts better people
• Strong relationships open doors to opportunities
• Continuous learning keeps you ahead of change

Standout leaders are those who understand that leadership is a practice, not a position. They show up every day with intention, build systems that outlast them, and create environments where others can do their best work.

Because in the end, leadership isn't about grand gestures or inspiring speeches. It's about the unglamorous, consistent practices that create the conditions for extraordinary results.

*Simon Lewis, Founder, RecConnect – the recruitment leader community*`,
  },
  {
    id: "efficiency-revolution-sprint-working",
    slug: "efficiency-revolution-sprint-working",
    title: "The Efficiency Revolution: How Sprint-Working Changes Everything",
    date: "2025-08-26",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/musings-predictions.jpg",
    summary: "When focus meets intensity, productivity doesn't just improve \u2013 it transforms. We've been conditioned to think that steady, consistent effort wins the race. But what if the secret to extraordinary productivity isn't pacing yourself \u2013 it's sprinting?",
    content: `When focus meets intensity, productivity doesn't just improve – it transforms.

We've been conditioned to think that steady, consistent effort wins the race. But what if the secret to extraordinary productivity isn't pacing yourself – it's sprinting?

At some point in 2022 I adopted the principle of sprint-working, and it immediately increased my efficiency, providing me significantly more time in the day to pursue what I really wanted to do.

So here I am, with some science to back it up, pontificating the virtues of speedy delivery.

Sprint-working flips traditional productivity advice on its head. Instead of trying to maintain peak performance for eight hours straight, you work in intense, focused bursts followed by deliberate recovery. The results aren't just impressive – they're game-changing.

**The Science Behind the Sprint**

Your brain isn't designed for marathon focus sessions. Research shows that sustained attention starts declining after just 20-45 minutes, yet most of us try to power through hours of 'work' in one go that is just distracted motion.

Sprint-working aligns with your natural cognitive rhythms. By working in concentrated bursts – typically 30-90 minutes (my personal optimum is 45-minutes) – you tap into what psychologists call hyperfocus: a state where your brain operates at peak efficiency with minimal mental fatigue.

The neurological benefits are remarkable:
• Enhanced creativity through alternating focus and relaxation
• Improved memory consolidation during recovery periods
• Reduced mental fatigue from shorter intense sessions
• Increased dopamine production from frequent completion cycles

**Why Sprints Multiply Your Output**

**1. Deadline Magic**
Nothing focuses the mind like a ticking clock. When you know you have exactly 45 minutes to complete a task, you eliminate fluff and get straight to what matters. Parkinson's Law (suggesting you will stretch out the completion of your tasks until they fill the time available to complete them), works in reverse: tight deadlines create tight thinking.

**2. Single-Tasking Mastery**
Sprints force you to choose one thing and commit completely. No email checking, no social media scrolling, no 'quick' conversations. This mono-focus massively increases your effective output compared to fragmented attention.

**3. Natural Energy Cycles**
Your energy isn't constant throughout the day; it naturally undulates in predictable patterns. Sprint-working lets you align your most demanding tasks with your highest energy periods while using low-energy times for recovery and planning.

**4. Momentum Multiplication**
Completing a sprint triggers a psychological reward that fuels the next session. Instead of one long slog, you create multiple victories throughout your day, each one building momentum for what comes next.

**The Sprint Framework That Works**

**The Basic Structure:**
• Sprint Duration: 25-90 minutes (find your sweet spot)
• Recovery Period: 5-20 minutes of genuine rest
• Daily Limit: 3-5 sprints maximum (quality over quantity)
• Weekly Rhythm: Include longer recovery periods and planning sessions

**Sprint Planning Essentials:**
• Choose your single focus before starting the timer
• Eliminate all distractions: phone, notifications, other people
• Define what 'done' looks like for this sprint
• Set your environment up for success

**Recovery That Actually Restores:**
• Move your body – walk, stretch, breathe deeply
• Hydrate and nourish yourself properly
• Avoid screens and stimulation
• Process what you just accomplished

For business leaders, sprint-working allows you to:
• Manage emails in dedicated time blocks
• Review and respond to critical communications
• Make strategic decisions in concentrated sessions
• Handle administrative tasks efficiently
• Prepare for important meetings and presentations
• Tackle analysis without interruption

**The Compound Effect of Sprint Habits**

Week 1: You'll notice immediate improvements in focus and task completion
Month 1: Your capacity for deep work will expand significantly
Quarter 1: You'll accomplish more in less time with higher quality output
Year 1: Sprint-working becomes your natural operating mode, giving you a massive competitive advantage

**Common Sprint Pitfalls (And How to Avoid Them)**

**The Perfectionism Trap:** Sprints are about progress, not perfection. Ship what you complete and refine in the next sprint.

**Don't Skip Recovery:** Breaks aren't optional – they're when your brain processes and consolidates what you just learned.

**The Duration Steal:** Longer isn't better. Find your optimal sprint length and stick to it.

**The Distraction Drift:** One notification can destroy an entire sprint. Protect your focus time like you'd protect a customer meeting.

**Making Sprint-Working Stick**

Start Small: Begin with 25-minute sprints and gradually find your optimal duration
Track Results: Measure what you accomplish versus traditional working methods
Adjust Timing: Experiment with different sprint lengths for different types of work
Build Rituals: Create consistent start and stop routines that signal sprint mode

**The Sprint Advantage**

For me, sprint-working isn't just another productivity hack. It's a fundamental shift in how you approach work. By working with your brain's natural rhythms instead of against them, you don't just get more done, you get the right things done with less stress and higher quality.

In a world of constant distraction and competing demands, the ability to focus intensely for short periods isn't just valuable – it's your secret weapon.

Stop trying to run a marathon. Start sprinting. Your best work is waiting.

*Simon Lewis, Founder, RecConnect – the recruitment leader community*`,
  },
  {
    id: "behind-the-billings-ops-tech-future",
    slug: "behind-the-billings-ops-tech-future",
    title: "Behind the Billings: Why Great Ops, Tech & Back Office Will Decide Your Recruitment Agency's Future",
    date: "2025-08-14",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/musings-behind-billings.jpg",
    summary: "Let's be honest, recruitment has always glorified the front line. Big deals. Top billers. Leaderboards. But in today's market, the smartest agencies know the real power is behind the scenes.",
    content: `Great operations, forward-thinking tech, and a watertight back office aren't just support functions, they're the difference between chaotic growth and sustainable dominance.
And in a world increasingly driven by AI, automation, and rising client expectations, they're your unfair advantage.

**⚙️ Ops: Your Engine Room for Scale**

Operations used to be seen as admin. Now, it's where competitive advantage is built.
✔️ Processes that run without friction
✔️ Consultants freed from firefighting
✔️ Data flowing cleanly across the business
✔️ Delivery that feels effortless to clients and candidates

The agencies that scale aren't always the flashiest, but they are the most efficient.

**💻 Tech: The Stack That Separates the Winners**

The right tech stack doesn't just support your team, it amplifies them.
🔍 AI-driven sourcing
🤖 Automation for admin, follow-ups & compliance
📊 Real-time dashboards to steer decision-making
🔄 Seamless CRM → ATS → onboarding flow

If your consultants are still stuck re-keying data or wrestling with four different logins, you're not evolving, you're eroding.

**🏢 Back Office: The Trust Machine**

Here's the part most don't talk about… until it breaks.
Your back office is your brand's heartbeat:
💰 Payroll. Contracts. Timesheets. IR35. Invoicing.
🎯 The real experience for clients and contractors, post-placement.
✨ The system that makes your agency feel polished, premium, and professional.

In a market flooded with options, trust is everything. And trust is built in the details.

**🚀 The New Model: Built from the Back, Not the Front**

As AI transforms the front of house – automating sourcing, screening, comms – the battleground moves to execution. The winners will be the agencies who can deliver at scale, without drama.

That means:
✔️ Clean systems
✔️ Fast delivery
✔️ Repeatable performance
✔️ And infrastructure that can handle growth

**Want to run a high-performance agency in 2026 and beyond?**

Don't just hire another consultant. Level up your engine room.
Because great ops don't just support growth – they make it inevitable.

Ready to optimize your operations? Join our [Microsoft Stack RecOps Workshop](/events/microsoft-stack-recops-nov-2025) on November 5th to learn how to leverage Microsoft's integrated technology ecosystem for maximum efficiency.

Visit the [RecConnect Supplier Directory](/suppliers) to find back office, tech, and ops providers to help you level-up your recruitment agency.`,
  },
  {
    id: "blow-it-up-perm-recruitment",
    slug: "blow-it-up-perm-recruitment",
    title: "Blow It Up: Why Your Perm Recruitment Model Is a Ticking Time Bomb",
    date: "2025-08-04",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/musings-blow-it-up.jpg",
    summary: "Let's be blunt: permanent-only recruitment is a 2010 solution in a 2030 world. And if your agency is still clinging to the comfort blanket of perm deals, you're sitting on a slow-motion implosion.",
    content: `The market is changing fast and it's not waiting for you to catch up.

**The Modern Workforce Doesn't Want 'Permanent'**

Today's professionals want flexibility, freedom, and fluidity. They're not dreaming of a gold watch and a 30-year career. They're chasing portfolio careers, project-based work, and global gigs. Contractors, freelancers, temps – they're the new backbone of the working world. If you're not placing them, you're invisible to a massive swathe of top-tier talent.

**Economic Pressure Has Flipped the Hiring Model**

In uncertain times, businesses want agility. They need workforce elasticity, not headcount baggage. Temporary and contract solutions give them scale without commitment – and smart agencies are cashing in. Meanwhile, perm-only recruiters are stuck in feast-or-famine cycles and watching their pipelines dry up when markets wobble.

**Recurring Revenue Is the Game-Changer**

Temp and contract recruitment isn't just responsive – it's resilient. It builds predictable, recurring income streams. You're not resetting to zero each month. You're growing a base of stable revenue that gives your agency power, confidence, and cash flow. That's how you build value. That's how you scale. That's how you survive.

**Clients Want More Than a CV**

The days of 'fill the role, take the fee, move on' are over. Clients want partners, not CV-pushers. They want workforce strategies, compliance insight, IR35 guidance, and on-demand talent. They want recruiters who understand the NOW.

And now is temp and contract.

**The Truth Bomb**

If your agency isn't evolving into temp, contract, and project-based recruitment, you're not just behind – you're at risk.

Don't just tweak your model. Rebuild it. Don't wait for disruption. Be the disruption.

The world has changed. Has your agency?`,
  },
  {
    id: "behind-the-scenes-recconnect-hq",
    slug: "behind-the-scenes-recconnect-hq",
    title: "Behind the Scenes at RecConnect HQ \u2013 And What it Means for You",
    date: "2025-07-29",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/musings-behind-scenes-hq.jpg",
    summary: "Operating at the parapet of recruitment can be perilous as it is pleasing. Over the ridge here at RecConnect HQ we\\",
    content: `Wearing a tin hat is advantageous. We've become generals at strategic manoeuvres.

And it is of course this jeopardy that stirs the thrills and reactions.

Evoking emotions, marginal gains, shared intelligence, problem-solving, business advantage, high performance, challenging convention, spirited endeavour – it all underpins the premise of what we do. It is the essence of our community.

Your community.

In this feature I uncover how and why we do what we do and the benefits to you.

First, let's look at the ammunition troubling the recruitment industry today:
• Economic uncertainty
• Political turmoil
• Global conflicts
• Employment reforms
• Befuddled leadership

It's an arsenal of challenges, none of which us laypeople can control. Save for the final point, which we'll come back to near the end.

Since 2018 RecConnect has supported recruitment businesses of all sizes across multiple sectors throughout the UK and beyond. We've withstood Covid, economic meltdowns, governmental mishaps, Brexit, conflicts, false dawns, changing climates, presidential mega-mouths, and the runaway tech revolution.

But we don't exist to survive; we're here to thrive. And help our members do the same.

This is where it gets interesting.

**Community First**

RecConnect values: Aim high. Act with integrity. Make is special.

We live these values in everything we do. Communications, event production, content creation, leadership development, business advisory, connecting people. We do it with aeons of experience, sure, but it's more than that. It's a passion thing. A quest. Our Ikigai.

Because believe me, you don't run communities for the money!

Whatever we plot, whatever the plans, it's with our members front of mind. Let's be frank, if it wasn't, we might just as well pack up the old kit bag and head off home.

Community is the bedrock of everything. And there's so much more to come.

**Unique Knowledge**

Perhaps one of the most underrated components of RecConnect is our team's industry understanding. Between Maria (ops), Ricky (marketing), Jack (commercial) and myself (sales & strategy), we've seen it and done it all.

We've scaled and sold recruitment, tech and job board businesses, built award-winning brands, worked across multiple sectors, and guided countless people on their respective journeys to attainment. We've accomplished this with gusto and a relentless energy that makes things as fun as they are empowering.

Our combined and varied experience is rare. And it allows us to produce outcomes worth serious value. Stay tuned for gold and drop us a note anytime.

**Live Experiences**

RecConnect was established as an experiential events business and pre-Covid bonded bosses through unique and magical in-person occasions.

Connecting people remains the heartbeat of what we do.

This is why we spend so much time researching the industry, constantly seeking feedback, undertaking reconnaissance on events beyond the recruitment silo, speaking to influencers, and always, always, always, striving to make things better.

Aiming high.

Look out for reimagined workshops, lunch and learns, exclusive member dinners, meetups, flagship leadership and marketing experiences, and online huddles to inspire.

**Operation Operations**

Whether you're flying solo or guiding a team, your operations setup is fundamental to your business' success. From CRM integrations to compliance to outsourcing, sorting your procedures is vital.

Alongside vetted partners, RecConnect helps recruiters improve efficiency, sell more and spend less. By building a modern tech stack, implementing slick processes, professionalising marketing, automating as much as possible, recruitment owners get to spend more time doing what they enjoy.

We love supporting this stuff!

**Leadership**

We talk about leadership a lot. And that's because it's an obsession. We believe that great leadership underpins success, recreationally as well as commercially.

Successful leaders don't allow external factors to be their judge. They take ownership. They accept responsibility. We can only control what we can control.

Our community is jammed with brilliant leaders. We speak with them regularly. We hear their language: it resonates, it inspires, it stokes fires, and it fans the flames of creativity.

As the industry responds to rapid evolution amidst a sea of rudderless navigators, our boat is floated by helping change mindsets, moving dials, finding marginal gains, pushing boundaries, and reaching summits.

And the best bit? We're just getting started.

Stick around to benefit from a raft of perks and services designed to help you grow.

RecConnect: Our passion. Your community.

Get the most from RecConnect by upgrading to our Club membership. [View member benefits](/), contact simon@recconnect.co or WhatsApp us on +44 7379 123176 for more details.`,
  },
  {
    id: "salt-report-july-2025",
    slug: "salt-report-recalibration-not-retreat",
    title: "Recalibration, Not Retreat: What July's Labour Market Data Means for Recruiters",
    date: "2025-07-25",
    author: "John Salt",
    category: "salt-report",
    trend: "down",
    image: undefined,
    summary: "July\\",
    content: `The UK jobs market is no longer running hot, but it hasn't frozen either. New data from the Office for National Statistics confirms what many in recruitment have felt on the ground for months: hiring activity is cooling, employer caution is rising, and inflation is proving stickier than expected.

This isn't a downturn; it's a reset. For recruiters, it's a chance to sharpen focus and adjust strategy.

June saw another 41,000 drop in payroll jobs, making it the fifth consecutive monthly decline and bringing the total job losses over the past year to 178,000. Unemployment nudged up to 4.7%, while the number of vacancies slipped to 727,000, now officially below pre-pandemic levels.

After years of a red-hot market, we're seeing a return to something closer to balance. Clients are hesitating, hiring cycles are lengthening, and the easy wins of 2021 and 2022 have faded. But with candidate availability on the rise, opportunity still remains for those who adapt quickly.

## Wage Growth Losing Steam but Still Positive

Wage growth, meanwhile, is losing steam but still running ahead of inflation. Regular pay rose 5.0% over the last quarter, with real wages growing modestly at 1.1%. Public sector pay, buoyed by government commitments, outpaced the private sector at 5.5% versus 4.9%. Candidates remain motivated, but their expectations are tempered. Employers are more selective and more cost-conscious, yet they still need skilled people, and in a market that feels increasingly complex, they're turning to recruiters to help them navigate.

## Inflation Remains the Biggest Headwind

Inflation remains the biggest headwind. Consumer prices rose 3.6% in June, the highest in 18 months, and core inflation, driven by services, housing, and labour-intensive sectors, is proving tough to budge. The Bank of England has kept interest rates at 4.25% for now, with a possible cut expected in August. But with price pressures refusing to fall, recruiters shouldn't bank on a flood of stimulus anytime soon. This slower, more deliberate environment is likely to persist through the rest of the year and into early 2026.

## Sector Divide is Sharp

Sector-wise, the divide is sharp. Hiring in retail, hospitality and export-led manufacturing is softening quickly, squeezed by rising costs and uncertainty. But public sector hiring remains firm. Health, education, defence, and infrastructure projects continue to absorb talent and offer consistency. For recruiters, it's clear: sector focus matters more than ever. Agencies with a strong niche in resilient verticals are already outpacing generalists.

## Operational Efficiency No Longer Optional

What's also clear is that operational efficiency is no longer optional. Agencies investing in digital recruitment tools and automation are reporting time-to-hire reductions of up to 20%. In a market where both speed and cost matter more than ever, the firms that can move faster and smarter will win the work and keep it.

## This is About Discipline, Not Disaster

July's labour market update doesn't signal disaster. It signals discipline. Hiring hasn't stopped; it's just become more considered. Candidates haven't vanished; they're being more selective. The economy hasn't stalled; it's taking a breath.

This is the phase where smart agencies refine their proposition, double down on value, and align themselves with the sectors still moving. Because when the bounce comes, and it will, it's those who stayed sharp during the slowdown who'll move first.

**John Salt** is a commercial leader, business consultant, NED, and economist. [Connect with John via LinkedIn](https://www.linkedin.com/in/john-salt/)`,
  },
  {
    id: "june-2025-salt-report",
    slug: "june-2025-agencies-face-cooling-market",
    title: "UK Recruitment Agencies Face a Cooling Market and Strategic Reset",
    date: "2025-06-20",
    author: "John Salt",
    category: "salt-report",
    trend: "down",
    image: undefined,
    summary: "UK labour market cooling with inflation at 3.4%, unemployment rising to 4.6%, and recruitment agencies navigating strategic challenges.",
    content: `As the UK's labour market continues to cool, recruitment agencies are navigating a landscape of shifting demand, persistent inflation, and cautious employer sentiment. The latest data from the Office for National Statistics (ONS) paints a nuanced picture, one that calls for agility and innovation from the sector.

**Inflation and Interest Rates: A Slow Burn**
UK inflation eased slightly in May, dropping to 3.4% from April's 3.5%, as lower transport costs offset persistent rises in food prices, particularly household staples. Core services inflation, however, remains elevated at 4.7%, reflecting ongoing pressures from wage growth and business costs.

This has led the Bank of England to keep interest rates steady at 4.25%, signalling a cautious approach amid global volatility and uncertain oil markets. Most analysts expect rates to remain high until later in 2025 or early 2026, keeping borrowing costs elevated for businesses and consumers alike.

**Labour Market: Cooling, Not Collapsing**
The labour market is undeniably cooling. Payrolled employment fell by 109,000 in May, the steepest monthly drop since 2014 outside the pandemic, and is down by more than 270,000 year-on-year. The unemployment rate has edged up to 4.6%, from 4.4% a few months ago.

Vacancies have now declined for the 35th consecutive quarter, with 736,000 open roles in March–May 2025, which is about 59,000 fewer than pre-pandemic levels. The decline is widespread, with 15 out of 18 sectors reporting fewer job openings.

Despite this, the market remains relatively tight, with 1.9 unemployed people per vacancy, and wage growth, though slowing, still outpaces inflation. Average regular pay (excluding bonuses) rose by 5.2% year-on-year in the quarter to April, with real wage growth at around 1.4–1.5%.

**Recruitment Agencies: Navigating the Reset**
For recruitment agencies, this environment presents both challenges and opportunities. Lower vacancy numbers mean increased candidate availability, but clients are more cautious about hiring, particularly in the face of rising costs, such as new tariffs, higher National Insurance contributions, and global economic uncertainty.

**Looking Ahead: A Mid-Cycle Pause, Not a Downturn**
This is not a collapse, but a recalibration. The UK labour market is easing from its post-pandemic peak, yet inflation remains above target and wage growth stays robust. For recruitment agencies, the path forward requires agility and foresight to:

• Reposition in stable or government-supported sectors to capitalise on ongoing demand.
• Leverage digital tools to streamline processes, shorten placement times, and improve candidate experience.
• Balance caution with investment in both back-end efficiency and candidate engagement.
• Plan for the next upswing (most likely late 2025 or early 2026) as inflation cools and interest rates begin to ease.

In short, this is a mid-cycle pause, not a downturn. Recruitment agencies that adapt now by embracing AI digital transformation, refining their talent attraction strategies, and focusing on resilient sectors, will be best positioned to ride the next wave of growth.`,
  },
  {
    id: "april-2025-salt-report",
    slug: "april-2025-tariff-and-tumble",
    title: "It's just a bit of Tariff and Tumble: UK Jobs Take a Hit",
    date: "2025-04-28",
    author: "John Salt",
    category: "salt-report",
    trend: "down",
    image: undefined,
    summary: "US tariff policies impact UK exports while payrolled employees drop by 56,000 in March, double the forecasted decline.",
    content: `Will America's latest tariff tactics have a further chilling effect on the UK hiring spree? As the US ramps up duties on key imports, British exporters are bracing for a hit—and with March's ONS data revealing a sharper-than-expected slowdown, recruiters teams face a perfect storm.

In March 2025, the number of payrolled employees fell by more than double the forecasts, dropping by 56,000 against an expected decline of 25,000—a fall not seen since the COVID depths of 2020. Vacancies took another hit, slipping by 22,000 to 797,000, pushing total openings below pre-pandemic levels for the first time since 2021. The unemployment rate nudged up to 4.5%, while the ratio of jobseekers per vacancy crept north of 1.9. Taken together, these figures paint a picture of an ever tightening market, made foggier by global policy shifts.

**Tariffs as a 'Yield War' Weapon Across the Atlantic**
Across the Atlantic, the US administration's new tariffs—ostensibly aimed at protecting domestic industries—are widely viewed as a calculated move to slow growth and rein in bond yields. With the refinancing of US Treasuries looming at the end of 2026, it needs to roll over $9 trillion (yes, trillion with a 'T') in maturing Treasury bonds. This equates to roughly one third of the entire annual GDP for the USA, and is about double the size of Germany's annual GDP – so, you see the scale of debt that needs to be refinanced.

Most of this debt was issued during the near-zero interest rate years — and we won't be seeing that again anytime soon. Currently, the 10-Year U.S. Treasury Yield is hovering below 4.20%, already down from its peak around 4.60% in Q4/2024, and remember every percentage point shaved off the 10‑year yield translates to billions in savings for the US government. Yet the side‑effect is a weaker US economy, reduced demand for UK goods, and, crucially, fewer jobs in our export‑driven sectors. Analysts warn that UK exports to the US could fall by up to 4% over the next twelve months, forcing manufacturers and logistics firms to trim headcount.

**Bright Spots Amid the Gloom**
It's not all downturn, though. Public administration and defence continue to enjoy vacancy levels some 17,000 above pre‑Covid figures, while construction holds roughly 15,000 more positions than January 2020. These sectors, underpinned by government spending and infrastructure projects, offer rare pockets of hiring resilience in an otherwise cooling market.

**Charting a Course Forward**
With payrolled employees plunging and vacancies dipping below pre‑pandemic norms, the latest data is sobering. Yet rising candidate availability and pockets of sectoral strength offer recruiters the chance to refine their approach. Embracing digital hiring tools—already cutting time‑to‑hire by 20%—and sharpening your value proposition can turn today's challenges into tomorrow's competitive edge.

As UK firms grapple with the ripple effects of US tariff policy and home‑market softening, one question lingers: will a strategic recruitment shake‑up transform this slowdown into a springboard for future growth?`,
  },
  {
    id: "march-2025-salt-report",
    slug: "march-2025-riding-the-wave",
    title: "Riding the Wave: Unlocking Potential Amid a 1% Economic Shrinkage",
    date: "2025-03-24",
    author: "John Salt",
    category: "salt-report",
    trend: "neutral",
    image: undefined,
    summary: "UK economy shrinks 1% in January while wages grow 5.9% and vacancies remain above pre-Covid levels despite 31st consecutive decline.",
    content: `Could a slight economic contraction signal a new phase of growth? January 2025's ONS figures show that the UK economy shrank by 1% last month—a sign of slowing growth, yet one that may also open up fresh opportunities. Remember too, this was only a one month measure, we will need to see more data in the next few months to really see a clear picture.

Recent data reveals that between November 2024 and January 2025, job vacancies fell by 1.1% to 819,000. This marks the 31st consecutive quarter of decline and an 11.8% drop compared with the previous year. Despite these falls, total vacancies remain 2.9% above pre-Covid levels, suggesting that the demand for skilled workers still holds firm even as hiring slows. In other words, despite a cooling in hiring activity, employers are still actively seeking talent to fill critical roles.

On the wage front, the news is somewhat brighter. Nominal annual pay, excluding bonuses, increased by 5.9% between October and December 2024. Once inflation of 2.5% is factored in, this equates to a healthy real wage boost of 3.4%. In the private sector, wages rose by 6.2%, compared to a 4.7% rise in the public sector, helping to support consumer spending even as other parts of the economy contract. This not only supports consumer spending—a key engine of economic growth—but also signals that businesses are willing to invest in their workforce despite broader economic challenges.

There are clear differences between sectors, too. While industries such as retail, hospitality, and motor vehicle repairs have seen significant drops in vacancies, some areas are faring better. Vacancies in public administration and defence are up by about 15,000 compared with pre-pandemic levels, and construction shows an increase of roughly 13,000 roles. These sectors, buoyed by government investment and ongoing infrastructure projects, offer a hint of resilience and potential growth.

Business sentiment remains cautious. Many employers are planning to cut back on recruitment in the near term due to rising costs and the expected increase in National Insurance Contributions—from 13.8% to 15% on lower salary bands. However, there is a shift towards more efficient hiring methods. Digital recruitment tools are already reducing time-to-hire by up to 20%, helping firms to respond quickly to changes in the market and tap into new talent pools, particularly in tech and healthcare.

Despite the slowdown, the unemployment rate has steadied at 4.4%, and the ratio of unemployed persons per vacancy has nudged up slightly from 1.8 to 1.9. These figures suggest that while the market is tightening, there remains a pool of capable jobseekers.

So, while the 1% contraction in January may seem like a setback, it also highlights areas where opportunities lie. As hiring slows in some sectors, others—especially those supported by public spending and modern recruitment technologies—are emerging as bright spots. With wages still growing and businesses adapting to new challenges, the UK labour market is at a crossroads.

With the 1% monthly contraction behind us, and vacancies still strong alongside rising wages, can these trends spark a turnaround in our labour market?`,
  },
  {
    id: "february-2025-salt-report",
    slug: "february-2025-cracks-beneath-surface",
    title: "The UK Labour Market: Cracks Beneath the Surface?",
    date: "2025-02-25",
    author: "John Salt",
    category: "salt-report",
    trend: "down",
    image: undefined,
    summary: "Strong wage growth of 5.9% contrasts with 31st consecutive quarterly decline in vacancies, raising questions about market stability.",
    content: `A key contradiction defines the UK labour market as we head into February 2025: strong wage growth alongside declining vacancies.

While the headline unemployment rate remains relatively stable, a deeper dive into the latest ONS data reveals a concerning trend: the 31st consecutive quarterly decline in job vacancies. This sustained downward movement, coupled with other economic indicators, begs the question: is the historically resilient UK labour market on the verge of a more significant shift?

The ONS reports a 1.1% decrease in vacancies between November 2024 and January 2025, bringing the total to 819,000. This decline, though seemingly small, is significant because it's widespread. Eleven of the 18 industry sectors have seen reductions, with the most dramatic falls in electricity, gas, steam, and air conditioning supply (14.6%) and wholesale and retail trade (8.3%). These figures underscore a cooling demand for labour across key sectors of the economy. While total vacancies remain 2.9% above pre-pandemic levels, the persistent downward trajectory raises concerns about future hiring intentions.

Real wages continue to grow, outpacing inflation. Nominal annual pay growth (excluding bonuses) reached 5.9% between October and December 2024, translating to a 2.9% real wage increase year-on-year. This positive trend, driven primarily by the private sector, could support consumer spending and offset some of the negative effects of declining vacancies. However, it also presents a challenge for businesses already grappling with rising costs and may not entice the Bank of England to make those two further rate cuts in 2025 we need to fuel growth.

Business sentiment appears to be shifting. Surveys from organisations like the CIPD and FSB suggest growing caution amongst employers. Many are considering reducing headcount or scaling back recruitment plans in anticipation of a tougher economic climate. This hesitancy is further compounded by upcoming increases to National Insurance Contributions and minimum wage, placing additional pressure on businesses, particularly in sectors like retail and hospitality.

While the current data paints a mixed picture, the consistent decline in vacancies, coupled with rising business costs and cautious hiring intentions, suggests that the UK labour market may be approaching a tipping point. Whether this becomes a full-blown crisis or a more moderate adjustment remains to be seen. Close monitoring of key indicators, including vacancy rates, unemployment figures, interest rates and business sentiment, will be crucial in the coming months to assess the true direction of the UK's employment landscape. The key question remains: is this a temporary lull or the beginning of a more profound transformation?`,
  },
  {
    id: "nineties-revolution",
    slug: "nineties-revolution",
    title: "How the '90s Set the Scene for a Recruitment Revolution (Part 1)",
    date: "2025-01-27",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/musings-90s-revolution.jpg",
    summary: "Reflecting, recruiting in the nineties was brilliant. A time when mobile phones were shaped like bananas, CVs were faxed, and overflowing ash trays smouldered on every paper-strewn desk.",
    content: `A time when mobile phones were shaped like bananas, CVs were faxed, and overflowing ash trays smouldered on every paper-strewn desk.

Data was stored in flip-lidded boxes, lunch was almost always liquid, and go-getters donned sharp pinstriped suits, unfeasibly large-knotted ties, and shoes so shiny you could see your carefully quaffed hair in them.

This was a time leveraging the abundancy of estate agents, double glazing salesmen, market traders, and pension pushers who'd emanated from the eighties – an uprising of the swashbuckling streetwise moving on from the apathetic austerity of the long, bleak, high unemployment rates of the preceding decade.

Where everything seemed grey under early Thatcherism, the liberalised eighties represented optimism and opportunity. Life got colourful, disco ruled, and almost anything seemed to go. But this was nothing compared to what was about to happen for the aspirational, opportunistic, businessperson.

Because for those sales rebels without so much of a cause, the nineties offered the chance to create something from nothing. Swag met swagger.

And as the notion of recruitment as a proper profession really kicked off, handwork, endeavour, and charm were handsomely rewarded. Finding untapped talent – as it wasn't known then – was alchemy. For even the half-savvy twenty-something, this era was sopping with sovereign.

Fast cash, fast cars, fast lifestyle. Commission incentives, whilst not new, fuelled rivalries that not only pushed competition, but boundaries too. Stop for a moment and an opportunity was gone. There was no such thing 'another bus'. Champagne and razorblades some called it, others, more reasonably, a rollercoaster.

Whilst many consider nineties recruiters as brash, bullish, bombastic, overall, this period remains vaunted for producing many of the bright minds and practices mimicked today. Indeed, frontrunners then remain protagonists today.

The recruitment revolution had begun. But where would it go?

Part 2 ('Reputations') to follow…

*Simon Lewis, Founder, RecConnect – the recruitment leader community*`,
  },
  {
    id: "january-blues",
    slug: "january-blues",
    title: "Why January Gives Recruiters The Blues",
    date: "2025-01-20",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/musings-january-blues.jpg",
    summary: "Heightened expectations. Misalignment. There\\",
    content: `And if I weren't feeling so loquacious I could just leave it there.

But I'll explain.

There's a common misconception that January heralds the dawn of a new era. A mythical moon where the world awakens desperate for career change and companies start hiring for fun.

It's fallacy.

Because New Year January job board data forever suggests that rather than hawking new year opportunities, workers are instead in slumber. Perhaps it's the festive hangover; the miserable weather; the dark mornings; hunkering down; the deflated sense that nothing much has changed since those midnight fireworks after all.

Add economic uncertainty into the mix and you've got a cocktail of blah!

No, January is not the month for jumping. February is.

So, how do we manage the malaise?

Understanding that in general the January market is more trickling stream than raging river, helps manage expectations and reshapes what success looks like at the end of the month.

How many customer calls have been made? Has candidate outreach going? Is the brand being amplified? And what are the results of the Q1 back office/tech stack audit? Because triumph needn't only be measured in dollars.

But I get it. With December closing for business earlier each year and folk returning to the frontline later than ever, it can easily be four weeks between the last and first piece of meaningful commercial action. Which for recruiters, is an aeon.

Those with recurring revenue don't feel the pinch so much, of course. And all sectors are different; hospitality output in January is a world away from tech, for example. Though whatever your sector, the need for calm and consistency remains.

The first month of the year is rarely energetic. We can feel deafened by the silence. But turn to LinkedIn and all the noise is about how well everyone is doing and how busy they are. Don't be fooled. Rarely is a recruiter jammed in January.

So, the best advice for getting through January is this: declutter, remain focused, say no, continue the things that work, keep connected, and above all, stay calm.

*Simon Lewis, Founder, RecConnect – the recruitment leader community*`,
  },
  {
    id: "five-things-2025",
    slug: "five-things-2025",
    title: "5 Things All Recruiters Should Have Already Have Done in 2025",
    date: "2025-01-10",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/musings-5-things.jpg",
    summary: "As well as frosty fingers, January brings eternal optimism that the new year will be better than the last.",
    content: `And considering that for most 2024 presented a swath of challenges and uncontrollable circumstances, we're all forgiven for anticipating the next twelve months being a significant improvement on what came before it.

But.

With economists predicting a slow financial recovery and with the new government still finding its feet, not a huge amount will change unless we change ourselves. A switch in mindset, a realignment of priorities, a pivot, a focus on what really matters. And for recruiters, this means taking responsibility, being accountable, and owning our journey. This is the moment for leaders to step up to the plate.

So, if we except that the first week frontline return from festivities largely involves reengagement and recalibration, here's five things all recruiters should already have done in 2025.

**1. Set Goals**

Whether you're flying solo or leading a team, deciding what 'good' will look like come the end of the year improves measurability, increases accountability, and clears a path to success. Understanding what you're working towards creates purpose and resolves the rudderless riddle.

If you haven't yet worked out where you and your business want to be by the end of the year, now's the time to do it.

**2. Decluttered**

Some people like to box stuff off and move on. I am one of those people.

Undoubtedly, like most, you'd have beavered away in December until you were content you'd done as much as you could. Which means anything left undone was either unable to be finished or not needing attention. Whatever remains in the latter box, bin.

You cannot march in earnest dragging clutter.

**3. Reengaged**

Contacting customers and candidates sounds obvious. I mean, it is the cornerstone of the job. But how we reengage is important because it sets the scene moving forward. If all you did last year was email people without the results you were hoping for, maybe t's time to switch it up.

Get on the phone.

This isn't a nod to the bygone years of phone-bashing; rather it's heralding a point of difference in an age of DMs.

**4. Mapped Marketing**

If you don't have a marketing plan, steel yourself for a difficult ride this year. 2025 is unquestionably THE year for cutting through the noise with a banging brand campaign signalling your values, products, and services.

Even if you're pure exec search firm or an independent trader, brand awareness is crucial.

And if you don't have the expertise inhouse, find help. You will need it this year.

**5. Got Connected**

2025 will see a record number of startup recruitment agencies. And whilst this will inevitably increase competition, it will also provide more opportunities to grow your network and influence knowledge.

Savvy recruiters have already started looking at relevant communities to engage with, leveraging split fees, supplier discounts, shared experiences, and peer group conversations that open unexpected doors to favourable outcomes.

*Simon Lewis, Founder, RecConnect – the recruitment leader community*`,
  },
  {
    id: "predictions-2025",
    slug: "predictions-2025",
    title: "MY TOP 6 RECRUITMENT PREDICTIONS FOR 2025 \ud83d\ude80 \ud83d\udc47",
    date: "2024-12-19",
    author: "Simon Lewis",
    category: "rec-matters",
    trend: undefined,
    image: "/images/articles/musings-predictions.jpg",
    summary: "It's been a challenging year and with economists predicting a slow recovery, 2025 will present its own challenges.",
    content: `But us recruiters are indefatigable. The industry is awash with savviness, inspiration, and gusto. As always, we'll push through and witness an upward tilt once more.

Whether you're flying solo, building, or scaling, here are my thoughts on what the New Year will bring.

**1. Increased L&D.** 2024 saw a huge drop in personal and employee development, enlarging silos. It was 'frontline' stuff. But without progression, employees will become detached from the pace of change and disengage. Business owners and leaders must invest in development 🧠

**2. Supernumerary start-ups.** If you think 2024 witnessed a spike in new agencies, just wait! Economic uncertainty, changing workers' rights, PAYE increases, will render redundancies, with many of the displaced choosing to go it alone. Opportunity will both shrink and grow. 📈

**3. Networks rule.** Who you know and how quickly you can identify and foster notable relationships, will define your ability to identify a point of difference and stay ahead of the chasing pack. Forward-thinkers will infiltrate communities, connect, create conversation, and pinpoint relevance. 👨 👩‍🦰

**4. Tech tightens.** No more new, shiny stuff. Magpies will plummet. Business leaders – some aided by COOs – will shred the superfluous and build tech stacks they NEED. From the correct CRM to back-office plug-ins, automation, and BD gen, if it ain't saving you time and driving revenue, bin it. 🤖

**5. M&As and MBOs abound.** Alongside new start-up prevalence, mergers, acquisitions, and management buy-outs will occupy an increasing percentage of industry movement, as battle-weariness takes hold. Succession planning is integral to exit execution and sunsets. 💰

**6. Brand importance.** Business elevation will gain increased importance, with sagacious leaders inspiring innovative content that hits the mark. Video content will continue apace, with AI's influence unabating. If you haven't considered your 2035 marketing strategy, you probably ought to. 🖍️

So, there you have it. I'm no soothsayer, but from the many, many, conversations I've had with industry protagonists this year, I'm certain my five chosen points (there are more, of course!) will play their part in what is sure to be continued change in this wonderful industry of ours.

I'd welcome comments on my thoughts and encourage those of your own. 😀

Meanwhile, here's to a peaceful festive break, a merry Christmas, and prosperous new year.

Thanks to the RecConnect community for consistently delivering excellence, and to the industry partners, friends and colleagues, who light fires every day 🔥 💥

Keep smiling, everyone 😀

*Simon Lewis, Founder, RecConnect – the recruitment leader community*`,
  }
];
