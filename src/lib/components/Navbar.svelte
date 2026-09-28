<script lang="ts">
  import { page } from '$app/stores';
  import logo from '$lib/assets/logo.svg';

  let mobileMenuOpen = $state(false);

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }

  const navLinks = [
    { href: '/', label: 'Overview' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/about', label: 'About' }
  ];
</script>

<header class="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-midnight/90 backdrop-blur-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-18">
      
      <!-- Brand Logo -->
      <a href="/" class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded py-1" onclick={closeMenu}>
        <div class="w-8 h-8 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
          <img src={logo} alt="Axiom Systems Logo" class="w-full h-full" />
        </div>
        <div class="flex flex-col">
          <span class="text-base font-bold tracking-tight text-white flex items-center gap-1.5 font-mono">
            AXIOM <span class="text-slate-400 font-normal">SYSTEMS</span>
          </span>
          <span class="text-[10px] tracking-wider text-slate-400 font-mono uppercase -mt-0.5">Enterprise Infrastructure</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2">
        {#each navLinks as item}
          <a
            href={item.href}
            class="px-3.5 py-2 text-sm font-medium transition-colors rounded-md {
              $page.url.pathname === item.href
                ? 'text-white bg-slate-800/60 font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
            }"
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <!-- Desktop Action CTA -->
      <div class="hidden md:flex items-center gap-4">
        <div class="h-4 w-px bg-slate-800"></div>
        <a
          href="/contact"
          class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-electric hover:bg-electric-hover transition-all rounded shadow-sm hover:shadow hover:shadow-electric/20 active:translate-y-px"
        >
          <span>Contact Us</span>
          <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <div class="flex md:hidden">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onclick={toggleMenu}
          class="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-850 focus:outline-none focus:ring-2 focus:ring-electric"
        >
          {#if mobileMenuOpen}
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>

    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden border-b border-slate-800 bg-midnight px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
      <div class="flex flex-col space-y-1">
        {#each navLinks as item}
          <a
            href={item.href}
            onclick={closeMenu}
            class="px-3 py-2.5 rounded-md text-base font-medium transition-colors {
              $page.url.pathname === item.href
                ? 'text-white bg-slate-800/80 font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
            }"
          >
            {item.label}
          </a>
        {/each}
      </div>
      <div class="pt-2 border-t border-slate-800">
        <a
          href="/contact"
          onclick={closeMenu}
          class="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-electric hover:bg-electric-hover rounded"
        >
          <span>Contact Us</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  {/if}
</header>
