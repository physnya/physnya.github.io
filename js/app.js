import { createApp } from 'vue';
import { Quasar } from 'quasar';
import Timeline from './timeline.vue';

import 'quasar/dist/quasar.css';
import { description, title } from 'hexo/dist/hexo/default_config';

// 引入自定义字体
const customFont = document.createElement('link');
customFont.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap';
customFont.rel = 'stylesheet';
document.head.appendChild(customFont);

const app = createApp({
  components: { Timeline },
  data() {
    return {
      timelineEvents: [
        { title: '建立', date: '2024-03-22', description: 'blog 正式建立，Hexo 生成第一篇文章 -- [Hello World](https://physnya.top/2024/03/22/hello-world/)（这篇文章现在已经隐藏，实际上有时我用它来测试一些功能）' },
        { title: '友链', date: '2024-05-19', description: '加入友链 [Yuics Blog](https://arckive.cn/).' },
        { title: '功能', date: '2024-05-21', description: '加入 Waline 评论功能.' },
        { title: '功能 & 友链', date: '2024-05-23', description: '加入友链 [自习室](https://bgm.tv/group/zixi)（我在 Bangumi 建立的小组）.<br>置顶 [资源收集（持续更新）](https://physnya.top/2024/05/08/resources/).<br>隐藏 [⌈ 归档 ⌋](https://physnya.top/archives) 页面.<br>创建 [⌈ 时间线 ⌋](https://physnya.top/timeline) 页面.' },
        { title: '事件 & 功能', date: '2024-06-10', description: '高考结束.<br>评论改为使用 Twikoo 配置.' },
        { title: '功能', date: '2024-06-22', description: '评论数据库从 Vercel 迁移至 Netfily.' },
        { title: '功能', date: '2024-06-24', description: '修复 KaTeX 渲染 LaTeX 出现的一些问题，之后的文章最好直接写 markdown 文件，将大幅降低文章的内存.' },
        { title: '功能', date: '2024-06-25', description: 'Twikoo 评论系统支持 LaTeX 输入.' },
        { title: '功能', date: '2024-07-09', description: '第一篇加密文章 [在科技楼的角落](https://physnya.top/2024/07/11/%E5%9C%A8%E7%A7%91%E6%8A%80%E6%A5%BC%E7%9A%84%E8%A7%92%E8%90%BD%E2%80%94%E2%80%94%E8%AE%B0%E4%B8%80%E4%BA%9B%E7%AB%9E%E8%B5%9B%E5%9B%9E%E5%BF%86/)' },
        { title: '事件', date: '2024-07-14', description: '接到录取通知.' },
        { title: '功能', date: '2024-07-22', description: '<s>下载 [HCLonely](https://blog.hclonely.com/) 制作的 [Hexo 插件](https://github.com/HCLonely/hexo-bilibili-bangumi)，制作了一个 [⌈ 动画 ⌋](https://physnya.top/bangumi/) 页面</s>，此页面已失效.' },
        { title: '事件', date: '2024-07-23', description: '收到录取通知书.' },
        { title: '功能', date: '2024-07-27', description: '创建导航栏二级标题 ⌈ 站点归档 ⌋，将三个页面包含在其中.' },
        { title: '功能', date: '2024-08-01', description: '使用 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 压缩网站程序文件，稍微提高页面加载速度.' },
        { title: '功能', date: '2024-08-02', description: '更换新的 [插件](https://github.com/ChiyukiRuon/hexo-bangumi-gallery)，重新设立 [⌈ 动画 ⌋](https://physnya.top/bangumi.html) 页面. 鸣谢插件的制作者 [千雪琉音](https://github.com/ChiyukiRuon).<br>页面顶部加入 [⌈ 开往 ⌋](https://www.travellings.cn/) 的链接，等待审核通过.' },
        { title: '事件', date: '2024-08-03', description: '通过 [⌈ 开往 ⌋](https://www.travellings.cn/) 申请，正式成为第 1277 名 ⌈ 开往 ⌋ 成员.' },
        { title: '友链', date: '2024-08-07', description: '加入友链 [Pinpe 的云端](https://blog.pinpe.top/) 和 [朽丘博](https://koxiuqiu.cn/). 感谢朽丘博为我破例(\^///\^).' },
        { title: '功能', date: '2024-08-08', description: '添加 RSS 订阅链接，放在 [⌈ 关于 ⌋](https://physnya.top/about/) 页面.' },
        { title: '功能', date: '2024-08-09', description: '<s>使用 noindex 避免被搜索引擎收录. 但是完全不被收录要等到下一次 bot 来这里巡逻，可能要一个多月.</s><br>我又把 noindex 标签取消了，因为觉得没有必要，毕竟本站是为了提供一个交流的平台.' },
        { title: '事件', date: '2024-08-14', description: '开学.<br>在雨云购买了自己的域名，blog 域名更换为 [physnya.top](https://physnya.top).' },
        { title: '友链', date: '2024-08-22', description: '加入友链 [Imken 的发电厂](https://blog.imken.moe/).' },
        { title: '功能', date: '2024-08-25', description: '创建 [⌈ 动态 ⌋](https://physnya.top/artitalk) 页面，创建导航栏一级标题 ⌈ 我 ⌋，并将两个页面包含在其中.' },
        { title: '友链', date: '2024-08-27', description: '加入友链 [Yurchiu\'s Blog](https://yurchiu.github.io/).' },
        { title: '友链', date: '2024-08-28', description: '加入友链 [二次元论坛](https://www.ecylt.top/).' },
        { title: '功能', date: '2024-09-01', description: '大改 [⌈ 时间线 ⌋](https://physnya.top/timeline/) 页面.' },
        { title: '功能', date: '2024-09-03', description: '注册了一个 mail.ru 免费邮箱账号，修改了 [⌈ 关于 ⌋](https://physnya.top/about/) 页面的邮箱链接.<br>将 [⌈ 动画 ⌋](https://physnya.top/bangumi.html) 页面移至导航栏一级标题 ⌈ 我 ⌋ 之下.' },
        { title: '友链', date: '2024-09-08', description: '<s>加入友链 [ScaredCube\'s Site](https://sccube.link).</s><br>加入友链 [Foolish Fox](https://foolishfox.cn)' },
        { title: '友链', date: '2024-09-11', description: '<s>删除友链 [ScaredCube\'s Site](https://sccube.link).</s>' },
        { title: '友链', date: '2024-09-13', description: '加入友链 [北河天文台](https://pediastrum.com/).' },
        { title: '友链', date: '2024-09-15', description: '加入友链 [Chlorine](https://www.yoghurtlee.com/).' },
        { title: '友链', date: '2024-09-17', description: '加入友链 [ScaredCube\'s Site](https://sccube.link).' },
        { title: '友链', date: '2024-09-20', description: '加入友链 [eRrion的小屋](https://mr-errion.github.io/). 注意，这是单项友链.'},
        { title: '功能', date: '2024-10-01', description: '创建 [⌈ 待办 ⌋](https://physnya.top/todo/) 页面，修改导航栏一级标题 ⌈ 我 ⌋ 为 ⌈ (╹ڡ╹ ) ⌋，将 [⌈ 待办 ⌋](https://physnya.top/todo/) 页面放入 ⌈ (╹ڡ╹ ) ⌋ 之下.' },
        { title: '事件', date: '2024-10-07', description: '正式加入[十年之约](https://foreverblog.cn/).<br>成为 [⌈ 开往 ⌋](https://www.travellings.cn/) 巡察组成员.' },
        { title: '事件', date: '2024-10-08', description: '18 岁生日.' },
        { title: '功能', date: '2024-10-09', description: '重启 [⌈ 归档 ⌋](https://physnya.top/archives) 页面.' },
        { title: '功能', date: '2024-10-15', description: '使用 GitHub Actions 实现博客自动部署.'},
        { title: '友链', date: '2024-10-16', description: '加入友链 [Whitney](https://phymani.me/).' },
        { title: '友链', date: '2024-10-20', description: '修改友链规则，自下一日起开始生效.<br>加入友链 [摩卡小站](https://blog.mokemore.top/).' },
        { title: '友链', date: '2024-10-29', description: '加入友链 [Eamon](https://fanyiming.life/). 是我方主动申请添加，按照对方规则加入.' },
        { title: '功能', date: '2024-11-26', description: '将网站从 GitHub Pages 移动到 CloudFlare Pages 上，并使用 CloudFlare CDN.' },
        { title: '功能', date: '2024-11-27', description: '再次大幅修改 [⌈ 时间线 ⌋](https://physnya.top/timeline/) 页面，去除文章发布时间的记录，只保留个人和网站的部分事件记录.' },
        { title: '功能', date: '2024-12-21', description: '迁移回 GitHub Pages，原因是 CloudFlare Pages 对项目大小的限制.' },
        { title: '功能', date: '2024-12-23', description: '再次大幅修改 [⌈ 时间线 ⌋](https://physnya.top/timeline/) 页面，使用 vue 组件重写.' },
        { title: '友链', date: '2025-01-10', description: '加入友链 [港湾](https://haru-lcy.github.io/). 是我方主动申请添加，按照对方规则加入.' },
        { title: '功能', date: '2025-01-18', description: '删除 [⌈ 待办 ⌋](https://physnya.top/todo) 页面，因为自己并不能很好地用这种方式完成目标.' },
        { title: '功能', date: '2025-01-23', description: '重写 [⌈ 关于 ⌋](https://physnya.top/about/) 页面.' },
      ]
    };
  },
  template: '<Timeline :events="timelineEvents" />'
});

app.use(Quasar);
app.mount('#app');