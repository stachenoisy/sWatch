<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
    
    <div class="prose prose-invert max-w-none">
      <p class="mb-4">Last updated: {{ lastUpdated }}</p>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
        <p>
          By accessing or using sWatch's services, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our service.
        </p>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">2. Description of Service</h2>
        <p>
          sWatch provides a platform for streaming video content. We may update, change, or discontinue 
          any aspect of our services at any time without prior notice.
        </p>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <p>
          To access certain features of our service, you must create an account. You are responsible for 
          maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">4. Subscription and Billing</h2>
        <p>
          Our service may require a subscription. By subscribing, you authorize us to charge your payment method 
          for the subscription fees. Subscriptions automatically renew unless cancelled before the renewal date.
        </p>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">5. Content and Intellectual Property</h2>
        <p>
          All content provided through our service is owned by or licensed to sWatch and is protected by copyright, 
          trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works 
          without our express permission.
        </p>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">6. Prohibited Conduct</h2>
        <p>You agree not to:</p>
        <ul class="list-disc pl-5 mt-2">
          <li>Use our service for any illegal purpose</li>
          <li>Share your account credentials with others</li>
          <li>Attempt to bypass any security measures</li>
          <li>Use any automated system to access our service</li>
          <li>Interfere with or disrupt our service</li>
        </ul>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, sWatch shall not be liable for any indirect, incidental, 
          special, consequential, or punitive damages arising out of or relating to your use of our service.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const lastUpdateTime = config.public.termsUpdateDate;

const lastUpdated = new Date(lastUpdateTime).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
</script>
