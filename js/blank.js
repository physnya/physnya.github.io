// 当DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
  // 获取所有的<a>标签
  var links = document.getElementsByTagName('a');

  // 遍历所有的<a>标签
  for (var i = 0; i < links.length; i++) {
    // 检查href属性是否为特定的值
    if (links[i].href === 'https://www.travellings.cn/go.html') {
      // 设置target属性为'_blank'
      links[i].target = '_blank';
    }
  }
});