const tbody = document.querySelector(".tbody");

const tbodyContent = [
  {
    pageName: "웰컴",
    link: "./done/welcome/welcome.html",
    image: "",
    done: true,
  },
  {
    pageName: "로그인",
    link: "./done/login/login.html",
    image: "",
    done: true,
  },
  {
    pageName: "아이디 비밀번호 찾기",
    link: "./done/findUserInfomation/findUserInfomation.html",
    image: "",
    done: true,
  },
  {
    pageName: "비밀번호 찾기",
    link: "./done/findPassword/findPassword.html",
    image: "",
    done: true,
  },
  {
    pageName: "비밀번호 변경",
    link: "./done/resetPassword/resetPassword.html",
    image: "",
    done: true,
  },
  {
    pageName: "간편 회원가입",
    link: "./done/signup/signup.html",
    image: "",
    done: true,
  },
  {
    pageName: "가입정보 입력(이메일)",
    link: "./done/signup-insert-information/insertInformation.html",
    image: "",
    done: true,
  },
  {
    pageName: "가입정보 입력(간편)",
    link:
      "./done/signup-insert-information-simple/insertInformation_simple.html",
    image: "",
    done: true,
  },
  {
    pageName: "코드 입력",
    link: "./done/insert-code/insertCode.html",
    image: "",
    done: true,
  },
  {
    pageName: "메인",
    link: "./done/main/Krikri.html",
    image: "",
    done: true,
  },
  {
    pageName: "메인 - 설정",
    link: "./done/setting/setting.html",
    image: "",
    done: true,
  },
  {
    pageName: "캘린더 - 메인",
    link: "./done/calendar-main/calendar.html",
    image:
      "https://drive.google.com/file/d/1BfdAegsudC6XUezAUZuxUaTYZc0Ir-NI/view?usp=sharing",
    done: true,
  },
  // {
  //   pageName: "캘린더 - 선택 년도 한눈에 보기",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/1ZGCrsn6R5XAvmQAA-j5jz8xlycGCdFJ3/view?usp=sharing",
  //   done: false,
  // },
  // {
  //   pageName: "캘린더 - 일정 없는 날짜 선택",
  //   link: "./done/calendar-add-schedule/calendar1.html",
  //   image:
  //     "https://drive.google.com/file/d/1w4SbnhHo88CerViweRnfMNU_wsWolKQx/view?usp=sharing",
  //   done: true,
  // },
  // {
  //   pageName: "캘린더 - 일정 있는 날짜 선택",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/1w8jNaP31AiDd00cyg7x5jy_NvcaNXK3H/view?usp=sharing",
  //   done: false,
  // },
  // {
  //   pageName: "캘린더 - 일정 추가",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/17QgNkFisv-gnpvUihjNyLv2c-R2soHpZ/view?usp=sharing",
  //   done: false,
  // },
  // {
  //   pageName: "캘린더 - 일정 추가(글 작성)",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/1IqNAkKpcphM4W8ThyAfkgRi7rbaiaAfB/view?usp=sharing",
  //   done: false,
  // },
  // {
  //   pageName: "캘린더 - 기념일 추가",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/1NPVlo2pXS-qzH8n1dPBk27wYatrTtBnm/view?usp=sharing",
  //   done: false,
  // },
  // {
  //   pageName: "캘린더 - 필터 추가 팝업",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/19dxlyK3og6q-fCjaZAI3qrQiTqvR3LlE/view?usp=sharing",
  //   done: false,
  // },
  // {
  //   pageName: "캘린더 - 필터 수정 팝업",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/1dPOLn_DJN4gONp-PieDFJyn8OikFXxtO/view?usp=sharing",
  //   done: false,
  // },
  {
    pageName: "앨범 - 메인",
    link: "./done/album/Krikri.html",
    image:
      "https://drive.google.com/file/d/1hemSM0hR5tveKcZ7niv1IvqtBcTCDieL/view?usp=sharing",
    done: true,
  },
  {
    pageName: "앨범 - 메인 (스크롤)",
    link: "",
    image:
      "https://drive.google.com/file/d/1LbAcFq71eLyniLz0fp2m6-1ELkeHX9FX/view?usp=sharing",
    done: true,
  },
  {
    pageName: "앨범 - 사진 추가",
    link: "",
    image:
      "https://drive.google.com/file/d/1HfnnG5VvCY-xiL9tvzaqA0MFdd7_Estg/view?usp=sharing",
    done: true,
  },
  {
    pageName: "앨범 - 사진 추가(코멘트)",
    link: "",
    image:
      "https://drive.google.com/file/d/1TZXxADfhuRlKXNQYSZV9YgL1gbft9KlV/view?usp=sharing",
    done: true,
  },
  {
    pageName: "앨범 - 사진 선택",
    link: "",
    image:
      "https://drive.google.com/file/d/1MmuqFA0bE4IEXYwSIQmroLtjv1MjHpCO/view?usp=sharing",
    done: true,
  },
  // {
  //   pageName: "앨범 - 사진 선택 - 그룹추가 팝업",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/1-7JKvjS-wE-oT316ZNIsd4qVoz0iUIZT/view?usp=sharing",
  //   done: false,
  // },
  {
    pageName: "앨범 - 사진 선택 - 삭제 팝업",
    link: "",
    image:
      "https://drive.google.com/file/d/1-vqr9oyy9kO9ZMzrcXCesLJxrFvQwC_s/view?usp=sharing",
    done: true,
  },
  {
    pageName: "앨범 - 사진 선택 (+대화창)",
    link: "",
    image:
      "https://drive.google.com/file/d/1HH73gOKz_BppEo9B9_yab33YHsh4RMNJ/view?usp=sharing",
    done: true,
  },
  // {
  //   pageName: "앨범 - 그룹",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/19kyK9k3WbV0Buhmj9UVDhLnGH2DBId4t/view?usp=sharing",
  //   done: false,
  // },
  // {
  //   pageName: "앨범 - 그룹 (+대화창)",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/1ljOOnO5C0j6MbIh-tCzDccH3ZWENi7Gy/view?usp=sharing",
  //   done: false,
  // },
  {
    pageName: "앨범 (+대화창) ",
    link: "",
    image:
      "https://drive.google.com/file/d/1HH73gOKz_BppEo9B9_yab33YHsh4RMNJ/view?usp=sharing",
    done: true,
  },
  {
    pageName: "채팅 - 전체화면",
    link: "./done/chatting/chatting.html",
    image:
      "https://drive.google.com/file/d/1tFkxKNe0YDVksgIEcZvFOWHf_bksNZS5/view?usp=sharing",
    done: true,
  },
  // {
  //   pageName: "채팅 - 사진보내기 (전체화면)",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/18n1o1MOX992DOje4yFHPF9eviaCVCkkK/view?usp=sharing",
  //   done: false,
  // },
  // {
  //   pageName: "채팅 - 하단 추가",
  //   link: "",
  //   image:
  //     "https://drive.google.com/file/d/1fqdbSzc6ahSn6xLcI2bZH4oHXcSoGJZQ/view?usp=sharing",
  //   done: false,
  // },
];

const printPageContent = function () {
  tbodyContent.map((content) => {
    const tr = document.createElement("tr");

    // 페이지 이름
    const pageText = document.createTextNode(content.pageName);
    const page = document.createElement("td");
    page.appendChild(pageText);

    // 링크
    const linkText = document.createTextNode(
      `${
        content.link
          ? content.link
          : content.image
          ? `${content.pageName} 디자인 이미지`
          : "작업중"
      }`
    );
    const a = document.createElement("a");
    a.appendChild(linkText);
    if (content.link || content.image) {
      a.href = content.link ? content.link : content.image;
    }
    if (content.link || content.image) {
      a.target = "_blank";
    }
    const link = document.createElement("td");
    link.appendChild(a);
    link.className = content.link ? "page" : content.image ? "image" : "";

    // 완료여부
    const doneText = document.createTextNode(`${content.done ? "O" : "X"}`);
    const done = document.createElement("td");
    done.append(doneText);

    tr.appendChild(page);
    tr.appendChild(link);
    tr.appendChild(done);

    tbody.appendChild(tr);
  });
};

window.onload = printPageContent();
