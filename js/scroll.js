if (window.scrollY === 0) {
  setTimeout(function() {
    window.scrollTo({
      top: window.scrollY + 350, 
      behavior: 'smooth' // 平滑滚动
    });
  }, 750);
}