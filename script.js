
    window.onload = function() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.getElementById('mode-toggle').checked = isDarkMode;
        toggleDarkMode(isDarkMode);
    };

    // تغيير الوضع وتخزين الحالة
    document.getElementById('mode-toggle').addEventListener('change', function() {
        const isDarkMode = this.checked;
        localStorage.setItem('darkMode', isDarkMode);  // تخزين الحالة
        toggleDarkMode(isDarkMode);
    });

    // تفعيل/تعطيل الوضع الداكن بناءً على القيمة
    function toggleDarkMode(isDarkMode) {
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.querySelector('.header').classList.toggle('dark-mode', isDarkMode);
        document.querySelector('.sidebar').classList.toggle('dark-mode', isDarkMode);
        document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.breadcrumb').forEach(breadcrumb => breadcrumb.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.dropdown-content').forEach(dropdown => dropdown.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.details-btn').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.dropbtn').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.dashboard-text').forEach(text => text.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.dashboard > h2').forEach(h2 => h2.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.dashboard').forEach(dashboard => dashboard.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.breadcrumb-container').forEach(container => container.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.breadcrumb-item').forEach(item => item.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.breadcrumb-path').forEach(path => path.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.breadcrumb-path a').forEach(link => link.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.fa-solid').forEach(icon => icon.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.fas').forEach(icon => icon.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.sidebar-item').forEach(icon => icon.classList.toggle('dark-mode', isDarkMode));
        document.getElementById('lf').classList.toggle('dark-mode', isDarkMode);
};
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
