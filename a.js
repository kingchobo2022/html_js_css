document.getElementById('signupForm').addEventListener('submit', function(event) {
    // 기본 제출 동작 방지
    event.preventDefault();

    const agreeCheckbox = document.getElementById('agreeCheckbox');

    // 체크박스 체크 여부 확인
    if (!agreeCheckbox.checked) {
        alert('이용약관에 동의하셔야 회원가입이 가능합니다.');
        agreeCheckbox.focus();
        return;
    }

    // 체크가 되었을 때의 처리
    alert('감사합니다! 회원가입 페이지로 이동합니다.');
    // 실제 이동 시에는 아래 주석 해제
    // window.location.href = 'next-step.html';
});


document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('mainPopup');
    const closeBtn = document.getElementById('closeBtn');
    const todayCheck = document.getElementById('todayCheck');
    
    // 1. 저장된 스토리지 확인
    const popupData = localStorage.getItem('hideMainPopup12');
    const now = new Date().getTime();

    // 저장된 시간이 없거나, 저장된 시간이 현재보다 과거라면 팝업 노출
    if (!popupData || now > parseInt(popupData)) {
        popup.style.display = 'block';
    }

    // 2. 닫기 버튼 클릭 이벤트
    closeBtn.addEventListener('click', function() {
        if (todayCheck.checked) {
            // "오늘 하루 보지 않기" 체크 시 현재시간 + 24시간 저장
            const expiryDate = new Date().getTime() + (24 * 60 * 60 * 1000);
            localStorage.setItem('hideMainPopup12', expiryDate);
        }
        popup.style.display = 'none';
    });
});