<template>
  <footer style="background: linear-gradient(135deg, #1E4D92 0%, #2E5EAA 50%, #75C2F6 100%); color: white; padding: 2rem 0; width: 100vw;">
    <div style="width: 100%; padding: 0 3rem;">
      <!-- Top Section with Sections -->
      <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 2rem;">
        <!-- Column 1 - About & Company Info -->
        <div style="flex: 1; min-width: 250px;">
          <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: white;">{{ $t('footer.companyName') }}</h3>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.representative') }}</p>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.address') }}</p>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.businessNumber') }}</p>
        </div>

        <!-- Column 2 - Contact -->
        <div style="flex: 1; min-width: 250px;">
          <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: white;">{{ $t('contact.title') }}</h3>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.phone') }}</p>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.fax') }}</p>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.email') }}</p>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('footer.blog') }}</p>
        </div>

        <!-- Column 3 - Hours -->
        <div style="flex: 1; min-width: 250px;">
          <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: white;">{{ $t('contact.hours.title') }}</h3>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('contact.hours.weekday') }}</p>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);">{{ $t('contact.hours.weekend') }}</p>
        </div>
      </div>

      <!-- Divider -->
      <div style="height: 1px; background-color: rgba(255,255,255,0.2); margin: 1.5rem 0;"></div>

      <!-- Copyright and Bottom Links -->
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 100%;">
        <p style="color: rgba(255,255,255,0.6); font-size: 0.875rem;">&copy; 2024-2026 {{ $t('footer.companyName') }}</p>
        
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <router-link to="/#aboutus" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.aboutUs') }}</router-link>
            <router-link to="/#services" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.services') }}</router-link>
            <router-link to="/#checklists" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.checklists') }}</router-link>
            <router-link to="/faq" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.faq') }}</router-link>
            <router-link to="/contactus" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.contactUs') }}</router-link>
          </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  footer div[style*="flex-wrap: wrap; justify-content: space-between"] {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  footer div[style*="display: flex; gap: 1rem"] {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5rem;
  }
  
  footer p[style*="color: rgba(255,255,255,0.6)"] {
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>