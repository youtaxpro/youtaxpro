<template>
  <footer style="background: linear-gradient(135deg, #002676 0%, #004ea8 100%); color: white; padding: 2rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
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
          <p style="margin-bottom: 0.5rem;">
            <a href="https://blog.naver.com/berkeleytax" target="_blank" style="color: #A5CDFD; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
              <span>{{ $t('footer.blog') }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 8.59L14 11.17V8H12V16H14V12.83L16.59 15.41L18 14L13 9L18 4L16.59 5.41L16.59 8.59Z" fill="#A5CDFD"/>
              </svg>
            </a>
          </p>
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
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
        <p style="color: rgba(255,255,255,0.6); font-size: 0.875rem;">&copy; 2024-2025 {{ $t('footer.companyName') }}</p>
        
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
          <a href="/#aboutus" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.aboutUs') }}</a>
          <a href="/#services" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.services') }}</a>
          <a href="/#checklists" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.checklists') }}</a>
          <a href="/faq" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.faq') }}</a>
          <a href="/contactus" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.875rem;">{{ $t('nav.contactUs') }}</a>
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
  }

  footer div[style*="display: flex; gap: 1rem"] {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5rem;
  }
}
</style>