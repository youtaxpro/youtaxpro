<template>
  <picture>
    <source v-if="webpSrc" :srcset="webpSrc" type="image/webp">
    <img 
      :src="src" 
      :alt="alt" 
      :class="imgClass" 
      :style="imgStyle"
      loading="lazy"
    />
  </picture>
</template>

<script>
export default {
  name: 'OptimizedImage',
  props: {
    src: {
      type: String,
      required: true
    },
    webpSrc: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: 'Image'
    },
    imgClass: {
      type: String,
      default: ''
    },
    imgStyle: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
