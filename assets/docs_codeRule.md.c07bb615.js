import{_ as s,o as a,c as n,N as l}from"./chunks/framework.79b88b02.js";const y=JSON.parse('{"title":"代码规范","description":"","frontmatter":{},"headers":[],"relativePath":"docs/codeRule.md","lastUpdated":1685501721000}'),e={name:"docs/codeRule.md"},p=l(`<h1 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h1><h2 id="命名规范" tabindex="-1">命名规范 <a class="header-anchor" href="#命名规范" aria-label="Permalink to &quot;命名规范&quot;">​</a></h2><h3 id="变量名不要自我良好的缩写" tabindex="-1">变量名不要自我良好的缩写 <a class="header-anchor" href="#变量名不要自我良好的缩写" aria-label="Permalink to &quot;变量名不要自我良好的缩写&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> // bad</span></span>
<span class="line"><span style="color:#A6ACCD;">let rContent = &#39;willen&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="常量要大写-要注释" tabindex="-1">常量要大写，要注释 <a class="header-anchor" href="#常量要大写-要注释" aria-label="Permalink to &quot;常量要大写，要注释&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> // bad</span></span>
<span class="line"><span style="color:#A6ACCD;">const MaxLength = 8; //用于限制密码输入框</span></span>
<span class="line"><span style="color:#A6ACCD;">const MAXLENGTH = 8; //用于限制密码输入框</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// good</span></span>
<span class="line"><span style="color:#A6ACCD;">const MAX_LENGTH = 8; //用于限制密码输入框</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="变量名要有意义-意义含糊的要进行注释" tabindex="-1">变量名要有意义，意义含糊的要进行注释 <a class="header-anchor" href="#变量名要有意义-意义含糊的要进行注释" aria-label="Permalink to &quot;变量名要有意义，意义含糊的要进行注释&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// good</span></span>
<span class="line"><span style="color:#A6ACCD;">let firstName = &#39;willen&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let idNumber = 331081199801020024;  // 身份证号</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="变量兜底" tabindex="-1">变量兜底 <a class="header-anchor" href="#变量兜底" aria-label="Permalink to &quot;变量兜底&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> // bad</span></span>
<span class="line"><span style="color:#A6ACCD;">const { data } = getApiRequest();</span></span>
<span class="line"><span style="color:#A6ACCD;">data.map((s) =&gt; s.id); //没有考虑data异常的情况，代码一跑就爆炸</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// good</span></span>
<span class="line"><span style="color:#A6ACCD;">const { data = [] } = getApiRequest();</span></span>
<span class="line"><span style="color:#A6ACCD;">data.map((s) =&gt; s?.id); //没有考虑data异常的情况，代码一跑就爆炸</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><h3 id="函数名要明确返回类型-函数意图" tabindex="-1">函数名要明确返回类型，函数意图 <a class="header-anchor" href="#函数名要明确返回类型-函数意图" aria-label="Permalink to &quot;函数名要明确返回类型，函数意图&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// bad</span></span>
<span class="line"><span style="color:#A6ACCD;">function showFriendsList() {....} // 无法辨别函数意图,返回的是一个数组，还是一个对象，还是true or false?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// good</span></span>
<span class="line"><span style="color:#A6ACCD;">function isEmpty() {...} // 是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">function canUpload() {...} // 是否能提交</span></span>
<span class="line"><span style="color:#A6ACCD;">function hasMemberCard() {...} // 是否有会员卡</span></span>
<span class="line"><span style="color:#A6ACCD;">function getUserInfo() {.... } // 动词开头</span></span>
<span class="line"><span style="color:#A6ACCD;">function onSubmit() {.... } // 绑定在Dom上的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">function apiGetUserList() {.... } // api开头表示接口函数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="辅助函数必须是纯函数" tabindex="-1">辅助函数必须是纯函数 <a class="header-anchor" href="#辅助函数必须是纯函数" aria-label="Permalink to &quot;辅助函数必须是纯函数&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> // bad</span></span>
<span class="line"><span style="color:#A6ACCD;">function plusAbc(a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var c = fetch(&#39;../api&#39;); // c为变化值</span></span>
<span class="line"><span style="color:#A6ACCD;">  return a+b+c;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// good</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = fetch(&#39;../api&#39;); // c为变化值</span></span>
<span class="line"><span style="color:#A6ACCD;">function plusAbc(a, b, c) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return a+b+c;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="优先使用函数式编程" tabindex="-1">优先使用函数式编程 <a class="header-anchor" href="#优先使用函数式编程" aria-label="Permalink to &quot;优先使用函数式编程&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// bad</span></span>
<span class="line"><span style="color:#A6ACCD;">for(i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a[i] = a[i] +1;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// good</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = a.map(item =&gt; ++item)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="避免大片的-if-else" tabindex="-1">避免大片的 if else <a class="header-anchor" href="#避免大片的-if-else" aria-label="Permalink to &quot;避免大片的 if else&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// bad</span></span>
<span class="line"><span style="color:#A6ACCD;">if (a === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	.....</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (a === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	....</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">	....</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// very very bad  if 里嵌套if</span></span>
<span class="line"><span style="color:#A6ACCD;">if (a &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	if (b &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	if (c &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		} </span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// good</span></span>
<span class="line"><span style="color:#A6ACCD;">switch(a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	case 0:</span></span>
<span class="line"><span style="color:#A6ACCD;">  	break</span></span>
<span class="line"><span style="color:#A6ACCD;">  case 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">  	break</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="避免嵌套三元运算符" tabindex="-1">避免嵌套三元运算符 <a class="header-anchor" href="#避免嵌套三元运算符" aria-label="Permalink to &quot;避免嵌套三元运算符&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const a = isRight ? true : hasCard ? true : canSubmit ? true : false // 三元运算符在第一级之后变得难以阅读</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="组件规范" tabindex="-1">组件规范 <a class="header-anchor" href="#组件规范" aria-label="Permalink to &quot;组件规范&quot;">​</a></h2><h3 id="组件复杂度" tabindex="-1">组件复杂度 <a class="header-anchor" href="#组件复杂度" aria-label="Permalink to &quot;组件复杂度&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">如果一个组件做的事情太多，应适当提取一些逻辑，将其拆分为更小的组件。</span></span>
<span class="line"><span style="color:#A6ACCD;">如果提取的组件很复杂，则需要依照一定的规则和条件一一提取它。</span></span>
<span class="line"><span style="color:#A6ACCD;">代码行数并不是一个客观的衡量标准，更多是需要考虑责任划分和抽象。</span></span>
<span class="line"><span style="color:#A6ACCD;">组件化不只是考虑复用性，也需要考虑解藕，一些复杂业务或者独立业务，需要单独拆分出来，例如： 支付，下单，登录等。</span></span>
<span class="line"><span style="color:#A6ACCD;">组件props参数尽可能少，尽量多一些无状态组件，如果参数很多，则需要考虑是否组件还能拆分。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="非必要不要在父组件执行子组件的方法" tabindex="-1">非必要不要在父组件执行子组件的方法 <a class="header-anchor" href="#非必要不要在父组件执行子组件的方法" aria-label="Permalink to &quot;非必要不要在父组件执行子组件的方法&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// bad</span></span>
<span class="line"><span style="color:#A6ACCD;">// parent</span></span>
<span class="line"><span style="color:#A6ACCD;">created () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$refs.childRef.handleInit()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// child</span></span>
<span class="line"><span style="color:#A6ACCD;">handleInit() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    apiList()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 假如我光看child组件，我就会认为handleInit没有调用，那我全局搜handleInit，方法名有很多了，我咋知道是这个child的handleInit，我要不要删除</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="非必要不要在父组件给子组件设值" tabindex="-1">非必要不要在父组件给子组件设值 <a class="header-anchor" href="#非必要不要在父组件给子组件设值" aria-label="Permalink to &quot;非必要不要在父组件给子组件设值&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// bad</span></span>
<span class="line"><span style="color:#A6ACCD;">this.$refs.childRef.data = { a: 1 } // 那我在其他页面上调用这个子组件，我怎么知道我要设这个值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="template-上不要用数字判断" tabindex="-1">template 上不要用数字判断 <a class="header-anchor" href="#template-上不要用数字判断" aria-label="Permalink to &quot;template 上不要用数字判断&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// bad</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template v-if=&quot;status === 0&quot;&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template v-if=&quot;status === 1&quot;&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// good</span></span>
<span class="line"><span style="color:#A6ACCD;">enum ActivityStatus {</span></span>
<span class="line"><span style="color:#A6ACCD;">  noStart = 0, // 未开始</span></span>
<span class="line"><span style="color:#A6ACCD;">  starting, // 进行中</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template v-if=&quot;status === ActivityStatus.noStart&quot;&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template v-if=&quot;status === ActivityStatus.starting&quot;&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,30),t=[p];function o(c,i,r,C,A,d){return a(),n("div",null,t)}const u=s(e,[["render",o]]);export{y as __pageData,u as default};
