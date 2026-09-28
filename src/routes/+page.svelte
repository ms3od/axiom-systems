<script lang="ts">
  import DataPipelineDiagram from '$lib/components/DataPipelineDiagram.svelte';

  const coreFocusAreas = [
    {
      id: '01',
      title: 'Workflow Automation',
      description: 'Reduce repetitive operational work through connected, structured, and measurable workflows.',
      points: [
        'Elimination of manual re-keying across policy and accounting systems',
        'Automated document ingestion and structured metadata extraction',
        'Standardized handover triggers between underwriting and operations'
      ],
      icon: 'M4 6h16M4 12h16M4 18h7'
    },
    {
      id: '02',
      title: 'Data Integration & Quality',
      description: 'Connect fragmented information sources and improve data consistency through normalization, validation, and reconciliation.',
      points: [
        'Multi-format bordereau ingestion (Excel, CSV, portal extracts)',
        'Canonical schema mapping and strict field-level validation',
        'Automated 3-way reconciliation (cash, premium, carrier ledger)'
      ],
      icon: 'M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7M4 7c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3M4 7h16M9 11h6'
    },
    {
      id: '03',
      title: 'Intelligent Operations',
      description: 'Apply AI where it adds measurable value, while preserving reliable rules, human oversight, and traceability.',
      points: [
        'Deterministic business logic prioritized over statistical guesswork',
        'Targeted LLM extraction with verified source grounding',
        'Structured exception queues with complete human-in-the-loop audit trails'
      ],
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
    },
    {
      id: '04',
      title: 'Operational Intelligence',
      description: 'Transform operational information into clearer reporting, exception visibility, and actionable management insights.',
      points: [
        'Real-time operational triage dashboards for executive leadership',
        'Delegated authority compliance tracking and limit monitoring',
        'Bordereaux generation compliant with carrier and syndicate requirements'
      ],
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Operational Assessment',
      description: 'Understand the existing operation, map data flows across disconnected systems, identify bottlenecks, and establish measurable business objectives.'
    },
    {
      step: '02',
      title: 'Design',
      tagline: 'Technical Architecture',
      description: 'Define the workflow, deterministic validation rules, integration architecture, security requirements, and rigorous success criteria.'
    },
    {
      step: '03',
      title: 'Implement',
      tagline: 'Targeted Deployment',
      description: 'Develop and integrate a narrowly scoped solution with appropriate validation, audit logging, and human-in-the-loop operational review.'
    },
    {
      step: '04',
      title: 'Measure & Improve',
      tagline: 'Continuous Optimization',
      description: 'Evaluate operational results against baseline metrics, improve system reliability, and identify structured opportunities for further automation.'
    }
  ];
</script>

<!-- =========================================================================
     HERO SECTION (Midnight Navy / Technical Enterprise Minimalism)
     ========================================================================= -->
<section class="relative bg-midnight text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-slate-800">
  
  <!-- Subtle technical grid background -->
  <div class="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-60"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/60 to-midnight pointer-events-none"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <!-- Left Column: Copy & Value Proposition -->
      <div class="lg:col-span-7 space-y-6">
        
        <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="tracking-wide uppercase text-[11px]">Enterprise Automation &amp; Intelligence</span>
        </div>

        <div class="space-y-3">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Complex Operations.<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
              Intelligent Systems.
            </span>
          </h1>
          <p class="text-sm font-mono tracking-widest text-blue-400 uppercase font-semibold">
            Operational Clarity. Engineered.
          </p>
        </div>

        <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
          Axiom Systems develops intelligent software and automation solutions that connect fragmented systems, improve data reliability, and eliminate repetitive operational work.
          <span class="block mt-2 text-slate-400">
            Initially focused on specialty insurance organizations, including Managing General Agents (MGAs) and program administrators.
          </span>
        </p>

        <!-- CTAs -->
        <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="/contact"
            class="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-electric hover:bg-electric-hover rounded shadow-lg shadow-electric/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Discuss Your Operations</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="/solutions"
            class="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded transition-all"
          >
            <span>Explore Our Solutions</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <!-- Technical Credibility Indicators -->
        <div class="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-mono text-slate-400">
          <div>
            <span class="block text-white font-semibold">Deterministic</span>
            <span>Rules-first logic</span>
          </div>
          <div>
            <span class="block text-white font-semibold">Auditable</span>
            <span>Complete human review</span>
          </div>
          <div>
            <span class="block text-white font-semibold">Specialized</span>
            <span>MGA &amp; InsurTech focus</span>
          </div>
        </div>

      </div>

      <!-- Right Column: Structured Interface Graphic (Technical Specimen) -->
      <div class="lg:col-span-5">
        <div class="rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl p-5 backdrop-blur-md space-y-4">
          
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-slate-700"></span>
              <span class="w-3 h-3 rounded-full bg-slate-700"></span>
              <span class="w-3 h-3 rounded-full bg-slate-700"></span>
              <span class="text-xs font-mono text-slate-400 ml-2">axiom-runtime://spec</span>
            </div>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
              ACTIVE NODE
            </span>
          </div>

          <div class="space-y-3 font-mono text-xs">
            <div class="p-3 rounded bg-slate-950 border border-slate-800/80">
              <div class="text-slate-400 text-[11px]">PRIMARY TARGET DOMAIN</div>
              <div class="text-white font-bold text-sm mt-0.5">Specialty Insurance / MGA Operations</div>
              <div class="text-blue-400 text-[11px] mt-1">Multi-Carrier Delegated Authority</div>
            </div>

            <div class="space-y-2">
              <div class="flex items-center justify-between text-slate-400 text-[11px]">
                <span>CORE SUBSYSTEMS</span>
                <span>STATUS</span>
              </div>

              <div class="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-slate-800/60">
                <span class="text-slate-300">Bordereau Ingest &amp; Mapping</span>
                <span class="text-emerald-400 text-[11px]">NORMALIZED</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-slate-800/60">
                <span class="text-slate-300">Policy vs Cash Reconciliation</span>
                <span class="text-emerald-400 text-[11px]">3-WAY VERIFIED</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-slate-800/60">
                <span class="text-slate-300">Delegated Reporting Engine</span>
                <span class="text-blue-400 text-[11px]">COMPLIANT</span>
              </div>
            </div>

            <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Security: TLS 1.3 / Isolated Ingestion</span>
              <span class="text-slate-300">Stage: Early Discovery</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<!-- =========================================================================
     THE PROBLEM (Clean Transition into Light Section)
     ========================================================================= -->
