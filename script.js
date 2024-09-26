
    window.onload = function() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.getElementById('mode-toggle').checked = isDarkMode;
        toggleDarkMode(isDarkMode);
    };
    document.getElementById('mode-toggle').addEventListener('change', function() {
        const isChecked = this.checked;
        localStorage.setItem('darkMode', isChecked);
        toggleDarkMode(isChecked);
    });

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
    document.querySelectorAll('h4').forEach(h4 => h4.classList.toggle('dark-mode', isDarkMode));
    document.getElementById('lf').classList.toggle('dark-mode', isDarkMode);
    document.querySelectorAll('.social-container .social i').forEach(icon => icon.classList.toggle('dark-mode', isDarkMode));
    document.querySelectorAll('.sidebar-item').forEach(icon => icon.classList.toggle('dark-mode', isDarkMode));
    document.querySelectorAll('.user-info a').forEach(icon => icon.classList.toggle('dark-mode', isDarkMode));
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.header').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.sidebar').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('#apartments-table').classList.toggle('dark-mode', isDarkMode);
    // Toggle dark mode for sorting elements
    document.querySelectorAll('.sorting_1').forEach(sort => sort.classList.toggle('dark-mode', isDarkMode));

    // Apply dark mode to DataTables buttons
    document.querySelectorAll('.dt-button').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
    document.querySelectorAll('.buttons-pdf').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
    document.querySelectorAll('.buttons-html5').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
    document.querySelectorAll('.btn-export').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));

// Toggle dark mode for DataTables buttons
document.querySelectorAll('.dt-button').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
document.querySelectorAll('.buttons-pdf').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
document.querySelectorAll('.buttons-html5').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
document.querySelectorAll('.btn-export').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
document.querySelectorAll('#ic').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));

  }
    
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
document.getElementById('select-all').addEventListener('change', function() {
  const checkboxes = document.querySelectorAll('.permission-checkbox');
  checkboxes.forEach(checkbox => checkbox.checked = this.checked);
});

document.querySelectorAll('.permission-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const selectAll = document.getElementById('select-all');
    const allChecked = Array.from(document.querySelectorAll('.permission-checkbox')).every(cb => cb.checked);
    selectAll.checked = allChecked;
  });
});
// فتح البوب أب
function openPaymentPopup() {
    document.getElementById('paymentPopup').style.display = 'flex';
}

// إغلاق البوب أب
function closePaymentPopup() {
    document.getElementById('paymentPopup').style.display = 'none';
}

// تصدير إيصال الدفع (مؤقت - يمكن تعديلها لاحقاً لتصدير فعلي)
function exportReceipt() {
    alert('تم تصدير إيصال الدفع!');
}

// التعامل مع نموذج الدفع
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // هنا يمكنك إضافة منطق الدفع
    alert('تم دفع الإيجار بنجاح!');
    closePaymentPopup();
});
