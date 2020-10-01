import siteList from "./siteList";
const tbody = document.querySelector(".tbody");

const tbodyContent = siteList();
console.log(tbodyContent);

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
