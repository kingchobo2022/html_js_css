document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault();

    const agreeCheckbox = document.getElementById("agreeCheckbox");

    if(!agreeCheckbox.checked) {
        alert('이용약관에 동의하셔야 회원가입이 가능합니다.');
        agreeCheckbox.focus();
        return;
    }

    alert('감사합니다! 회원 가입 페이지로 이동합니다.');
    window.location.href='./49.html';
});


document.addEventListener("DOMContentLoaded", function(){
    const popup = document.getElementById('mainPopup');
    const closeBtn = document.getElementById('closeBtn');
    const todayCheck = document.getElementById('todayCheck');

    const popupData = localStorage.getItem('hidenMainPopup33');
    const now = new Date().getTime();

    if(!popupData || now > parseInt(popupData)) {
        popup.style.display = 'block';
    }

    closeBtn.addEventListener('click', function() {
        if(todayCheck.checked) {
            const expiryDate = new Date().getTime() + (24 * 60 * 60 * 1000);
            localStorage.setItem('hidenMainPopup33', expiryDate);
        }
        popup.style.display = 'none';
    });
});