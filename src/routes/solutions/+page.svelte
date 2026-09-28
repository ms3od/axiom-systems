<script lang="ts">
  import DataPipelineDiagram from '$lib/components/DataPipelineDiagram.svelte';
</script>

<svelte:head>
  <title>Solutions | Axiom Systems — Operational Clarity. Engineered.</title>
  <meta name="description" content="Explore Axiom Systems' four core engineering domains: Workflow Automation, Data Integration & Reconciliation, AI-Assisted Operational Intelligence, and Reporting & Exception Management." />
</svelte:head>

<!-- Solutions Header -->
<section class="bg-midnight text-white pt-16 pb-20 md:pt-20 md:pb-24 border-b border-slate-800 relative">
  <div class="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50"></div>
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-blue-300">
      <span class="w-2 h-2 rounded-full bg-electric"></span>
      <span>OPERATIONAL ARCHITECTURE &amp; CAPABILITIES</span>
    </div>

    <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
      Purpose-Built Solutions for Complex Operations
    </h1>

    <p class="text-lg text-slate-300 max-w-2xl leading-relaxed">
      We engineer dependable software infrastructure to bridge the gaps between legacy policy administration, external broker feeds, bank ledgers, and capacity reporting.
    </p>

    <div class="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
      <span>Focus: Specialty Insurance &bull; MGAs &bull; Program Administrators</span>
    </div>
  </div>
</section>

<!-- Exploratory Concept Spotlight: Axiom MGA DataOps -->
<section class="py-16 bg-slate-900 text-white border-b border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="p-8 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden space-y-8">
      
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <div class="flex items-center gap-3">
            <span class="text-xs font-mono px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-800 font-semibold uppercase">
              Exploratory Solution Concept
            </span>
            <span class="text-xs font-mono text-slate-400">R&amp;D Architecture</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white mt-2">
            Axiom MGA DataOps
          </h2>
        </div>
        <div class="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-2 rounded border border-slate-800">
          Target Environment: Multi-Carrier Delegated Authority
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            <strong class="text-white">Axiom MGA DataOps</strong> is an exploratory engineering framework designed to resolve the multi-system data friction common to specialty insurance MGAs and program administrators.
          </p>
          <p>
            Rather than requiring organizations to replace their established policy administration software, Axiom MGA DataOps is conceived as an operational layer: ingesting raw bordereaux, normalizing divergent carrier formats, running deterministic reconciliation, and preparing compliant audit packs with human-verified precision.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs text-slate-400">
            <div class="p-3 rounded bg-slate-900/80 border border-slate-800">
              <span class="text-white font-semibold block mb-1">Deterministic Integrity</span>
              Zero reliance on unsupervised AI guesswork for financial figures.
            </div>
            <div class="p-3 rounded bg-slate-900/80 border border-slate-800">
              <span class="text-white font-semibold block mb-1">Full Traceability</span>
              Every field mutation linked directly to source documents.
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
          <div class="text-slate-400 text-[11px] uppercase tracking-wider">Concept Scope Summary</div>
          <div class="space-y-2 text-slate-300">
            <div class="flex items-center justify-between pb-1 border-b border-slate-800">
              <span>Bordereau Ingest Formats</span>
              <span class="text-white">Excel, CSV, PDF, XML</span>
            </div>
            <div class="flex items-center justify-between pb-1 border-b border-slate-800">
              <span>Reconciliation Logic</span>
              <span class="text-white">3-Way (Bank / Ledger / Report)</span>
            </div>
            <div class="flex items-center justify-between pb-1 border-b border-slate-800">
              <span>Exception Triage</span>
              <span class="text-white">Human-in-the-Loop Queue</span>
            </div>
            <div class="flex items-center justify-between">
              <span>Compliance Standards</span>
              <span class="text-white">Lloyd's v5.2, ACORD XML</span>
            </div>
          </div>
          <div class="pt-3 text-[11px] text-slate-400">
            * Note: Presented as an active R&amp;D concept open for pilot co-development with select partner MGAs.
          </div>
        </div>
      </div>

      <!-- Integrated Interactive Data Pipeline Flow -->
      <div class="pt-4">
        <DataPipelineDiagram />
      </div>

    </div>

  </div>
</section>