<section class="py-20 bg-offwhite border-b border-slate-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-3xl space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-electric uppercase tracking-wider">
        Operational Reality
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-midnight">
        Disconnected Systems &amp; Fragile Workflows
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed">
        Modern organizations depend on complex technology environments. Yet critical information frequently remains scattered across disconnected applications, spreadsheets, documents, and manual workflows.
      </p>
      <p class="text-base text-slate-600 leading-relaxed">
        For specialty insurance organizations, this fragmentation can complicate data reconciliation, reporting, operational visibility, and process execution. Axiom Systems investigates and addresses these challenges through intelligent integration, automation, and purpose-built operational software.
      </p>
    </div>

    <!-- 4 Problem Diagnostic Points -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div class="p-6 rounded-lg bg-white border border-slate-200 shadow-sm space-y-3">
        <div class="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center font-mono font-bold text-xs">
          01
        </div>
        <h3 class="text-base font-bold text-midnight">Data Fragmentation</h3>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Critical policy, premium, and claims records locked across disparate broker spreadsheets, legacy portals, and accounting software.
        </p>
      </div>

      <div class="p-6 rounded-lg bg-white border border-slate-200 shadow-sm space-y-3">
        <div class="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center font-mono font-bold text-xs">
          02
        </div>
        <h3 class="text-base font-bold text-midnight">Manual Reconciliation</h3>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Operations teams spending days cross-referencing cash deposits against carrier bordereaux lines instead of underwriting profitable risk.
        </p>
      </div>

      <div class="p-6 rounded-lg bg-white border border-slate-200 shadow-sm space-y-3">
        <div class="w-8 h-8 rounded bg-blue-50 text-electric flex items-center justify-center font-mono font-bold text-xs">
          03
        </div>
        <h3 class="text-base font-bold text-midnight">Reporting Friction</h3>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Month-end stress assembling delegated authority packages to satisfy varying carrier templates and compliance standards.
        </p>
      </div>

      <div class="p-6 rounded-lg bg-white border border-slate-200 shadow-sm space-y-3">
        <div class="w-8 h-8 rounded bg-slate-100 text-slate-700 flex items-center justify-center font-mono font-bold text-xs">
          04
        </div>
        <h3 class="text-base font-bold text-midnight">Exception Blindspots</h3>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Unidentified commission discrepancies, coverage limit discrepancies, and duplicate policy records slipping through unmonitored.
        </p>
      </div>

    </div>

  </div>
</section>

<!-- =========================================================================
     WHAT WE FOCUS ON (Four Core Focus Areas)
     ========================================================================= -->
