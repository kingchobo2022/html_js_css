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