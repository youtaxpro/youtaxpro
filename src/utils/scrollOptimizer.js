/**
 * 스크롤 최적화 유틸리티
 * 이 파일은 스크롤 성능을 개선하기 위한 함수들을 제공합니다.
 */

/**
 * 디바운스 함수
 * 연속적인 호출에서 마지막 호출만 실행되도록 합니다.
 * @param {Function} func - 실행할 함수
 * @param {number} wait - 지연 시간 (밀리초)
 * @returns {Function} 디바운스된 함수
 */
export function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * 스로틀 함수
 * 일정 시간 내에 한 번만 함수가 실행되도록 합니다.
 * @param {Function} func - 실행할 함수
 * @param {number} limit - 제한 시간 (밀리초)
 * @returns {Function} 스로틀된 함수
 */
export function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * 최적화된 스크롤 이벤트 핸들러 설정
 * @param {Function} callback - 스크롤 이벤트 발생 시 실행할 콜백 함수
 * @param {Object} options - 옵션 객체
 * @param {number} options.throttleTime - 스로틀 시간 (밀리초)
 * @param {boolean} options.useRequestAnimationFrame - requestAnimationFrame 사용 여부
 * @returns {Function} 이벤트 리스너 제거 함수
 */
export function setupOptimizedScroll(callback, { throttleTime = 100, useRequestAnimationFrame = true } = {}) {
  let ticking = false;
  let lastScrollY = window.scrollY;
  
  // 최적화된 스크롤 핸들러
  function optimizedScrollHandler() {
    lastScrollY = window.scrollY;
    
    if (useRequestAnimationFrame) {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          callback(lastScrollY);
          ticking = false;
        });
        ticking = true;
      }
    } else {
      callback(lastScrollY);
    }
  }
  
  // 스로틀 적용된 핸들러
  const throttledScrollHandler = throttle(optimizedScrollHandler, throttleTime);
  
  // 스크롤 이벤트 리스너 등록
  window.addEventListener('scroll', throttledScrollHandler, { passive: true });
  
  // 이벤트 리스너 제거 함수 반환
  return () => {
    window.removeEventListener('scroll', throttledScrollHandler);
  };
}

/**
 * 요소가 뷰포트에 진입했는지 감지하는 IntersectionObserver 설정
 * @param {Function} callback - 요소가 뷰포트에 진입/이탈할 때 호출되는 콜백
 * @param {Object} options - IntersectionObserver 옵션
 * @returns {IntersectionObserver} IntersectionObserver 인스턴스
 */
export function createViewportObserver(callback, options = {}) {
  const defaultOptions = {
    root: null, // 기본값은 viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% 보일 때 감지
  };
  
  const observerOptions = { ...defaultOptions, ...options };
  
  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      callback(entry, observer);
    });
  }, observerOptions);
}
