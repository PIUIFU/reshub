=== Smart SEO Tool - SEO优化插件 ===
Contributors: wbolt,mrkwong
Donate link: https://www.wbolt.com/
Tags: Baidu, SEO, Keyword, Description, Title, Alt, URL rewrite
Requires at least: 5.2
Tested up to: 5.4.2
Stable tag: 2.4.2
License: GNU General Public License v2.0 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Smart SEO Tool是一款专门针对WordPress开发的智能SEO优化插件，与众多WordPress的SEO插件不一样的是，Smart SEO Tool更加简单易用，帮助站长快速完成WordPress博客/网站的SEO基础优化。

== Description ==

Smart SEO Tool是一款专门针对WordPress开发的智能SEO优化插件，与众多WordPress的SEO插件不一样的是，Smart SEO Tool更加简单易用，帮助站长快速完成WordPress博客/网站的SEO基础优化。提供TITLES&METAS优化、图片Title&Alt优化、链接优化、robots.txt及Sitemap生成五大功能模块。

#功能模块一：TDK优化-页面Title/Description/Keywords优化设置

* 站点首页优化-通过配置WordPress博客/网站的首页标题、关键词和描述，实现首页优化。
* 分类列表页优化-支持站长选择WordPress博客/网站已设置的分类，对每一个分类单独设置标题、关键词和描述。
* 文章页面优化-默认分别读取文章标题、Tag和文章内容(前200个字符)为Title、Keyword和Description。
* 独立页面优化-默认分别读取Page页面标题和文章内容(前200个字符)为Title和Description。
* 搜索列表页优化-使用智能优化规则优化搜索结果页，优化规则详见插件说明文档。
* 标签页优化-使用智能优化规则优化标签结果页，优化规则详见插件说明文档。
* 作者页优化-使用智能优化规则优化标签作者页，优化规则详见插件说明文档。

#功能模块二：图片优化-图片Title/ALT属性优化设置

* 文章图片Title和ALT元描述优化-支持配置图片优化规则，按规则优化图片的标题和ALT元描述。

#功能模块三：链接优化-站内外链接改写优化设置

* 支持改写Tag标签URL地址，使WordPress标签的URL地址对搜索引擎更佳友好，提升页面收录；
* 支持改写WordPress分类URL地址，隐藏默认的category；
* 支持所有Page页面及Post文章内的站外链接增加nofollow，降低网站页面权重流失；
* 支持站外链接改写为https://www.yourdomain.com/go?=*格式；
* 支持站外链接优化例外域名列表，支持站长设置不执行外链改写及nofollow优化规则域名地址。

#功能模块四：robots.txt-搜索引擎爬虫权限设置
* 支持对robots.txt编辑管理，控制爬虫爬取页面权限

#功能模块五：Sitemap生成-用于生成符合搜索引擎标准的sitemap文件
* 支持站长通过设置参数及开关快速生成标准的sitemap地图；
* 支持推送sitemap更新通知到Google及Bing；
* 相对于其他sitemap插件，我们的插件sitemap配置更加容易理解及使用。
* 提供Nginx和Apache伪静态及URL重写规则参考，以帮助站解决插件无法生成sitemap问题。

== Installation ==

方式1：在线安装(推荐)
1. 进入WordPress仪表盘，点击“插件-安装插件”，关键词搜索“Smart SEO Tool”，找搜索结果中找到“Smart SEO Tool”插件，点击“现在安装”；
2. 安装完毕后，启用 `Smart SEO Tool` 插件.
3. 通过“设置”->“Smart SEO Tool” 进入插件设置界面进行相关设置.
4. 最后保存设置即可。

方式2：上传安装

FTP上传安装
1. 解压插件压缩包baidu-submit-link.zip，将解压获得文件夹上传至wordpress安装目录下的 `/wp-content/plugins/`目录.
2. 访问WordPress仪表盘，进入“插件”-“已安装插件”，在插件列表中找到“Smart SEO Tool”，点击“启用”.
3. 通过“设置”->“Smart SEO Tool” 进入插件设置界面进行相关设置.
4. 最后保存设置即可。

仪表盘上传安装
1. 进入WordPress仪表盘，点击“插件-安装插件”；
2. 点击界面左上方的“上传按钮”，选择本地提前下载好的插件压缩包baidu-submit-link.zip，点击“现在安装”；
3. 安装完毕后，启用 `Smart SEO Tool` 插件；
4. 通过“设置”->“Smart SEO Tool” 进入插件设置界面进行相关设置.
5. 最后保存设置即可。

关于本插件，你可以通过阅读<a href="https://www.wbolt.com/sst-plugin-documentation.html?utm_source=wp&utm_medium=link&utm_campaign=sst" rel="friend" title="插件教程">Smart SEO Tool插件教程</a>学习了解插件安装、设置等详细内容。

== Frequently Asked Questions ==

= 如何无法生成sitemap及生成sitemap报错? =
无法生成sitemap或者生成sitemap报错。这一般是由于没有设置伪静态及URL重写规则导致。请参考sitemap生成设置的伪静态及重写规则修改服务器配置文件后重启Nginx或者Apache服务器，并且确保WordPress固定链接不是使用默认朴素类型链接。

= 为什么会出现多个title、keywords或者description信息? =
如果出现这种情况，说明你的主题启用SEO配置，又或者你安装了其他的SEO插件。建议关闭主题SEO配置及禁用其他SEO插件。

