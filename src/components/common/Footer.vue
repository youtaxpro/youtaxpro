<template>
  <footer class="footer">
    <h4>&copy; 2024 Berkeley U.S. Tax Advisors All rights reserved.</h4>
    <div class="social-links">
      <a>{{ $t('footer.companyName') }}</a>
      <a>{{ $t('footer.representative') }}</a>
      <a>{{ $t('footer.address') }}</a>
    </div>
    <div class="social-links">
      <a>{{ $t('footer.businessNumber') }}</a>
      <a>{{ $t('footer.phone') }}</a>
      <a>{{ $t('footer.fax') }}</a>
      <a>{{ $t('footer.email') }}</a>
      <a>{{ $t('footer.blog') }}</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  padding: 2rem;
  background-color: gainsboro;
  width: 100%;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  justify-content: center;
  align-items: center;
}

.footer h4 {
  color: transparent;
  background-image: linear-gradient(
    to right, 
    #00008B 0%,
    #0047AB 25%,
    #1E90FF 50%,
    #4169E1 75%,
    #6495ED 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  font-size: medium;
}

.social-links a {
  color: #333;
  margin: 0 1rem;
  font-size: 0.7rem;
}

@media screen and (max-width: 768px) {
  .social-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .social-links a {
    padding: 0.3rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .social-links a:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .footer h4 {
    padding-bottom: 1rem;
  }
}
</style>
