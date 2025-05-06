// 이미지 로더 유틸리티
// 브라우저 지원에 따라 최적의 이미지 형식을 로드하는 함수

/**
 * 브라우저 지원에 따라 최적화된 이미지 경로를 생성합니다.
 * @param {string} imageName - 확장자를 제외한 이미지 이름(예: 'service1')
 * @param {string} fallbackExt - 폴백 확장자(예: 'jpg')
 * @returns {Object} - picture 요소에서 사용할 소스 객체
 */
export function getOptimizedImageSources(imageName, fallbackExt = 'jpg') {
  // 기본 이미지 경로
  const basePath = `/src/assets/${imageName}`;
  // 최적화된 이미지 경로
  const optimizedPath = `/src/assets/optimized/${imageName}`;
  
  // 기본 이미지 (JPG/PNG 등 기존 형식)
  const fallbackSrc = `${basePath}.${fallbackExt}`;
  
  // 각 형식별 소스 객체 배열
  const sources = [
    {
      type: 'image/avif',
      srcset: `${optimizedPath}.avif`
    },
    {
      type: 'image/webp',
      srcset: `${optimizedPath}.webp`
    }
  ];
  
  return {
    sources,
    fallbackSrc
  };
}

/**
 * 이미지 사전 로딩을 위한 함수
 * @param {Array} imageNames - 사전 로딩할 이미지 이름 배열
 */
export function preloadImages(imageNames) {
  // 이미지 사전 로딩 로직
  imageNames.forEach(name => {
    const img = new Image();
    img.src = `/src/assets/optimized/${name}.webp`;
  });
}

/**
 * 이미지 로딩 지연을 위한 IntersectionObserver 설정
 * @param {string} selector - 지연 로딩할 이미지 선택자
 */
export function setupLazyLoading(selector = '.lazy-image') {
  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          
          // 데이터 속성에서 실제 이미지 URL 가져오기
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute('data-src');
          }
          
          // srcset 설정
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.removeAttribute('data-srcset');
          }
          
          // 로드 후 클래스 변경
          lazyImage.classList.remove('lazy-image');
          lazyImage.classList.add('loaded');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    // 모든 지연 로딩 이미지에 Observer 적용
    document.querySelectorAll(selector).forEach((image) => {
      lazyImageObserver.observe(image);
    });
  } else {
    // IntersectionObserver가 지원되지 않는 브라우저를 위한 폴백
    // 간단한 스크롤 이벤트로 대체
    let lazyloadThrottleTimeout;
    
    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset;
        
        document.querySelectorAll(selector).forEach((img) => {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
              img.removeAttribute('data-srcset');
            }
            
            img.classList.remove('lazy-image');
            img.classList.add('loaded');
          }
        });
        
        if (document.querySelectorAll(selector).length === 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationChange', lazyload);
        }
      }, 20);
    }

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  }
}
