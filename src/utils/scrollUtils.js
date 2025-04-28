/**
 * 부드러운 스크롤 애니메이션을 수행하는 함수
 * @param {string} sectionId - 스크롤할 섹션의 ID
 */
export function scrollToSection(sectionId) {
  const targetElement = document.getElementById(sectionId);
  if (!targetElement) return;

  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.offsetTop;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
}

/**
 * easeInOutQuad 애니메이션 함수
 */
export function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

/**
 * 페이지 내 링크 클릭 시 동작하는 핸들러
 * @param {string} section - 이동할 섹션의 ID나 경로
 * @param {Ref<string>} activeLink - 현재 활성화된 링크 상태 저장하는 ref
 */
export function handleLinkClick(section, activeLink) {
  if (activeLink) {
    activeLink.value = section;
  }
  
  if (section.startsWith('#')) {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
