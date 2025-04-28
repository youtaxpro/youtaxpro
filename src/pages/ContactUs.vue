<template>
  <MainLayout withBgImage>
    <!-- Contact Content -->
    <div class="contact-content">
      <h2>{{ $t('contact.title') }}</h2>
      
      <!-- Office Information -->
      <div class="office-info">
        <h3>{{ $t('contact.officeTitle') }}</h3>
        <div class="info-grid">
          <div class="contact-card">
            <i class="fas fa-map-marker-alt"></i>
            <h4>{{ $t('contact.address.title') }}</h4>
            <p>{{ $t('footer.address') }}</p>
          </div>
          
          <div class="contact-card">
            <i class="fas fa-phone"></i>
            <h4>{{ $t('contact.phone.title') }}</h4>
            <p>{{ $t('footer.phone') }}</p>
          </div>
          
          <div class="contact-card">
            <i class="fas fa-fax"></i>
            <h4>{{ $t('contact.fax.title') }}</h4>
            <p>{{ $t('footer.fax') }}</p>
          </div>

          <div class="contact-card">
            <i class="fas fa-envelope"></i>
            <h4>{{ $t('contact.email.title') }}</h4>
            <p>{{ $t('footer.email') }}</p>
          </div>

          <div class="contact-card">
            <i class="fas fa-clock"></i>
            <h4>{{ $t('contact.hours.title') }}</h4>
            <p>{{ $t('contact.hours.weekday') }}</p>
            <p>{{ $t('contact.hours.weekend') }}</p>
          </div>

          <div class="contact-card">
            <i class="fas fa-blog"></i>
            <h4>{{ $t('contact.blog.title') }}</h4>
            <p><a href="https://blog.naver.com/berkeleytax" target="_blank" class="blog-link">{{ $t('footer.blog') }}</a></p>
          </div>
        </div>
      </div>

      <!-- Google Map -->
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7340392391656!2d127.05169491183!3d37.51419832798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca41fd3c87ef3%3A0x834d1f6840e4aee1!2s573%20Samseong-ro%2C%20Gangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1647841234567!5m2!1sen!2skr"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';

export default {
  name: 'ContactUs',
  components: {
    MainLayout
  }
};
</script>

<style scoped>
/* Contact Content Styles */
.contact-content {
  max-width: 1200px;
  margin: 120px auto 2rem;
  padding: 2rem;
  color: white;
}

h2 {
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  font-size: 2.5rem;
  font-weight: bold;
  position: relative;
  padding-bottom: 1rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #ffec9a, #ffc857);
  border-radius: 2px;
}

h3 {
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.contact-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.2);
}

.contact-card h4 {
  margin: 1rem 0;
  font-size: 1.2rem;
  color: white;
}

.contact-card p {
  color: white;
}

.map-container {
  margin: 2rem auto;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  width: 1000px;
  max-width: 1600px;
}

.map-container iframe {
  width: 100%;
  height: 600px;
  border-radius: 8px;
}

.blog-link {
  color: #ffc857;
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* Media Queries */
@media screen and (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .map-container {
    width: 600px;
    padding: 0.5rem;
  }

  .map-container iframe {
    height: 400px;
  }
}

@media screen and (max-width: 480px) {
  .map-container {
    width: 90%;
  }

  .map-container iframe {
    height: 300px;
  }
}
</style>
