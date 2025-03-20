<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
    
    <div class="prose prose-invert max-w-none">
      <p class="mb-4">Last updated: {{ lastUpdated }}</p>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          At sWatch, we take your privacy seriously. This Privacy Policy explains how we collect, 
          use, disclose, and safeguard your information when you use our service.
        </p>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p>We collect information when you register, use our services, and when you visit our website. This includes:</p>
        <ul class="list-disc pl-5 mt-2">
          <li>Personal information such as name, email address, and billing information</li>
          <li>Usage data including viewing history and preferences</li>
          <li>Device information and IP address</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p>We use the collected information for various purposes, including:</p>
        <ul class="list-disc pl-5 mt-2">
          <li>Providing and maintaining our service</li>
          <li>Personalizing your experience</li>
          <li>Processing payments</li>
          <li>Analyzing usage patterns to improve our service</li>
          <li>Communicating with you about updates and offers</li>
        </ul>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Data Retention</h2>
        <p>
          We will retain your personal information only for as long as necessary to fulfill the purposes 
          outlined in this privacy policy or as required by law.
        </p>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul class="list-disc pl-5 mt-2">
          <li>Right to access and receive a copy of your data</li>
          <li>Right to rectification or correction of inaccurate data</li>
          <li>Right to deletion of your personal data</li>
          <li>Right to restrict or object to our processing of your data</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const lastUpdateTime = config.public.privacyUpdateDate;

const lastUpdated = new Date(lastUpdateTime).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
</script>
