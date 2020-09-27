const tbody = document.querySelector(".tbody");

const tbodyContent = [
  {
    pageName: "웰컴",
    link: "./done/welcome/welcome.html",
    image: "",
    done: false,
  },
  {
    pageName: "로그인",
    link: "",
    image: "",
    done: false,
  },
  {
    pageName: "아이디 비밀번호 찾기",
    link: "",
    image: "",
    done: false,
  },
  {
    pageName: "비밀번호 찾기",
    link: "",
    image: "",
    done: false,
  },
  {
    pageName: "간편 회원가입",
    link: "",
    image: "",
    done: false,
  },
  {
    pageName: "가입정보 입력(이메일)",
    link: "",
    image: "",
    done: false,
  },
  {
    pageName: "가입정보 입력(간편)",
    link: "",
    image: "",
    done: false,
  },
  {
    pageName: "코드 입력",
    link: "",
    image: "",
    done: false,
  },
  {
    pageName: "메인",
    link: "",
    image:
      "https://drive.google.com/file/d/1IsW4prCl92bwHqJDz4j8v30OUXRMujxS/view?usp=sharing",
    done: false,
  },
  {
    pageName: "메인 - 설정",
    link: "",
    image: "",
    done: false,
  },
  {
    pageName: "캘린더",
    link: "",
    image: "",
    done: false,
  },
  {
    pageName: "앨범",
    link: "",
    image:
      "https://drive.google.com/file/d/1o_uuy964bU_1fkUNpA4YL9cq1LNqzoeH/view?usp=sharing",
    done: false,
  },
  {
    pageName: "앨범 - 스크롤",
    link: "",
    image:
      "https://drive.google.com/file/d/1z-kHJQ17-0_o7uofprtNcJPFCwImftzk/view?usp=sharing",
    done: false,
  },
  {
    pageName: "채팅",
    link: "",
    image: "",
    done: false,
  },
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
