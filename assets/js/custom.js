// 移动端菜单切换功能
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('toggle-menu');
    const menu = document.querySelector('.menu-wrapper');

    // 触摸事件处理
    menuButton.addEventListener('touchstart', function(e) {
        e.preventDefault();
        menu.classList.toggle('active');
        this.classList.toggle('is-active');
    });

    // 兼容点击事件
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
        this.classList.toggle('is-active');
    });
});