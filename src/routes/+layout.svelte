<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Axiom Systems | Operational Clarity. Engineered.</title>
  <meta name="description" content="Axiom Systems develops intelligent software and automation infrastructure for complex business operations, initially focused on specialty insurance, MGAs, and program administrators." />
  <meta name="keywords" content="Axiom Systems, specialty insurance technology, MGA automation, InsurTech, bordereaux reconciliation, operational intelligence, delegated authority software" />
  <meta name="author" content="Younes Aboudrar" />
  
  <!-- Open Graph / Social -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://axiom-systems.aboudrar.dev" />
  <meta property="og:site_name" content="Axiom Systems" />
  <meta property="og:title" content="Axiom Systems | Complex Operations. Intelligent Systems." />
  <meta property="og:description" content="Intelligent software and automation infrastructure that connects fragmented systems, improves data reliability, and eliminates repetitive operational work." />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Axiom Systems | Operational Clarity. Engineered." />
  <meta name="twitter:description" content="Intelligent software and automation infrastructure for complex business operations. Initially specialized in specialty insurance and MGAs." />

  <!-- Canonical -->
  <link rel="canonical" href="https://axiom-systems.aboudrar.dev" />
  <link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col bg-offwhite text-deepslate selection:bg-electric selection:text-white">
  <Navbar />
  <main class="flex-grow">
    {@render children()}
  </main>
  <Footer />
</div>