= 为什么部分页面出现title、keywords或者description信息丢失？ =
这有可能是由于插件与您安装的主题不兼容导致。出现这种情况，建议你提交<a href="https://www.wbolt.com/member?act=enquire?utm_source=wp&utm_medium=link&utm_campaign=sst rel="friend" title="联系工单">联系工单</a>反馈相关信息，我们进一步兼容。

= 安装启用了Smart SEO Tool，是否还可以安装其他SEO插件? =
不可以。WordPress博客网站仅支持启用一款SEO插件，同时启用多个SEO插件会造成冲突。Smart SEO Tool非常简单易用，且符合百度搜索优化规则，推荐安装使用。

= 为什么Smart SEO Tool插件不支持文章页、独立页面、搜索列表、标签页和作者页优化配置? =
Smart SEO Tool已经通过依据搜索引擎标准内置智能优化规则对这些页面执行了优化，我们希望WordPress站长可以通过最少的设置快速实现SEO优化。

= 插件生成的sitemap与其他的sitemap插件生成的有何区别？ =
Smart SEO Tool插件生成的Sitemap更加精简，对同类别的页面不会过于分散。

= 插件改写WordPress默认生成的标签URL地址有何意义？ =
WordPress默认生成的中文标签对应的URL地址对搜索引擎不太友好，通过改写后避免了这种情况的出现。如果你的WordPress纯粹为英文内容，则不建议开启该功能。

== Notes ==

<a href="https://www.wbolt.com/?utm_source=wp&utm_medium=link&utm_campaign=sst" rel="friend" title="SEO优化插件">Smart SEO Tool插件</a>是目前WordPress插件市场中最简单易用的SEO优化插件，但功能又非常强大的SEO插件. 

闪电博（<a href="https://www.wbolt.com/?utm_source=wp&utm_medium=link&utm_campaign=sst" rel="friend" title="闪电博官网">wbolt.com</a>）专注于WordPress主题和插件开发,为中文博客提供更多优质和符合国内需求的主题和插件。此外我们也会分享WordPress相关技巧和教程。

除了Smart SEO Tool插件外，目前我们还开发了以下WordPress插件：

- [Smart SEO Tool-历史下载安装数30,000+](https://wordpress.org/plugins/baidu-submit-link/)
- [热门关键词推荐插件-最佳关键词布局插件](https://wordpress.org/plugins/smart-keywords-tool/)
- [WP资源下载管理-快速打造资源下载博客网站](https://wordpress.org/plugins/download-info-page/)
- [IMGspider-轻量外链图片采集插件](https://wordpress.org/plugins/imgspider/)
- [博客社交分享组件-打赏/点赞/微海报/社交分享四合一](https://wordpress.org/plugins/donate-with-qrcode/)
- [清理HTML代码标签-一键清洗转载文章多余代码](https://wordpress.org/plugins/clear-html-tags/)
- 更多主题和插件，请访问<a href="https://www.wbolt.com/?utm_source=wp&utm_medium=link&utm_campaign=sst" rel="friend" title="闪电博官网">wbolt.com</a>!

如果你在WordPress主题和插件上有更多的需求，也希望您可以向我们提出意见建议，我们将会记录下来并根据实际情况，推出更多符合大家需求的主题和插件。

致谢！

闪电博团队

== Screenshots ==

1. TDK优化设置界面截图.
2. 图片Title&Alt优化设置界面截图.
3. 链接优化设置界面截图.
4. robots.txt设置界面截图.
5. Sitemap生成设置界面界面.

== Changelog ==

= 2.4.2 =
* 新增子sitemap列表，以便站长快速复制粘贴至百度搜索资源平台提交；
* 修复日主题文章&页面title无站点名称bug；
* 优化插件设置移动端交互界面。

= 2.4.1 =
* 修复主页TDK优化重复读取设置副标题bug；
* 修复sitemap地图生成tag链接优先级数据读取bug；
* 优化单个sitemap文件URL地址数量限制，支持tag和post均不超过1w个地址，实现自动分拆。

= 2.4.0 =
* 新增sitemap生成失败说明，提供Nginx和Apache伪静态及URL重写规则；
* 新增站外链接优化例外域名列表功能；
* 优化sitemap网站地图xml文件样式；
* 优化单个sitemap文件的URL地址数量，最多不超过1w个地址；
* 优化图片优化规则，解决图片名称及ALT重复问题；
* 优化插件设置界面样式。

= 2.3.2 =
* 增加国内热门主题兼容，修正title/keywords/description重复问题.

= 2.3.1 =
* 修复SEO功能关闭失效问题

= 2.3.0 =
* 优化插件设置界面交互
* 增加插件冲突提醒关闭记录
* 新增sitemap地址生成展示
* 新增头条搜索sitemap提交教程入口
* 优化tag标签链接重写规则

= 2.2.1 =
* 修正部分主题文章详情页会出现"阅读更多"字样的bug

= 2.2.0 =
* 修正部分主题设置SEO优化规则不生效的Bug
* 优化已知Bug

= 2.0.0 =
* 新增Sitemap生成功能
* 新增robots.txt管理功能
* 新增站内链接优化功能
* 新增插件模块开关功能
* 优化插件配置界面
* 修正插件已知bug

= 1.1.0 =
* 新增搜索列表页优化功能
* 新增Tag列表页优化功能
* 新增作者页优化功能
* 新增图片SEO优化功能
* 增加插件教程/插件支持等链接入口
* 优化插件设置UI界面

= 1.0.0 =
* 新增SEO功能开关功能
* 新增WordPress首页SEO设置功能
* 新增WordPress文章页和Page页面自动优化规则
* 新增WordPress分类页面SEO设置功能

