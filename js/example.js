const nameH1Elemnent = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
const studentNoElement = document.querySelector('span.studentNo');
const emailElement = document.querySelector('span.email');


const inputModalElement = document.querySelector('#inputModal');

const setUserName = (name) => {
    nameH1Elemnent.textContent = name;
    connectNameElement.textContent = name;
}

const setUserNo = (num) => {
    studentNoElement.textContent = num;
}

const setEmail = (email) => {
    emailElement.textContent = email;
}

const localName = localStorage.getItem('name');
const localNo = localStorage.getItem('studentNo');
const localemail = localStorage.getItem('email');
const localUserName = localStorage.getItem('userName');
if(localName) setUserName(localName);
if(localUserName) setUserName(localUserName);
if(localNo) setUserNo(localNo);
if(localemail) setEmail(localemail);

nameH1Elemnent.onclick = () => {
    inputModalElement.showModal();
    // const inputName = prompt('이름을 입력해 주세요.');
    // if(inputName){
    //     localStorage.setItem('name', inputName);

    //     setUserName(inputName);
    // }
    // else {
    //     alert('이름이 입력되지 않았습니다.');
    // }

}

const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
    const modalFormElement = document.querySelector('.modalForm');
    const formData = new FormData(modalFormElement);
    
    for (const [key, value] of formData) {
        localStorage.setItem(key, value);
        if(key ==='userName') setUserName(value);
        if(key === 'studentNo') setUserNo(value);
        if(key === "email") setEmail(value);
    }
    inputModalElement.close();
};

inputModalElement.onclick = (event) =>{
    if(event.target.nodeName === 'DIALOG') inputModalElement.close();
}