<!-- The Four Principal Solution Pillars -->
<section class="py-20 bg-offwhite border-b border-slate-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
    
    <!-- Pillar 01: Workflow Automation -->
    <div id="workflow-automation" class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div class="lg:col-span-5 space-y-4 sticky top-24">
        <div class="text-xs font-mono text-electric font-bold">PILLAR 01 // EXECUTION</div>
        <h2 class="text-3xl font-bold text-midnight">Workflow Automation</h2>
        <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
          Reduce repetitive operational work through connected, structured, and measurable workflows. We build deterministic integrations that automatically route, transform, and validate operational records between internal systems.
        </p>
        <div class="p-4 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-700 space-y-2">
          <div class="font-bold text-electric uppercase font-mono">Measurable Impact</div>
          <p>
            Eliminates multi-hour manual data re-entry cycles when policies bind, endorsements trigger, or claims updates occur.
          </p>
        </div>
      </div>

      <div class="lg:col-span-7 bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <h3 class="text-lg font-bold text-midnight">Target Capabilities</h3>
        <div class="space-y-4 text-sm text-slate-600">
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Cross-Platform Sync</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Bi-directional synchronization between CRM intake systems, specialized underwriting workbenches, and back-office policy administration platforms.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Document Intake &amp; Handoffs</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Structured routing of incoming broker submissions, schedules of values (SOVs), and endorsement requests directly to designated team queues with complete metadata.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Audit-Ready State Machines</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Every workflow step is tracked in an immutable event log, ensuring absolute transparency for carrier audits and compliance reviews.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="h-px w-full bg-slate-200"></div>

    <!-- Pillar 02: Data Integration & Reconciliation -->
    <div id="data-integration" class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div class="lg:col-span-5 space-y-4 sticky top-24">
        <div class="text-xs font-mono text-electric font-bold">PILLAR 02 // RELIABILITY</div>
        <h2 class="text-3xl font-bold text-midnight">Data Integration &amp; Quality</h2>
        <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
          Connect fragmented information sources and improve data consistency through normalization, validation, and reconciliation.
        </p>
        <div class="p-4 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-700 space-y-2">
          <div class="font-bold text-electric uppercase font-mono">Measurable Impact</div>
          <p>
            Transforms days of spreadsheet reconciliation into continuous, automated verification with instant exception isolation.
          </p>
        </div>
      </div>

      <div class="lg:col-span-7 bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <h3 class="text-lg font-bold text-midnight">Target Capabilities</h3>
        <div class="space-y-4 text-sm text-slate-600">
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Multi-Source Bordereaux Normalization</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Standardize disparate data layouts received from wholesale brokers into clean, canonical data structures without breaking historical records.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Deterministic 3-Way Reconciliation</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Continuous validation between incoming cash receipts, policy accounting records, and carrier settlement statements, detecting rounding errors and split commission anomalies.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Field-Level Constraint Validation</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Strict deterministic business rule checking: premium thresholds, effective dates, territory definitions, and coverage limit constraints.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="h-px w-full bg-slate-200"></div>

    <!-- Pillar 03: Intelligent Operations -->
    <div id="intelligent-operations" class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div class="lg:col-span-5 space-y-4 sticky top-24">
        <div class="text-xs font-mono text-electric font-bold">PILLAR 03 // INTELLIGENCE</div>
        <h2 class="text-3xl font-bold text-midnight">Intelligent Operations</h2>
        <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
          Apply AI where it adds measurable value, while preserving reliable rules, human oversight, and traceability.
        </p>
        <div class="p-4 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-700 space-y-2">
          <div class="font-bold text-electric uppercase font-mono">Our AI Philosophy</div>
          <p>
            No black-box decision making. AI assists in document triage and format translation, while deterministic code and experienced humans control final execution.
          </p>
        </div>
      </div>

      <div class="lg:col-span-7 bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <h3 class="text-lg font-bold text-midnight">Target Capabilities</h3>
        <div class="space-y-4 text-sm text-slate-600">
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Grounded Document Extraction</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Targeted model extraction for complex loss runs, binder slips, and policy schedules with bounding-box citations directly back to the underlying PDF/source.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Confidence Scoring &amp; Threshold Triage</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Extracted data below pre-configured statistical confidence triggers an immediate human-in-the-loop review ticket, preventing bad data ingestion.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Auditability &amp; Traceability</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Every AI-suggested field mapping requires system logging and remains fully inspectable by compliance officers.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="h-px w-full bg-slate-200"></div>

    <!-- Pillar 04: Operational Intelligence -->
    <div id="operational-intelligence" class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div class="lg:col-span-5 space-y-4 sticky top-24">
        <div class="text-xs font-mono text-electric font-bold">PILLAR 04 // VISIBILITY</div>
        <h2 class="text-3xl font-bold text-midnight">Operational Intelligence</h2>
        <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
          Transform operational information into clearer reporting, exception visibility, and actionable management insights.
        </p>
        <div class="p-4 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-700 space-y-2">
          <div class="font-bold text-electric uppercase font-mono">Measurable Impact</div>
          <p>
            Empowers leadership with real-time portfolio health, capacity utilization, and operational exception counts instead of 30-day delayed reports.
          </p>
        </div>
      </div>

      <div class="lg:col-span-7 bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <h3 class="text-lg font-bold text-midnight">Target Capabilities</h3>
        <div class="space-y-4 text-sm text-slate-600">
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Delegated Authority Compliance Reporting</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Automated production of carrier-compliant premium, risk, and claims bordereaux conforming precisely to Lloyd’s v5.2, ACORD, and custom reinsurer schemas.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Real-Time Operational Triage</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Executive visibility into active operational queues, pending binder clearances, unallocated premium funds, and capacity consumption caps.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 class="font-semibold text-slate-900">Historical Audit Records</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Searchable, version-controlled records of all historical bordereau submissions, reviewer approvals, and carrier reconciliation sign-offs.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- Bottom CTA Section -->
<section class="py-18 bg-midnight text-white text-center">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
    <h2 class="text-3xl font-bold tracking-tight text-white">
      Explore How Axiom Systems Applies to Your Operations
    </h2>
    <p class="text-slate-300 text-base max-w-xl mx-auto">
      Whether your challenge is multi-carrier bordereau reconciliation or cross-system manual data entry, we welcome the opportunity to discuss your specific workflow.
    </p>
    <div class="pt-2">
      <a
        href="/contact"
        class="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-electric hover:bg-electric-hover rounded shadow-lg shadow-electric/25 transition-all"
      >
        <span>Request an Operational Diagnostic</span>
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</section>
