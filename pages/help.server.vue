<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-3xl md:text-4xl font-bold mb-8">Help Center</h1>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-800 p-4 rounded-lg">
            <h3 class="text-xl font-medium mb-2">{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 class="text-2xl font-semibold mb-4">Contact Support</h2>
        <p class="mb-4">Need more help? Our support team is available 24/7.</p>
        <a href="mailto:support@swatch.com" class="btn btn-primary">Email Support</a>
      </section>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  {
    question: "How do I create an account?",
    answer: "You can create an account by clicking the Sign Up button on the top right corner of the homepage."
  },
  {
    question: "How do I add videos to my list?",
    answer: "When browsing videos, click the + button on any video card to add it to your list."
  },
  {
    question: "Can I download videos for offline viewing?",
    answer: "Yes, premium users can download videos for offline viewing on mobile devices."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription from your account settings page at any time."
  }
];
</script>
