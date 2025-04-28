<template>
  <div :class="['tax-website', { 'with-bg-image': withBgImage }]">
    <Navbar @toggle-menu="handleMenuToggle" />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from '../components/common/Navbar.vue';
import Footer from '../components/common/Footer.vue';

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Footer
  },
  props: {
    withBgImage: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const isMenuOpen = ref(false);

    const handleMenuToggle = (value) => {
      isMenuOpen.value = value;
    };

    return {
      isMenuOpen,
      handleMenuToggle
    };
  }
};
</script>

<style scoped>
@import '../assets/styles/common.css';
</style>
