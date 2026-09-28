<script lang="ts">
  import logo from '$lib/assets/logo.svg';
</script>

<footer class="bg-midnight border-t border-slate-800 text-slate-400">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
      
      <!-- Company Info Column -->
      <div class="lg:col-span-2 space-y-4">
        <a href="/" class="flex items-center gap-3">
          <div class="w-7 h-7 flex-shrink-0">
            <img src={logo} alt="Axiom Systems" class="w-full h-full" />
          </div>
          <span class="text-lg font-bold tracking-tight text-white font-mono">
            AXIOM <span class="text-slate-400 font-normal">SYSTEMS</span>
          </span>
        </a>
        <p class="text-sm text-slate-300 leading-relaxed max-w-sm">
          Intelligent software and automation infrastructure for complex business operations. Purpose-built for data reliability, system integration, and workflow execution.
        </p>
        <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Initial Focus: Specialty Insurance & MGAs</span>
        </div>
      </div>

      <!-- Solutions Column -->
      <div class="space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono">Solutions</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/solutions#workflow-automation" class="text-slate-400 hover:text-white transition-colors">
              Workflow Automation
            </a>
          </li>
          <li>
            <a href="/solutions#data-integration" class="text-slate-400 hover:text-white transition-colors">
              Data Integration & Quality
            </a>
          </li>
          <li>
            <a href="/solutions#intelligent-operations" class="text-slate-400 hover:text-white transition-colors">
              Intelligent Operations
            </a>
          </li>
          <li>
            <a href="/solutions#operational-intelligence" class="text-slate-400 hover:text-white transition-colors">
              Operational Intelligence
            </a>
          </li>
          <li>
            <a href="/solutions#mga-dataops" class="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Axiom MGA DataOps</span>
              <span class="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">Concept</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Navigation & Company Column -->
      <div class="space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono">Company</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/" class="text-slate-400 hover:text-white transition-colors">Overview</a>
          </li>
          <li>
            <a href="/about" class="text-slate-400 hover:text-white transition-colors">About & Philosophy</a>
          </li>
          <li>
            <a href="/about#founder" class="text-slate-400 hover:text-white transition-colors">Founder Leadership</a>
          </li>
          <li>
            <a href="/contact" class="text-slate-400 hover:text-white transition-colors">Operational Diagnostic</a>
          </li>
        </ul>
      </div>

      <!-- Direct Communications & Legal -->
      <div class="space-y-3">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono">Direct Inquiries</h4>
        <div class="space-y-2 text-sm">
          <div>
            <span class="block text-xs text-slate-400">Founder & Partnerships:</span>
            <a href="mailto:younes@aboudrar.dev" class="text-slate-200 hover:text-electric transition-colors font-mono text-xs">
              younes@aboudrar.dev
            </a>
          </div>
          <div>
            <span class="block text-xs text-slate-400">General Information:</span>
            <a href="mailto:contact@aboudrar.dev" class="text-slate-200 hover:text-electric transition-colors font-mono text-xs">
              contact@aboudrar.dev
            </a>
          </div>
        </div>
        <div class="pt-2">
          <a
            href="/contact"
            class="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            <span>Request Operational Diagnostic</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
      <div class="flex items-center gap-3">
        <span>&copy; 2026 Axiom Systems. All rights reserved.</span>
        <span class="text-slate-700">|</span>
        <span class="font-mono text-slate-400">axiom-systems.aboudrar.dev</span>
      </div>
      <div class="flex items-center gap-6">
        <a href="/privacy" class="hover:text-white transition-colors">Privacy Notice</a>
        <a href="/legal" class="hover:text-white transition-colors">Legal & Disclosures</a>
        <span class="text-slate-600 font-mono">Edge: Cloudflare Anycast</span>
      </div>
    </div>
  </div>
</footer>
