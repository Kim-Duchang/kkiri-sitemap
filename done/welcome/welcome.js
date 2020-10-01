window.onload = function () {
  // DOM 선언
  const slideList = document.querySelector(".slider");
  const slideContents = slideList.querySelectorAll("div");
  const slideBtnLeft = document.querySelector(".left_move_btn");
  const slideBtnRight = document.querySelector(".right_move_btn");

  // 슬라이드 카피
  const firstSlide = slideList.firstElementChild;
  const lastSlide = slideList.lastElementChild;
  const cloneFirstSlide = firstSlide.cloneNode(true);
  const cloneLastSlide = lastSlide.cloneNode(true);
  // 카피된 슬라이드 붙이기
  slideList.insertBefore(cloneLastSlide, firstSlide);
  slideList.appendChild(cloneFirstSlide);

  // 슬라이드 관련 선언
  const SLIDE_SPEED = 300;
  const SLIDE_LENGTH = slideContents.length;

  let curContent = 0;
  let windowWidth = this.innerWidth;
  // console.log(slideContents);

  // 맨처음 화면이 -1번째 슬라이드가 아니고 0번 슬라이드로 시작할 수 있도록
  const slideInit = function () {
    slideList.style.transform = `translate3d(-${windowWidth}px, 0px, 0px)`;
  };
  slideInit();

  // 왼쪽 (이전) 버튼 핸들러
  const handleSlideLeft = function moveSlideRightToLeft() {
    // console.log("click lef;
    if (curContent >= 0) {
      // console.log("슬라이드 넘어감");
      slideList.style.transition = `${SLIDE_SPEED}ms`;
      slideList.style.transform = `translate3d(-${
        windowWidth * curContent
      }px, 0px, 0px)`;
      // console.log(windowWidth * curContent);
    }
    if (curContent === 0) {
      // console.log(`처음 슬라이드에서 left click!`);
      setTimeout(() => {
        slideList.style.transition = `0ms`;
        slideList.style.transform = `translate3d(-${
          windowWidth * SLIDE_LENGTH
        }px, 0px, 0px)`;
        curContent = SLIDE_LENGTH - 1;
      }, SLIDE_SPEED);
    }
    --curContent;
  };

  // 오른쪽 (다음) 버튼 핸들러
  const handleSlideRight = function moveSlideLeftToRight() {
    // console.log("click right");
    // console.log(curContent);
    if (curContent <= SLIDE_LENGTH - 1) {
      slideList.style.transition = `${SLIDE_SPEED}ms`;
      slideList.style.transform = `translate3d(-${
        windowWidth * (curContent + 2)
      }px, 0px, 0px)`;
    }
    if (curContent === SLIDE_LENGTH - 1) {
      // console.log(`마지막 슬라이드에서 right click!`);
      setTimeout(() => {
        slideList.style.transition = `0ms`;
        slideList.style.transform = `translate3d(-${windowWidth}px, 0px, 0px)`;
        curContent = 0;
      }, SLIDE_SPEED);
    }
    ++curContent;
  };

  window.addEventListener("resize", function () {
    windowWidth = this.innerWidth;
    // console.log(windowWidth);
    for (let i = 0; i < SLIDE_LENGTH; i++) {
      slideContents[i].style.width = `${windowWidth}px`;
    }
    // console.dir(slideContents[1].style.width);
    slideInit();
  });
  slideBtnLeft.addEventListener("click", handleSlideLeft);
  slideBtnRight.addEventListener("click", handleSlideRight);
};
