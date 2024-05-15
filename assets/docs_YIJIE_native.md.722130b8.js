import{_ as n,o as s,c as a,N as p}from"./chunks/framework.27c7f8b4.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/YIJIE_native.md","lastUpdated":1692697250000}'),t={name:"docs/YIJIE_native.md"},o=p(`<h2 id="获取当前app版本的所有客户端协议" tabindex="-1">获取当前app版本的所有客户端协议 <a class="header-anchor" href="#获取当前app版本的所有客户端协议" aria-label="Permalink to &quot;获取当前app版本的所有客户端协议&quot;">​</a></h2><p>方法名：<code>getNativeConfig(pkg, devOS, appVersion)</code><br> 场景：获取当前app版本的所有客户端协议 参数解释：<br> pkg: <code>app项目标识</code><br> devOS?: <code>ios | and</code><br> appVersion?: <code>app客户端版本号</code><br></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NativeNameType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./type&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">COMMON</span><span class="token punctuation">,</span> <span class="token constant">AND</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config&#39;</span>

<span class="token comment">/**
 * 获取当前app版本的所有客户端协议
 * @param pkg 当前app客户端标识
 * @param devOS &#39;ios&#39; | &#39;and&#39;
 * @param version app客户端版本号
 * @returns 符合条件的协议集合
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">getNativeConfig</span><span class="token punctuation">(</span>pkg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> devOS<span class="token operator">:</span> <span class="token string">&#39;ios&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;and&#39;</span><span class="token punctuation">,</span> version<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token constant">COMMON</span> <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>devOS <span class="token operator">===</span> <span class="token string">&#39;and&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>common<span class="token punctuation">,</span> <span class="token constant">AND</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>common<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> obj <span class="token operator">=</span> common<span class="token punctuation">[</span>key <span class="token keyword">as</span> NativeNameType<span class="token punctuation">]</span>
      <span class="token keyword">let</span> match <span class="token operator">=</span> <span class="token operator">!</span>obj<span class="token punctuation">.</span>versions
      <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>versions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isMatch <span class="token operator">=</span> obj<span class="token punctuation">.</span>versions<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> match <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+)_(and|ios)?_?(\\d+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>match<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的配置versions的格式有问题</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> pkg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">!==</span> devOS<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">+</span>version <span class="token operator">&lt;</span> <span class="token operator">+</span>match<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        match <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>isMatch
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span></code></pre><p>YIJIE/native/getNativeConfig</p></div><h2 id="调用协议通知客户端" tabindex="-1">调用协议通知客户端 <a class="header-anchor" href="#调用协议通知客户端" aria-label="Permalink to &quot;调用协议通知客户端&quot;">​</a></h2><p>方法名：<code>notifyNative(config, resolve, reject, urlParams, isInApp)</code><br> 场景：调用协议通知客户端 参数解释：<br> config: <code>当前app版本所支持的协议</code><br> resolve: <code>Promise回调</code><br> reject: <code>Promise回调</code><br> urlParams?: <code>传给app的url后面的参数：对象</code><br> isInApp?: <code>本地是否开启客户端环境</code><br></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Base64 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;js-base64&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./type&#39;</span>

<span class="token comment">/**
 * 调用协议通知客户端
 * @param config 当前app版本所支持的协议
 * @param resolve Promise回调
 * @param reject Promise回调
 * @param urlParams 传给app的url后面的参数：对象
 * @param inApp 本地是否开启客户端环境
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">notifyNative</span><span class="token punctuation">(</span>
  config<span class="token operator">:</span> ConfigType<span class="token punctuation">,</span>
  <span class="token function-variable function">resolve</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  <span class="token function-variable function">reject</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  urlParams<span class="token operator">?</span><span class="token operator">:</span> object<span class="token punctuation">,</span>
  isInApp <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/lz-web/opennative?name=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>paramsDemo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> demo <span class="token operator">=</span> config<span class="token punctuation">.</span>paramsDemo
      <span class="token keyword">const</span> pureKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>demo<span class="token punctuation">[</span>key <span class="token keyword">as</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> demo<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pureKeys<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>urlParams<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
          <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;urlParams参数未传，urlParams对象格式如下：&#39;</span><span class="token punctuation">,</span> data<span class="token operator">:</span> demo <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> emptyKey <span class="token operator">=</span> pureKeys<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> urlParams<span class="token operator">?.</span><span class="token punctuation">[</span>key <span class="token keyword">as</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> demo<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>emptyKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
          <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">urlParams对象缺少key </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>emptyKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, urlParams格式如下：</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> demo
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;params=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Base64<span class="token punctuation">.</span><span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>urlParams<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">[</span>config<span class="token punctuation">.</span>callback<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>Base64<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_DEV</span> <span class="token operator">&amp;&amp;</span> isInApp<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_DEV</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> url
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> err <span class="token operator">=</span> e <span class="token keyword">as</span> Error
    <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
    error<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>YIJIE/native/notifyNative</p></div><h2 id="协议配置表" tabindex="-1">协议配置表 <a class="header-anchor" href="#协议配置表" aria-label="Permalink to &quot;协议配置表&quot;">​</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NativeNameType<span class="token punctuation">,</span> AndNativeNameType<span class="token punctuation">,</span> ConfigType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./type&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">COMMON</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>NativeNameType<span class="token punctuation">,</span> ConfigType<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    跳首页<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;RETURN_HOMEPAGE&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    跳登录页<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;APP_LOGIN&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    打开webview<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;APP_NEW_OPEN_URL&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_225&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_123&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      paramsDemo<span class="token operator">:</span> <span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 需要跳转的url</span>
        type<span class="token operator">:</span> <span class="token string">&#39;loan_market&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 贷超进入，需要返回弹出推荐框</span>
        title<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 界面标题</span>
        productId<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 产品id</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    打开原生<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;OPEAN_NATIVE&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_224&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_122&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      paramsDemo<span class="token operator">:</span> <span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&#39;liveness?name=aaaa&amp;idNumber=bbbbbb&#39;</span> <span class="token comment">// liveness人脸</span>
        <span class="token comment">// &#39;url&#39;: &#39;ocr?type=redpacket&#39;, // ocr实名，type：redpacket红包兑换</span>
        <span class="token comment">// &#39;url&#39;: &#39;choosebankcard&#39; // choosebankcard选择银行卡</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    退出登录<span class="token operator">:</span> <span class="token punctuation">{</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_224&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_122&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;APP_LOGOUT&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    关闭webview<span class="token operator">:</span> <span class="token punctuation">{</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_224&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_122&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;CLOSE_WEBVIEW&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    返回拦截<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;INTERCEPT_BACK&#39;</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeGoBack&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_224&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_122&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      paramsDemo<span class="token operator">:</span> <span class="token punctuation">{</span>
        url<span class="token operator">:</span> location<span class="token punctuation">.</span>href<span class="token punctuation">,</span>
        isRecord<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 0否 ；1是需要埋点记录；2埋点并且返回，（iOS：226；Android：130）(字段要传)</span>
        recordPara<span class="token operator">:</span> <span class="token punctuation">{</span> pageName<span class="token operator">:</span> <span class="token string">&#39;H5-xx&#39;</span><span class="token punctuation">,</span> pageId<span class="token operator">:</span> <span class="token string">&#39;xx&#39;</span> <span class="token punctuation">}</span> <span class="token comment">// （iOS：226；Android：130）</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    获取环境变量<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;ENVIRONMENT_PARAMS&#39;</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeGetEnvironmentParam&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        phone<span class="token operator">:</span> <span class="token string">&#39;13200001111&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 注册手机号</span>
        appVersion<span class="token operator">:</span> <span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token comment">// app版本</span>
        devOS<span class="token operator">:</span> <span class="token string">&#39;iOS&#39;</span> <span class="token comment">// 设备类型</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    获取紧急联系人<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;EMERGENCY_CONTACT&#39;</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeGetEmergencyContact&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        isPower<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 0没授权，1已授权</span>
        EmergencyContact<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 紧急联系人数据</span>
          name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
          phone<span class="token operator">:</span> <span class="token string">&#39;13200001111&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        addressList<span class="token operator">:</span> <span class="token string">&#39;张三:13200001111,李四:13311110000&#39;</span> <span class="token comment">// 通讯录数据</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    打开分享弹窗<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;APP_SHARE&#39;</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeGetShareData&#39;</span><span class="token punctuation">,</span>
      paramsDemo<span class="token operator">:</span> <span class="token punctuation">{</span>
        shareUrl<span class="token operator">:</span> <span class="token string">&#39;分享链接&#39;</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&#39;标题&#39;</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">&#39;内容&#39;</span><span class="token punctuation">,</span>
        iconUrl<span class="token operator">:</span> <span class="token string">&#39;logo地址&#39;</span><span class="token punctuation">,</span>
        appLogin<span class="token operator">:</span> <span class="token string">&#39;1 需要登录 0 不需要登录&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span> <span class="token comment">// 是否分享成功：1成功，0失败</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    获取地理位置<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;GPS_POSITION&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_223&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_119&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeGpsPosition&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        isPower<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 是否授权：1授权，0为授权</span>
        isSet<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 0取消，1去设置</span>
        <span class="token comment">// &#39;isSet&#39;: &#39;0&#39;, // 0取消，1去设置</span>
        gpsMap<span class="token operator">:</span> <span class="token punctuation">{</span>
          addressComponent<span class="token operator">:</span> <span class="token punctuation">{</span>
            province<span class="token operator">:</span> <span class="token string">&#39;浙江省&#39;</span><span class="token punctuation">,</span>
            city<span class="token operator">:</span> <span class="token string">&#39;杭州市&#39;</span><span class="token punctuation">,</span>
            district<span class="token operator">:</span> <span class="token string">&#39;萧山区&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          formattedAddress<span class="token operator">:</span> <span class="token string">&#39;浙江省杭州市萧山区宁围街道金二路&#39;</span><span class="token punctuation">,</span>
          position<span class="token operator">:</span> <span class="token punctuation">{</span>
            lng<span class="token operator">:</span> <span class="token number">120.255849</span><span class="token punctuation">,</span> <span class="token comment">// 经度</span>
            lat<span class="token operator">:</span> <span class="token number">30.198129</span> <span class="token comment">// 纬度</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    地理位置授权<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;GPS_POSITION_STATE&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_223&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_119&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeGpsPositionState&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        isPower<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 是否授权：1授权，0为授权</span>
        gpsMap<span class="token operator">:</span> <span class="token punctuation">{</span>
          addressComponent<span class="token operator">:</span> <span class="token punctuation">{</span>
            province<span class="token operator">:</span> <span class="token string">&#39;浙江省&#39;</span><span class="token punctuation">,</span>
            city<span class="token operator">:</span> <span class="token string">&#39;杭州市&#39;</span><span class="token punctuation">,</span>
            district<span class="token operator">:</span> <span class="token string">&#39;萧山区&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          formattedAddress<span class="token operator">:</span> <span class="token string">&#39;浙江省杭州市萧山区宁围街道金二路&#39;</span><span class="token punctuation">,</span>
          position<span class="token operator">:</span> <span class="token punctuation">{</span>
            lng<span class="token operator">:</span> <span class="token number">120.255849</span><span class="token punctuation">,</span> <span class="token comment">// 经度</span>
            lat<span class="token operator">:</span> <span class="token number">30.198129</span> <span class="token comment">// 纬度</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    保存图片<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;SAVE_IMG&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_224&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_122&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      paramsDemo<span class="token operator">:</span> <span class="token punctuation">{</span>
        imgUrl<span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 图片文件地址</span>
        openUrl<span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com/，/home，weixin://，linziapp://easyloan&#39;</span> <span class="token comment">// 是否打开url：https相关url，app内部路 由，外部三方路由</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    签到提醒<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;SIGNIN_REMIND&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_224&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_122&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeSigninRemind&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        isPower<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 是否授权：1授权，0为授权</span>
        type<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span> <span class="token comment">// 1签到提醒，2开启通知权限</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    获取剪切板内容<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;GET_CLIPBOARD_INFO&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_226&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_130&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeClipboard&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span> <span class="token comment">// value为String类型，多条信息使用“,”分割</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    打开二维码<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;OPEN_SCAN_CODE&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_ios_227&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sd_and_131&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjb_0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativScanCodeResults&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">AND</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>AndNativeNameType<span class="token punctuation">,</span> ConfigType<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    获取通话记录<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;CALL_RECORD&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_and_119&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeCallRecord&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        callRecordList<span class="token operator">:</span> <span class="token string">&#39;张三:13200001111,李四:13311110000&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    获取appList<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;APP_LIST&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_and_119&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeAppList&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        appList<span class="token operator">:</span> <span class="token string">&#39;淘宝,钉钉&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    上传appList<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;LOCAL_DEAL_APP_LIST&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_and_123&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    获取电话识别码<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;DEVICE_ID&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_and_119&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeDeviceId&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        isPower<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 是否授权：1授权，0为授权</span>
        deviceId<span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    获取环境参数<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;GET_ENV_PARAMS&#39;</span><span class="token punctuation">,</span>
      versions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sd_and_132&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yjh_and_0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      callback<span class="token operator">:</span> <span class="token string">&#39;nativeEnvParams&#39;</span><span class="token punctuation">,</span>
      demo<span class="token operator">:</span> <span class="token punctuation">{</span>
        envParams<span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span></code></pre><p>YIJIE/native/config</p></div>`,8),e=[o];function c(l,k,u,i,r,d){return s(),a("div",null,e)}const _=n(t,[["render",c]]);export{g as __pageData,_ as default};
