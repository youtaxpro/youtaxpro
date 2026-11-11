<template>
  <div id="home" class="home">
    <Navbar overlay />
    <HomeHero />
    <HomeAboutUs />
    <HomeProfile />
    <HomeServices />
    <HomeGuides />
    <HomeChecklists />
    <HomeInsights />
    <HomeCta />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue';
import Footer from '../components/common/Footer.vue';
import HomeHero from '../components/home/HomeHero.vue';
import HomeAboutUs from '../components/home/HomeAboutUs.vue';
import HomeProfile from '../components/home/HomeProfile.vue';
import HomeServices from '../components/home/HomeServices.vue';
import HomeGuides from '../components/home/HomeGuides.vue';
import HomeChecklists from '../components/home/HomeChecklists.vue';
import HomeInsights from '../components/home/HomeInsights.vue';
import HomeCta from '../components/home/HomeCta.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    HomeHero,
    HomeAboutUs,
    HomeProfile,
    HomeServices,
    HomeGuides,
    HomeChecklists,
    HomeInsights,
    HomeCta,
  },
};
</script>

<style>
/* 홈 섹션 공통 */
.home {
  width: 100%;
  background: var(--white);
  text-align: left;
}

.section { padding: 96px 0; }
.section--tint { background: var(--bg); }

.section-head { max-width: 720px; margin: 0 auto 3rem; text-align: center; }
.section-head h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); color: var(--navy-900); margin-bottom: 0.75rem; }
.section-head p { color: var(--body); font-size: 1.02rem; }

@media (max-width: 768px) {
  .section { padding: 64px 0; }
  .section-head { margin-bottom: 2rem; }
}
</style>
