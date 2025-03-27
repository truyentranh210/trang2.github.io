document.addEventListener('DOMContentLoaded', function () {
    var notification = document.getElementById('notification');
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('close');
    var closeIcon = document.getElementById('close-btn');
    var hide2hBtn = document.getElementById('hide-2h');

    // Kiểm tra xem thông báo có bị ẩn không
    if (!localStorage.getItem('hideNotification')) {
        showNotification();
    }

    function showNotification() {
        notification.style.display = 'block';
        overlay.style.display = 'block';
    }

    function closeNotification() {
        notification.style.display = 'none';
        overlay.style.display = 'none';
    }

    function hideFor2Hours() {
        localStorage.setItem('hideNotification', 'true');
        localStorage.setItem('hideTime', Date.now());
        closeNotification();
    }

    closeBtn.addEventListener('click', closeNotification);
    closeIcon.addEventListener('click', closeNotification);
    hide2hBtn.addEventListener('click', hideFor2Hours);

    // Kiểm tra sau 2 giờ có hiển thị lại không
    var hideTime = localStorage.getItem('hideTime');
    if (hideTime) {
        var currentTime = Date.now();
        var timeDiff = currentTime - parseInt(hideTime);
        if (timeDiff >= 2 * 60 * 60 * 1000) {  // 2 giờ
            localStorage.removeItem('hideNotification');
            localStorage.removeItem('hideTime');
        }
    }
});
