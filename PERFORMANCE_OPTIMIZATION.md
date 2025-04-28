# 웹사이트 성능 최적화 가이드

이 문서는 홈페이지의 성능을 최적화하기 위한 방법을 설명합니다.

## 1. 이미지 최적화

홈페이지의 로딩 속도를 향상시키기 위해 이미지를 최적화해야 합니다. 특히 배경 이미지와 같은 큰 이미지 파일은 페이지 렌더링 속도에 큰 영향을 미칩니다.

### 이미지 최적화 스크립트 실행하기

1. 프로젝트 루트 디렉토리에서 다음 배치 파일을 실행합니다:
   ```
   optimize-images.bat
   ```

2. 스크립트는 다음 작업을 수행합니다:
   - `sharp` 라이브러리 설치 (이미지 처리용)
   - `src/assets` 디렉토리 내 모든 이미지 파일 스캔
   - 각 이미지를 최적화된 JPG와 WebP 형식으로 변환
   - 변환된 이미지를 `src/assets/optimized` 디렉토리에 저장
   - 이미지 사용을 위한 헬퍼 파일 생성 (`src/assets/optimized/images.js`)

### 최적화된 이미지 사용하기

`OptimizedImage` 컴포넌트를 사용하여 최적화된 이미지를 쉽게.적용할 수 있습니다:

```vue
<template>
  <OptimizedImage 
    :src="sanfran1Image.jpg" 
    :webpSrc="sanfran1Image.webp" 
    alt="San Francisco"
    imgClass="hero-image"
  />
</template>

<script>
import { sanfran1Image } from '@/assets/optimized/images';
import OptimizedImage from '@/components/common/OptimizedImage.vue';

export default {
  components: { OptimizedImage },
  setup() {
    return { sanfran1Image };
  }
}
</script>
```

## 2. 스크롤 성능 최적화

스크롤 성능을 개선하기 위해 `scrollOptimizer.js` 파일에 있는 유틸리티 함수를 사용할 수 있습니다.

### Navbar.vue에 적용하기

```vue
<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { setupOptimizedScroll } from '@/utils/scrollOptimizer';

export default {
  setup() {
    const isScrolled = ref(false);
    let removeScrollListener;

    onMounted(() => {
      // 최적화된 스크롤 핸들러 설정
      removeScrollListener = setupOptimizedScroll((scrollY) => {
        isScrolled.value = scrollY > 50;
      });
    });

    onBeforeUnmount(() => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      if (removeScrollListener) removeScrollListener();
    });

    return { isScrolled };
  }
}
</script>
```

### 컴포넌트 지연 로딩

페이지 스크롤에 따라 필요한 시점에 컴포넌트를 로드하려면 `createViewportObserver`를 사용하세요:

```vue
<template>
  <div ref="sectionRef" class="section-container">
    <template v-if="isVisible">
      <!-- 내용이 뷰포트에 들어왔을 때만 렌더링 -->
      <ServiceSection />
    </template>
    <div v-else class="placeholder" style="height: 500px;"></div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { createViewportObserver } from '@/utils/scrollOptimizer';
import ServiceSection from './ServiceSection.vue';

export default {
  components: { ServiceSection },
  setup() {
    const sectionRef = ref(null);
    const isVisible = ref(false);
    let observer;

    onMounted(() => {
      observer = createViewportObserver((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          // 한 번 보이면 관찰 중단
          observer.unobserve(entry.target);
        }
      });

      if (sectionRef.value) {
        observer.observe(sectionRef.value);
      }
    });

    onBeforeUnmount(() => {
      if (observer && sectionRef.value) {
        observer.unobserve(sectionRef.value);
      }
    });

    return {
      sectionRef,
      isVisible
    };
  }
}
</script>
```

## 3. CSS 애니메이션 최적화

CSS 애니메이션이 성능에 미치는 영향을 최소화하기 위한 팁:

1. `transform`과 `opacity` 속성 위주로 애니메이션 구현하기
   ```css
   /* 권장 (더 부드러운 애니메이션) */
   .element {
     transform: translateY(0);
     transition: transform 0.3s ease;
   }
   .element:hover {
     transform: translateY(-5px);
   }

   /* 지양 (레이아웃 변경 발생) */
   .element {
     margin-top: 0;
     transition: margin-top 0.3s ease;
   }
   .element:hover {
     margin-top: -5px;
   }
   ```

2. `will-change` 속성 사용하기 (단, 남용하지 말것)
   ```css
   .card {
     will-change: transform;
   }
   ```

## 4. 배경 이미지 처리 전략

큰 배경 이미지가 있는 경우 다음 전략을 고려하세요:

1. 이미지 크기 줄이기 및 압축하기
2. 그라데이션 오버레이 추가하기 (이미지 디테일 손실 감소)
3. 고해상도 화면 대응:
   ```css
   .hero-section {
     background-image: url('../assets/optimized/sanfran1-small.jpg');
   }

   @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
     .hero-section {
       background-image: url('../assets/optimized/sanfran1.jpg');
     }
   }
   ```

## 5. 추가 리소스 지연 로딩

외부 스크립트나 큰 라이브러리는 필요할 때만 로드하세요:

```javascript
// 지연 로딩 예제
const loadExternalScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://example.com/heavy-script.js';
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
};

// 필요할 때만 로드
const initMap = async () => {
  await loadExternalScript();
  // 이제 외부 스크립트 사용 가능
};
```

## 성능 모니터링

웹사이트의 성능을 모니터링하려면 다음 도구를 사용하세요:

1. Chrome DevTools의 Performance 패널
2. Lighthouse 감사 (Chrome DevTools에 통합됨)
3. [PageSpeed Insights](https://pagespeed.web.dev/)
4. [WebPageTest](https://www.webpagetest.org/)