<section class="py-20 bg-white border-b border-slate-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="text-center max-w-3xl mx-auto space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-electric font-semibold">
        Core Capabilities
      </span>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-midnight">
        What We Focus On
      </h2>
      <p class="text-slate-600 text-base">
        Four principal engineering domains engineered to replace brittle operational workarounds with structured, deterministic software systems.
      </p>
    </div>

    <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each coreFocusAreas as area}
        <div class="p-8 rounded-xl bg-offwhite border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-electric font-bold">{area.id} // DOMAIN</span>
              <div class="w-10 h-10 rounded-lg bg-ice flex items-center justify-center text-electric">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={area.icon} />
                </svg>
              </div>
            </div>

            <h3 class="text-xl font-bold text-midnight">{area.title}</h3>
            <p class="text-sm text-slate-600 leading-relaxed">{area.description}</p>

            <ul class="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700">
              {#each area.points as point}
                <li class="flex items-start gap-2">
                  <span class="text-electric font-bold mt-0.5">&bull;</span>
                  <span>{point}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="pt-6 mt-6 border-t border-slate-200">
            <a
              href="/solutions"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:text-electric-hover"
            >
              <span>Learn more about {area.title}</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>

<!-- =========================================================================
     INDUSTRY FOCUS: SPECIALTY INSURANCE & MGAS
     ========================================================================= -->
<section class="py-20 bg-slate-900 text-white border-b border-slate-800 relative">
  <div class="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
    
    <div class="max-w-3xl space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 text-blue-300 border border-slate-700 text-xs font-mono">
        INITIAL VERTICAL SPECIALIZATION
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        Specialty Insurance, MGAs &amp; Program Administrators
      </h2>
      <p class="text-base text-slate-300 leading-relaxed">
        Our initial research and development efforts focus on the operational challenges faced by specialty insurance MGAs, MGUs, and program administrators. We are exploring how better-connected systems and purpose-built software can support data reconciliation, delegated-authority reporting, exception management, and operational control.
      </p>
    </div>

    <!-- Targeted Stakeholder Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div class="p-6 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
        <div class="text-xs font-mono text-electric font-bold">STAKEHOLDER 01</div>
        <h3 class="text-lg font-bold text-white">Managing General Agents (MGAs)</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Manage diverse distribution channels while meeting rigid reporting constraints from multiple capacity providers without multiplying back-office headcount.
        </p>
      </div>

      <div class="p-6 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
        <div class="text-xs font-mono text-electric font-bold">STAKEHOLDER 02</div>
        <h3 class="text-lg font-bold text-white">Managing General Underwriters (MGUs)</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Maintain strict underwriting authority limits, real-time exposure visibility, and instant exception alerting across complex commercial programs.
        </p>
      </div>

      <div class="p-6 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
        <div class="text-xs font-mono text-electric font-bold">STAKEHOLDER 03</div>
        <h3 class="text-lg font-bold text-white">Program Administrators</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Automate multi-carrier bordereau preparation, premium-cash allocation, and claims data aggregation with complete auditability.
        </p>
      </div>

    </div>

    <!-- Interactive Data Pipeline Specimen -->
    <div class="pt-6">
      <DataPipelineDiagram />
    </div>

  </div>
</section>

<!-- =========================================================================
     OUR APPROACH (Discover, Design, Implement, Measure & Improve)
     ========================================================================= -->
<section class="py-20 bg-offwhite border-b border-slate-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="text-center max-w-3xl mx-auto space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-electric font-semibold">
        Engineering Methodology
      </span>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-midnight">
        Our Structured Approach
      </h2>
      <p class="text-slate-600 text-base">
        A disciplined, step-by-step engagement model designed to deliver measurable operational clarity without disruptive overhauls.
      </p>
    </div>

    <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each methodology as step}
        <div class="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3 relative hover:border-slate-300 transition-colors">
          <div class="flex items-center justify-between">
            <span class="text-2xl font-extrabold font-mono text-electric">{step.step}</span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">
              Phase
            </span>
          </div>
          <h3 class="text-lg font-bold text-midnight">{step.title}</h3>
          <div class="text-xs font-mono text-slate-500 font-semibold">{step.tagline}</div>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
            {step.description}
          </p>
        </div>
      {/each}
    </div>

  </div>
</section>

<!-- =========================================================================
     ENGAGEMENT & OPERATIONAL DIAGNOSTIC CALLOUT (Stage-Accurate Invitation)
     ========================================================================= -->
<section class="py-20 bg-midnight text-white relative">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
    
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
      <span class="w-2 h-2 rounded-full bg-blue-500"></span>
      <span>ACTIVE EXPLORATION &amp; PILOT DISCOVERY</span>
    </div>

    <div class="space-y-4 max-w-3xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        Discuss an Operational Challenge
      </h2>
      <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
        Axiom Systems is currently engaging with specialty insurance professionals to better understand high-impact operational challenges and identify opportunities for focused pilot implementations.
      </p>
      <p class="text-sm text-slate-400 leading-relaxed">
        If your organization is dealing with fragmented information, time-consuming reconciliation, recurring reporting issues, or inefficient cross-system workflows, we would welcome a conversation.
      </p>
    </div>

    <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="/contact"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-electric hover:bg-electric-hover rounded shadow-lg shadow-electric/25 transition-all"
      >
        <span>Discuss an Operational Challenge</span>
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>

      <a
        href="mailto:younes@aboudrar.dev?subject=Axiom%20Operational%20Diagnostic"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded transition-colors font-mono text-xs"
      >
        <span>Direct Email: younes@aboudrar.dev</span>
      </a>
    </div>

    <div class="pt-8 text-xs text-slate-400">
      No sales representatives. Direct conversation with engineering leadership.
    </div>

  </div>
</section>
