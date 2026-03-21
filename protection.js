/* Protection JS for Space4Learn
   Created by: Ammar Barakat 
*/


document.addEventListener('contextmenu', function(e) {
    // السماح بالقائمة فقط داخل مربعات الكتابة إذا لزم الأمر
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    e.preventDefault();
    alert("عذراً، محتوى Space4Learn محمي بحقوق الطبع والنشر.");
});


document.addEventListener('keydown', function(e) {
    if (
        e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p') || 
        e.key === 'F12'
    ) {
        e.preventDefault();
        return false;
    }
});


document.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    if (selection.toString().length > 0) {
        event.clipboardData.setData('text/plain', 
            selection.toString() + "\n\nالمصدر: موقع Space4Learn - الأستاذ عمار بركات\nالرابط: https://space4learn.com");
        event.preventDefault();
    }
});