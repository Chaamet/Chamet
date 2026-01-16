// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Constants
const DOWNLOAD_URL = 'https://h5.schamet.com/webH5/agent/bind.html?companyId=147267';
const WHATSAPP_NUMBER = '918800356868';
const TELEGRAM_NUMBER = '+918800356868';

// Open download page
function openDownload() {
    window.open(DOWNLOAD_URL, '_blank');
}

// Open WhatsApp
function openWhatsApp() {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
}

// Open Telegram
function openTelegram() {
    window.open(`https://t.me/${TELEGRAM_NUMBER}`, '_blank');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});