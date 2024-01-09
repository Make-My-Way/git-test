// スムーズスクロール
const headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        const target = document.getElementById(href.replace('#', ''));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ページ外スクロール
window.addEventListener('load', function () {
    const url = new URL(location.href);
    const hash = url.hash.slice(1);
    const target = document.getElementById(hash);
    if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        setTimeout(function () {
            window.scrollTo({ top: 0 }, 0);
        });
        setTimeout(function () {
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        });
    }
});
