<script lang="ts">
  // Simple interaction script
  let email = "";
  const niche = "Logistics"; // CHANGE THIS VARIABLE LATER
</script>

<div class="min-h-screen bg-slate-950 text-slate-200 font-mono flex flex-col items-center justify-center p-4 relative overflow-hidden">
  
  <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
  <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

  <div class="z-10 max-w-2xl w-full text-center space-y-8 border border-slate-800 bg-slate-900/50 p-12 backdrop-blur-sm rounded-lg shadow-2xl">
    
    <div class="flex items-center justify-center gap-2 mb-4">
      <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
      <span class="text-xs text-emerald-500 tracking-widest uppercase">System Online</span>
    </div>

    <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white">
      AXIOM <span class="text-slate-500">SYSTEMS</span>
    </h1>
    
    <p class="text-lg text-slate-400">
      Automated Lead Generation & Operational Intelligence for the <span class="text-white font-semibold">{niche}</span> industry.
    </p>

    <div class="h-px w-full bg-slate-800 my-8"></div>

    <div class="space-y-4">
      <p class="text-sm text-slate-500 uppercase tracking-widest">Limited Beta Access</p>
      
      <a 
        href="mailto:younes@aboudrar.dev?subject=Axiom%20Beta%20Access%20Request&body=I%20am%20interested%20in%20automating%20my%20operations."
        class="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all rounded"
      >
        Initiate Contact
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>

  </div>

  <footer class="absolute bottom-4 text-xs text-slate-600">
    &copy; 2026 AXIOM SYSTEMS. DIVISION OF ABOUDRAR DEV.
  </footer>
</div>
