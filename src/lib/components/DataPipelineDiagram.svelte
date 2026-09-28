<script lang="ts">
  interface Stage {
    id: string;
    step: string;
    title: string;
    description: string;
    details: string;
    badge: string;
  }

  const stages: Stage[] = [
    {
      id: 'sources',
      step: '01',
      title: 'Data Sources',
      description: 'Carrier feeds, broker emails, policy management exports, claims tables, and spreadsheets.',
      details: 'Unstructured emails, CSVs, bordereaux reports, and legacy SOAP/REST endpoints.',
      badge: 'Multi-Source Inflow'
    },
    {
      id: 'ingestion',
      step: '02',
      title: 'Ingestion Engine',
      description: 'Automated receipt, checksum verification, format detection, and ingest scheduling.',
      details: 'Monitors inbox webhooks, SFTP directories, and API endpoints with immutable payload logging.',
      badge: 'Automated Receipt'
    },
    {
      id: 'normalization',
      step: '03',
      title: 'Normalization',
      description: 'Standardization of schema, column mapping, date formats, and insurance codes.',
      details: 'Converts disparate broker formats into a unified canonical MGA data structure.',
      badge: 'Canonical Schema'
    },
    {
      id: 'validation',
      step: '04',
      title: 'Validation Rules',
      description: 'Deterministic business rules checking policy limits, dates, premiums, and duplicate entries.',
      details: 'Zero-hallucination verification. Every validation rule is strictly coded and auditable.',
      badge: 'Deterministic'
    },
    {
      id: 'reconciliation',
      step: '05',
      title: 'Reconciliation',
      description: 'Cross-system matching between bank cash, accounting entries, and carrier statements.',
      details: 'Automated 3-way matching flagging rounding errors, split commissions, and timing variances.',
      badge: '3-Way Matching'
    },
    {
      id: 'review',
      step: '06',
      title: 'Human Review',
      description: 'Structured exception triage queue for operations managers when anomalies exceed thresholds.',
      details: 'Full audit trails: human operators inspect flagged items with complete context before approval.',
      badge: 'Human Oversight'
    },
    {
      id: 'reporting',
      step: '07',
      title: 'Reporting & Output',
      description: 'Carrier-compliant bordereaux, delegated authority packs, and executive visibility feeds.',
      details: 'Exportable to Lloyd’s v5.2, ACORD, carrier-specific portals, or downstream analytics.',
      badge: 'Carrier Compliant'
    }
  ];

  let selectedStage = $state(stages[3]); // default to Validation
</script>

<div class="w-full bg-slate-900 border border-slate-800 rounded-xl p-6 lg:p-8 shadow-xl">
  <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
    <div>
      <div class="flex items-center gap-2">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-electric animate-pulse"></span>
        <span class="text-xs font-mono uppercase tracking-wider text-slate-400">Architecture Specification</span>
      </div>
      <h3 class="text-xl font-bold text-white mt-1">Conceptual Operational Data Pipeline</h3>
    </div>
    <div class="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
      <span class="text-emerald-400">●</span> Deterministic Rules
      <span class="text-slate-600">|</span>
      <span class="text-blue-400">●</span> Full Traceability
      <span class="text-slate-600">|</span>
      <span class="text-amber-400">●</span> Human-in-the-Loop
    </div>
  </div>

  <!-- Interactive Pipeline Flow Steps -->
  <div class="py-6 overflow-x-auto">
    <div class="flex items-center gap-2 min-w-[760px] pb-2">
      {#each stages as stage, idx}
        <button
          type="button"
          onclick={() => (selectedStage = stage)}
          class="flex-1 text-left p-3 rounded-lg border transition-all relative {
            selectedStage.id === stage.id
              ? 'bg-slate-800/90 border-electric text-white shadow-md shadow-electric/10 ring-1 ring-electric/50'
              : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
          }"
        >
          <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
            <span>{stage.step}</span>
            <span class="text-[9px] px-1.5 py-0.2 rounded {selectedStage.id === stage.id ? 'bg-electric/20 text-blue-300' : 'bg-slate-800 text-slate-400'}">
              {stage.badge}
            </span>
          </div>
          <div class="text-xs font-bold truncate {selectedStage.id === stage.id ? 'text-white' : 'text-slate-300'}">
            {stage.title}
          </div>
        </button>

        {#if idx < stages.length - 1}
          <div class="text-slate-600 flex-shrink-0">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        {/if}
      {/each}
    </div>
  </div>

  <!-- Detailed inspection panel for selected stage -->
  <div class="mt-2 p-5 rounded-lg bg-slate-950 border border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div class="space-y-1 max-w-2xl">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono text-electric font-semibold">STAGE {selectedStage.step} //</span>
        <h4 class="text-base font-bold text-white">{selectedStage.title}</h4>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
          {selectedStage.badge}
        </span>
      </div>
      <p class="text-sm text-slate-300">
        {selectedStage.description}
      </p>
      <p class="text-xs text-slate-400 font-mono pt-1">
        <span class="text-slate-400">Technical Context:</span> {selectedStage.details}
      </p>
    </div>
    <div class="flex-shrink-0">
      <a
        href="/contact"
        class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors"
      >
        <span>Discuss This Phase</span>
        <span>&rarr;</span>
      </a>
    </div>
  </div>
</div>
