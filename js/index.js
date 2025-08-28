var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true, // 루프 기능
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "custom-bullet",
    bulletActiveClass: "custom-bullet-active"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 페이지 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
  
  // 한화 REIT 투자자산 슬라이더 초기화
  const investmentSwiper = new Swiper('.investment-swiper', {
    // 기본 설정
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: false,
    
      loop: true, // 루프 기능
      
    // 자동 재생
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  
  // 터치/드래그 설정
  touchRatio: 1,
  simulateTouch: true,
  grabCursor: true,
  touchEventsTarget: 'container',
  
  // 효과 설정
  speed: 800,
  effect: 'slide',
  
  // 키보드 네비게이션 (선택사항)
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  
  // 마우스휠 스크롤 (선택사항)
  mousewheel: {
    enabled: false, // 필요시 true로 변경
  },
  
  // 페이지네이션 (숨겨도 기능은 유지)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  
  // 네비게이션 (숨겨도 기능은 유지)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // 반응형 설정 (순서 수정 - 작은 화면부터)
  breakpoints: {
    // 모바일 (0px ~ 639px)
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    // 태블릿 (640px ~ 767px)
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    // 태블릿 가로 (768px ~ 1023px)
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
      centeredSlides: false,
    },
    // 데스크톱 (1024px 이상)
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    // 대형 화면 (1200px 이상)
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: false,
    }
  },
  
  // 이벤트 콜백
  on: {
    init: function () {
      console.log('투자자산 슬라이더 초기화 완료');
    },
    slideChange: function () {
      // 슬라이드 변경 시 실행할 코드 (필요시)
      console.log('현재 슬라이드:', this.activeIndex);
    },
    touchStart: function () {
      // 터치/드래그 시작 시 자동재생 일시정지
      this.autoplay.stop();
    },
    touchEnd: function () {
      // 터치/드래그 끝난 후 자동재생 재시작
      setTimeout(() => {
        this.autoplay.start();
      }, 3000);
    }
  }
});

// 추가 제어 함수들 (필요시 사용)
function nextSlide() {
  investmentSwiper.slideNext();
}

function prevSlide() {
  investmentSwiper.slidePrev();
}

function pauseSlider() {
  investmentSwiper.autoplay.stop();
}

function resumeSlider() {
  investmentSwiper.autoplay.start();
}

// 윈도우 리사이즈 시 슬라이더 업데이트
window.addEventListener('resize', () => {
  if (investmentSwiper) {
    investmentSwiper.update();
  }
});

  // 페이지 가시성 변경 시 자동재생 제어 (브라우저 탭 변경 등)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      investmentSwiper.autoplay.stop();
    } else {
      investmentSwiper.autoplay.start();
    }
  });

  // 전역 함수로 접근 가능하도록 설정
  window.investmentSwiper = investmentSwiper;

});