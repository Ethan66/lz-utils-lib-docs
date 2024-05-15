import{_ as n,o as s,c as a,N as t}from"./chunks/framework.79b88b02.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/reg.md","lastUpdated":1683254164000}'),p={name:"docs/reg.md"},e=t(`<h2 id="是否为外部-url" tabindex="-1">是否为外部 URL <a class="header-anchor" href="#是否为外部-url" aria-label="Permalink to &quot;是否为外部 URL&quot;">​</a></h2><p>方法名：<code>isExternal</code></p><div class="language-ts"><pre><code><span class="token comment">/**
 * @title 验证是否为外部URL
 * @param {string} path
 * @return {boolean}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isExternal <span class="token operator">=</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(https?:|http?:|mailto:|tel:)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>reg/isExternal</p></div><h2 id="手机号正则" tabindex="-1">手机号正则 <a class="header-anchor" href="#手机号正则" aria-label="Permalink to &quot;手机号正则&quot;">​</a></h2><p>方法名：<code>isMobile</code></p><div class="language-ts"><pre><code><span class="token comment">/**
 * @title 验证手机号是否合法
 * @param { string | number} num 手机号
 * @return {boolean}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isMobile <span class="token operator">=</span> <span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[3-9]\\d{9}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>reg/isMobile</p></div><h2 id="邮箱正则" tabindex="-1">邮箱正则 <a class="header-anchor" href="#邮箱正则" aria-label="Permalink to &quot;邮箱正则&quot;">​</a></h2><p>方法名：<code>isEmail</code></p><div class="language-ts"><pre><code><span class="token comment">/**
 * @title 验证邮箱是否合法
 * @param {string} email 邮箱
 * @return {boolean}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isEmail <span class="token operator">=</span> <span class="token punctuation">(</span>email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\\.[a-zA-Z0-9_-])+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>reg/isEmail</p></div><h2 id="检查是否为微信浏览器" tabindex="-1">检查是否为微信浏览器 <a class="header-anchor" href="#检查是否为微信浏览器" aria-label="Permalink to &quot;检查是否为微信浏览器&quot;">​</a></h2><p>方法名：<code>isWxBrowser</code></p><div class="language-ts"><pre><code><span class="token comment">/**
 * @title 验证当前浏览器是否为微信浏览器
 * @return { boolean }
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isWxBrowser <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;micromessenger&quot;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>reg/isWxBrowser</p></div><h2 id="检查是否为合法密码" tabindex="-1">检查是否为合法密码 <a class="header-anchor" href="#检查是否为合法密码" aria-label="Permalink to &quot;检查是否为合法密码&quot;">​</a></h2><p>方法名：<code>isValidPassword</code></p><div class="language-ts"><pre><code><span class="token comment">/**
 * @title 验证密码是否合法(8~16数字、字母、字符)
 * @param password 密码
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isValidPassword <span class="token operator">=</span> <span class="token punctuation">(</span>password<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> pattern<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>reg/isValidPassword</p></div>`,15),o=[e];function c(l,r,i,u,k,d){return s(),a("div",null,o)}const x=n(p,[["render",c]]);export{m as __pageData,x as default};
