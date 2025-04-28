<template>
  <footer class="site-footer blue-theme">
    <!-- Support Section -->
    <div class="container">
      <div class="need-help-footer">
        <h2 class="column color-white">{{ $t('contact.officeTitle') }}</h2>
        <div class="column">
          <a :href="'tel:' + $t('footer.phone').replace(/[^0-9]/g, '')" class="icon-btn color-white footer-phone-link">
            <span class="icon-svg icon-circle">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Customer help" focusable="false">
                <path class="icon-stroke-hover" d="M15.75 15.8C16.2 14.825 16.5 13.7 16.5 12.5V9.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path class="icon-stroke-hover" d="M9 20C12 20 14.55 18.275 15.75 15.8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path class="icon-stroke-hover" d="M1.5 11.75V8.75C1.5 4.625 4.875 1.25 9 1.25C13.125 1.25 16.5 4.625 16.5 8.75V11.75" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path class="icon" d="M9.75 21.5C10.5784 21.5 11.25 20.8284 11.25 20C11.25 19.1716 10.5784 18.5 9.75 18.5C8.92157 18.5 8.25 19.1716 8.25 20C8.25 20.8284 8.92157 21.5 9.75 21.5Z" fill="#ffffff"></path>
                <path class="icon" d="M4.5 8C2.4 8 0.75 9.65 0.75 11.75C0.75 13.85 2.4 15.5 4.5 15.5V8Z" fill="#ffffff"></path>
                <path class="icon" d="M4.5 8V15.5C4.95 15.5 5.25 15.2 5.25 14.75V8.75C5.25 8.3 4.95 8 4.5 8Z" fill="#ffffff"></path>
                <path class="icon" d="M13.5 15.5C15.6 15.5 17.25 13.85 17.25 11.75C17.25 9.65 15.6 8 13.5 8V15.5Z" fill="#ffffff"></path>
                <path class="icon" d="M13.5 15.5V8C13.05 8 12.75 8.3 12.75 8.75V14.75C12.75 15.2 13.05 15.5 13.5 15.5Z" fill="#ffffff"></path>
              </svg>
            </span>                   
            <span class="btn-label">{{ $t('footer.phone').split(':')[1] }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Links -->
    <div class="container">
      <div class="column-container links-footer color-white">
        <!-- Column 1 - About -->
        <div class="column">
          <p class=""><strong>{{ $t('nav.aboutUs') }}</strong></p>
          <ul id="About">
            <li>
              <a href="/aboutus" class="hrb-link btn-auto">{{ $t('profile.sections.intro.title') }}</a>
            </li>
            <li>
              <a href="/services" class="hrb-link btn-auto">{{ $t('nav.services') }}</a>
            </li>
          </ul>

          <p class=""><strong>{{ $t('contact.blog.title') }}</strong></p>
          <ul id="Blog">
            <li>
              <a href="https://blog.naver.com/berkeleytax" target="_blank" class="hrb-link btn-auto">{{ $t('footer.blog') }}</a>
            </li>
          </ul>
        </div>

        <!-- Column 2 - Resources -->
        <div class="column">
          <p class=""><strong>{{ $t('contact.hours.title') }}</strong></p>
          <ul id="Hours">
            <li>
              <span class="contact-text">{{ $t('contact.hours.weekday') }}</span>
            </li>
            <li>
              <span class="contact-text">{{ $t('contact.hours.weekend') }}</span>
            </li>
          </ul>
        </div>

        <!-- Column 3 - Services -->
        <div class="column">
          <p class=""><strong>{{ $t('nav.services') }}</strong></p>
          <ul id="Services">
            <li>
              <a href="/services" class="hrb-link btn-auto">{{ $t('services.service1.items[0]') }}</a>
            </li>
            <li>
              <a href="/services" class="hrb-link btn-auto">{{ $t('services.service2.items[0]') }}</a>
            </li>
            <li>
              <a href="/services" class="hrb-link btn-auto">{{ $t('services.service3.items[0]') }}</a>
            </li>
          </ul>
        </div>

        <!-- Column 4 - Contact -->
        <div class="column">
          <p class=""><strong>{{ $t('contact.title') }}</strong></p>
          <ul id="Contact">
            <li>
              <span class="contact-text">{{ $t('footer.address') }}</span>
            </li>
            <li>
              <span class="contact-text">{{ $t('footer.email') }}</span>
            </li>
            <li>
              <span class="contact-text">{{ $t('footer.fax') }}</span>
            </li>
            <li>
              <a href="/contact" class="hrb-link btn-auto">{{ $t('nav.contactUs') }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Legal Footer -->
    <div class="container">
      <div class="column-container copyright-footer sm-md-column-reverse">
        <div class="column">
          <div class="copyright">
            <p>&copy; 2024-2025 {{ $t('footer.companyName') }} {{ $t('footer.businessNumber') }}</p>
            <p>{{ $t('footer.representative') }}</p>
          </div>
        </div>
        
        <!-- Social Media Icons -->
        <div class="column">
          <ul class="social-media">
            <li>
              <a href="https://blog.naver.com/berkeleytax" rel="noreferrer noopener" aria-label="Link opens in new tab" target="_blank" class="icon-btn white">
                <span class="icon-svg icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 8.59L14 11.17V8H12V16H14V12.83L16.59 15.41L18 14L13 9L18 4L16.59 5.41L16.59 8.59Z" fill="white"/>
                  </svg>
                </span>
                <span class="btn-label reader">Naver Blog</span>
              </a>
            </li>
            <li>
              <a :href="'mailto:' + $t('footer.email').split(':')[1].trim()" class="icon-btn white">
                <span class="icon-svg icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
                  </svg>
                </span>
                <span class="btn-label reader">Email</span>
              </a>
            </li>
            <li>
              <a :href="'tel:' + $t('footer.phone').replace(/[^0-9]/g, '')" class="icon-btn white">
                <span class="icon-svg icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white"/>
                  </svg>
                </span>
                <span class="btn-label reader">Phone</span>
              </a>
            </li>
          </ul>
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
/* Footer Styles */
.site-footer {
  width: 100%;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.blue-theme {
  background: linear-gradient(135deg, #002676 0%, #004ea8 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

/* Support Section */
.need-help-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.need-help-footer h2 {
  font-size: 1.5rem;
  margin: 0;
}

.color-white {
  color: white;
}

.icon-btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.icon-btn:hover {
  opacity: 0.8;
}

.icon-svg {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
}

.btn-label {
  font-size: 1rem;
  font-weight: 500;
}

/* Footer Links Section */
.column-container {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.links-footer {
  justify-content: space-between;
}

.column {
  flex: 1;
  min-width: 200px;
  padding: 0 1rem;
}

.column p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.column ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.column ul li {
  margin-bottom: 0.7rem;
}

.hrb-link {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.hrb-link:hover {
  color: #A5CDFD;
  text-decoration: underline;
}

.contact-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  display: block;
}

/* Copyright Section */
.copyright-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.3rem 0;
}

/* Social Media Icons */
.social-media {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
}

.social-media li {
  margin-left: 1rem;
}

.social-media .icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.social-media .icon-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.reader {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Media Queries */
@media screen and (max-width: 992px) {
  .column {
    flex: 0 0 50%;
    margin-bottom: 2rem;
  }
  
  .need-help-footer {
    flex-direction: column;
    text-align: center;
  }
  
  .need-help-footer h2 {
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .column {
    flex: 0 0 100%;
  }
  
  .sm-md-column-reverse {
    flex-direction: column-reverse;
  }
  
  .copyright {
    text-align: center;
    margin-top: 1.5rem;
  }
  
  .social-media {
    justify-content: center;
    margin-bottom: 1.5rem;
  }
}
</style>
