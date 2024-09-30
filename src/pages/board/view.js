const boardsStr = localStorage.getItem("boards");
// localStorage에 저장된 item: string 형태로 저장되어 있음 -> parse를 통해 array로 변환
const boardsObj = JSON.parse(boardsStr);

// 쿼리스트링의 객체 불러오기
const params = new URLSearchParams(window.location.search);
console.log(params);
const index = params.get("index");

const board = boardsObj[index];

const viewFrm = document.querySelectorAll("#viewFrm > div");

for (let i = 0; i < viewFrm.length; i++) {
    const id = viewFrm[i].id;
    viewFrm[i].innerText = board[id];
}

const modifyBtn = document.querySelector("#modify");

const handleModifyBtn = () => {
    location = "./modify.html" + idxObj;
}

modifyBtn.addEventListener("click", handleModifyBtn);