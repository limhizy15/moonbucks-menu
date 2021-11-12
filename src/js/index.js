// step1 요구사항 구현을 위한 전략
// 어떤걸 먼저 구현하는 게 좋을까? 여행계획 짜듯이!
// 목적을 구체적으로! 구현에 필요한 지식을 빠르게 알 수 있다

/*
TODO 메뉴추가
- [x] 메뉴를 입력받고 확인을 클릭시 메뉴가 추가된다.
- [x] 메뉴를 입력받고 엔터키를 누르면 메뉴가 추가된다.
- [x] 추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
- [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
- [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
- [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

TODO 메뉴수정
- [ ] 메뉴 수정버튼을 누르면 prompt를 띄워 변경할 이름을 입력받는다.
- [ ] 확인을 누르면 입력받은 이름으로 기존 메뉴이름을 변경한다.

TODO 메뉴삭제
- [ ] 메뉴 삭제버튼을 누르면 confirm을 띄워 삭제 여부를 알아낸다.
- [ ] 확인을 누르면 해당 메뉴를 삭제, 취소를 누르면 유지한다.
- [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.
*/

// 유틸함수! 넘 길어지고 있어 코드가
// DOM요소를 가져올 때 관용적으로 달러표시를 많이 쓴다.
const $ = (selector) => document.querySelector(selector);

function App() {
  // 엔터키를 쳤을 때 새로고침되는 것을 막는다.
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const addEspressoMenu = () => {
    const espressoMenuName = $("#espresso-menu-name").value;
    if (espressoMenuName === "") {
      alert("메뉴명을 입력해주세요");
      return;
    }
    const menuItemTemplate = (espressoMenuName) => {
      return `<li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
      >
        수정
      </button>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
      >
        삭제
      </button>
    </li>`;
    };
    $("#espresso-menu-list").insertAdjacentHTML(
      "beforeend",
      menuItemTemplate(espressoMenuName)
    );
    // count 업데이트
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${menuCount}개`;
    $("#espresso-menu-name").value = "";
  };

  $("#espresso-menu-submit-button").addEventListener("click", (e) => {
    addEspressoMenu();
  });

  // 메뉴의 이름을 입력받는다.
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      addEspressoMenu();
    }
  });
}

App();
