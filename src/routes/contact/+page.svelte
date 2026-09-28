<script lang="ts">
  import { enhance } from '$app/forms';

  let { form } = $props();

  let isSubmitting = $state(false);
  let submittedSuccess = $derived(form?.success === true);

  let formValues = $state({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  // Keep form values if returned with errors
  $effect(() => {
    if (form?.values) {
      formValues = {
        name: form.values.name || '',
        email: form.values.email || '',
        company: form.values.company || '',
        role: form.values.role || '',
        message: form.values.message || ''
      };
    }
  });

  // Dynamic mailto backup link
  let mailtoLink = $derived.by(() => {
    const subject = encodeURIComponent(`Axiom Operational Inquiry - ${formValues.company || 'Operations'}`);
    const body = encodeURIComponent(
      `Name: ${formValues.name}\nEmail: ${formValues.email}\nCompany: ${formValues.company}\nRole: ${formValues.role}\n\nChallenge Description:\n${formValues.message}`
    );
    return `mailto:younes@aboudrar.dev?subject=${subject}&body=${body}`;
  });
</script>

<svelte:head>
  <title>Contact | Axiom Systems — Operational Clarity. Engineered.</title>
  <meta name="description" content="Start an operational conversation with Axiom Systems. Request an introductory diagnostic or discuss complex automation challenges in specialty insurance." />
</svelte:head>

<!-- Header -->
<section class="bg-midnight text-white pt-16 pb-20 md:pt-20 md:pb-24 border-b border-slate-800 relative">
  <div class="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50"></div>
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-blue-300">
      <span class="w-2 h-2 rounded-full bg-electric"></span>
      <span>DIRECT COLLABORATION &amp; DIAGNOSTICS</span>
    </div>

    <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
      Discuss an Operational Challenge
    </h1>

    <p class="text-lg text-slate-300 max-w-2xl leading-relaxed">
      Whether you are exploring automation opportunities, managing disconnected systems, or looking to improve an existing workflow, we welcome a technical conversation.
    </p>
  </div>
</section>

<!-- Form & Contact Details Section -->
<section class="py-16 md:py-20 bg-offwhite border-b border-slate-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <!-- Left: Executive Contact Form -->
      <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        
        {#if submittedSuccess}
          <!-- Success State Display -->
          <div class="p-8 rounded-xl bg-emerald-50 border border-emerald-200 space-y-4 animate-in fade-in duration-300">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-emerald-950">Inquiry Received</h3>
                <span class="text-xs text-emerald-700 font-mono">Status: Acknowledged</span>
              </div>
            </div>

            <p class="text-sm text-emerald-900 leading-relaxed">
              Thank you for initiating contact. Your inquiry has been routed directly to founder <strong>Younes Aboudrar</strong>. We will review your operational requirements and follow up within one business day.
            </p>

            <div class="pt-2 border-t border-emerald-200/80 flex items-center justify-between text-xs text-emerald-800">
              <span>Direct follow-up destination:</span>
              <span class="font-mono font-semibold">{form?.inquiry?.email || 'Your business email'}</span>
            </div>
          </div>
        {:else}
          <!-- Normal Form State -->
          <div class="space-y-2 border-b border-slate-100 pb-5">
            <h2 class="text-2xl font-bold text-midnight">Initiate Contact</h2>
            <p class="text-sm text-slate-500">
              Provide basic context below. Direct review by engineering leadership.
            </p>
          </div>

          <form
            method="POST"
            use:enhance={() => {
              isSubmitting = true;
              return async ({ update }) => {
                isSubmitting = false;
                await update();
              };
            }}
            class="space-y-5"
          >
            <!-- Honeypot Field (Hidden from real users, traps spam scrapers) -->
            <div class="hidden" aria-hidden="true">
              <label for="website_url">Do not fill this field</label>
              <input
                type="text"
                id="website_url"
                name="website_url"
                tabindex="-1"
                autocomplete="off"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <!-- Full Name -->
              <div class="space-y-1.5">
                <label for="name" class="block text-xs font-semibold uppercase tracking-wider text-slate-700 font-mono">
                  Full Name <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  bind:value={formValues.name}
                  class="w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent {
                    form?.errors?.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-white'
                  }"
                />
                {#if form?.errors?.name}
                  <p class="text-xs text-red-600 font-mono">{form.errors.name}</p>
                {/if}
              </div>

              <!-- Business Email -->
              <div class="space-y-1.5">
                <label for="email" class="block text-xs font-semibold uppercase tracking-wider text-slate-700 font-mono">
                  Business Email <span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. s.jenkins@company.com"
                  bind:value={formValues.email}
                  class="w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent {
                    form?.errors?.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-white'
                  }"
                />
                {#if form?.errors?.email}
                  <p class="text-xs text-red-600 font-mono">{form.errors.email}</p>
                {/if}
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <!-- Company Name -->
              <div class="space-y-1.5">
                <label for="company" class="block text-xs font-semibold uppercase tracking-wider text-slate-700 font-mono">
                  Company / Organization <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  placeholder="e.g. Apex Underwriting Partners"
                  bind:value={formValues.company}
                  class="w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent {
                    form?.errors?.company ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-white'
                  }"
                />
                {#if form?.errors?.company}
                  <p class="text-xs text-red-600 font-mono">{form.errors.company}</p>
                {/if}
              </div>

              <!-- Role / Title -->
              <div class="space-y-1.5">
                <label for="role" class="block text-xs font-semibold uppercase tracking-wider text-slate-700 font-mono">
                  Your Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="e.g. COO, Underwriting Director, Head of Ops"
                  bind:value={formValues.role}
                  class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent"
                />
              </div>
            </div>

            <!-- Message / Challenge -->
            <div class="space-y-1.5">
              <label for="message" class="block text-xs font-semibold uppercase tracking-wider text-slate-700 font-mono">
                Primary Operational Challenge / Inquiry <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Describe your current bottleneck (e.g. bordereau reconciliation delays, disconnected policy systems, manual reporting to capacity providers)..."
                bind:value={formValues.message}
                class="w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent {
                  form?.errors?.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-white'
                }"
              ></textarea>
              {#if form?.errors?.message}
                <p class="text-xs text-red-600 font-mono">{form.errors.message}</p>
              {/if}
            </div>

            <!-- Privacy Notice Callout -->
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Enterprise Confidentiality:</strong> Information submitted is treated with strict commercial discretion and used solely to evaluate your operational inquiry. We never share or sell contact information.
            </div>

            <!-- Submit Button & Email Fallback -->
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                class="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-electric hover:bg-electric-hover rounded shadow-md shadow-electric/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {#if isSubmitting}
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                {:else}
                  <span>Send Inquiry</span>
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                {/if}
              </button>

              <a
                href={mailtoLink}
                class="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-mono text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded transition-colors"
                title="Send using your default desktop email client"
              >
                <span>Or open in Mail Client</span>
                <span class="text-slate-400">&nearr;</span>
              </a>
            </div>
          </form>
        {/if}

      </div>

      <!-- Right: Direct Communications & Diagnostic Context -->
      <div class="lg:col-span-5 space-y-6">
        
        <!-- Direct Contacts Card -->
        <div class="p-6 rounded-2xl bg-midnight text-white border border-slate-800 space-y-5">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <span class="text-xs font-mono text-electric font-semibold uppercase tracking-wider">
              Direct Channels
            </span>
            <span class="text-xs font-mono text-emerald-400">ONLINE</span>
          </div>

          <div class="space-y-4 text-sm">
            <div>
              <span class="block text-xs font-mono text-slate-400 mb-1">Founder Direct:</span>
              <a
                href="mailto:younes@aboudrar.dev"
                class="text-base font-semibold text-white hover:text-blue-300 font-mono transition-colors flex items-center gap-2"
              >
                <span>younes@aboudrar.dev</span>
                <span class="text-xs text-blue-400">&nearr;</span>
              </a>
              <span class="text-xs text-slate-400 block mt-0.5">Primary destination for executive inquiries</span>
            </div>

            <div class="pt-3 border-t border-slate-800">
              <span class="block text-xs font-mono text-slate-400 mb-1">General Inquiries:</span>
              <a
                href="mailto:contact@aboudrar.dev"
                class="text-sm text-slate-200 hover:text-blue-300 font-mono transition-colors"
              >
                contact@aboudrar.dev
              </a>
            </div>

            <div class="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <div><strong class="text-slate-300">Registered Domain:</strong> axiom-systems.aboudrar.dev</div>
              <div><strong class="text-slate-300">Response SLA:</strong> Within 24 business hours</div>
            </div>
          </div>
        </div>

        <!-- What to Expect from an Operational Diagnostic -->
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 class="text-base font-bold text-midnight">
            What to Expect From an Operational Diagnostic
          </h3>
          <ul class="space-y-3 text-xs text-slate-600">
            <li class="flex items-start gap-2.5">
              <span class="text-electric font-bold font-mono">01.</span>
              <span><strong>A 30-Minute Technical Discussion:</strong> We examine your current data paths, file formats, and manual reconciliation overhead.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-electric font-bold font-mono">02.</span>
              <span><strong>Bottleneck Isolation:</strong> We pinpoint where human re-keying or cross-system friction introduces delay and risk.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-electric font-bold font-mono">03.</span>
              <span><strong>Pilot Viability:</strong> If there is a high-impact fit, we discuss a structured, narrowly scoped pilot implementation.</span>
            </li>
          </ul>
        </div>

      </div>

    </div>

  </div>
</section>
