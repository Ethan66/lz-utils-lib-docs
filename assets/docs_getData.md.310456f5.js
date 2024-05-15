import{_ as n,o as s,c as a,N as t}from"./chunks/framework.27c7f8b4.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/getData.md","lastUpdated":1690352221000}'),p={name:"docs/getData.md"},o=t(`<h2 id="通过-value-获取-label" tabindex="-1">通过 Value 获取 Label <a class="header-anchor" href="#通过-value-获取-label" aria-label="Permalink to &quot;通过 Value 获取 Label&quot;">​</a></h2><p>方法名：<code>getLabelByValue</code><br> 场景：获取 opt 数组中 value 对应的 label</p><div class="language-ts"><pre><code><span class="token comment">/**
 * @name 获取数组中value对应的label
 * @param {{ value: string | number; label: string;}[]} opt 处理的对象数组
 * @param {string | number} val 匹配的值
 * @return {string}
 */</span>
<span class="token keyword">const</span> getOptionLabel <span class="token operator">=</span> <span class="token punctuation">(</span>opt<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span> label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>opt<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>value <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>label
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> getOptionLabel
</code></pre><p>getData/getLabelByValue</p></div><h2 id="获取-url-中的参数" tabindex="-1">获取 URL 中的参数 <a class="header-anchor" href="#获取-url-中的参数" aria-label="Permalink to &quot;获取 URL 中的参数&quot;">​</a></h2><p>方法名：<code>getUrlParams</code><br> 场景：从 URL 中获取 params 对象</p><div class="language-ts"><pre><code><span class="token comment">/**
 * 获取 URL 中的参数
 * @param {string} url URL路径
 * @returns {Record&lt;string ,any&gt;} params对象
 */</span>
<span class="token keyword">const</span> getUrlParams <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token punctuation">,</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    url<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([^?&amp;=]+)=([^#&amp;]+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>k <span class="token keyword">as</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> obj
  <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> getUrlParams</code></pre><p>getData/getUrlParams</p></div><h2 id="获取手机系统与型号" tabindex="-1">获取手机系统与型号 <a class="header-anchor" href="#获取手机系统与型号" aria-label="Permalink to &quot;获取手机系统与型号&quot;">​</a></h2><p>方法名：<code>getPhone</code><br> 返回值：<code>getPhone().os</code>为系统，<code>getPhone().model</code>为型号<br> 场景：判断手机系统是 Android 或 IOS，并且返回手机具体型号</p><div class="language-ts"><pre><code><span class="token keyword">import</span> MobileDetect <span class="token keyword">from</span> <span class="token string">&quot;mobile-detect&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * @name 获取手机系统与型号
 * @return {{ os: &#39;iOS&#39; | &#39;Android&#39; | &#39;&#39;; model: string }} os: &#39;iOS&#39; | &#39;Android&#39; | &#39;&#39;;
 */</span>
<span class="token keyword">const</span> getPhone <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> os<span class="token operator">:</span> <span class="token string">&#39;iOS&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Android&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> model<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> deviceType <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">;</span> <span class="token comment">// 获取userAgent信息</span>
    <span class="token keyword">const</span> md <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MobileDetect</span><span class="token punctuation">(</span>deviceType<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化mobile-detect</span>
    <span class="token keyword">let</span> os <span class="token operator">=</span> md<span class="token punctuation">.</span><span class="token function">os</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// 获取系统</span>
    <span class="token keyword">let</span> model <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>os <span class="token operator">===</span> <span class="token string">&quot;iOS&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ios系统的处理</span>
      os <span class="token operator">=</span> md<span class="token punctuation">.</span><span class="token function">os</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> md<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      model <span class="token operator">=</span> md<span class="token punctuation">.</span><span class="token function">mobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>os <span class="token operator">===</span> <span class="token string">&quot;AndroidOS&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Android系统的处理</span>
      os <span class="token operator">=</span> md<span class="token punctuation">.</span><span class="token function">os</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;OS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> md<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&quot;Android&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> sss <span class="token operator">=</span> deviceType<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> i <span class="token operator">=</span> sss<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Build/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        model <span class="token operator">=</span> sss<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> sss<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;Build/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      os<span class="token punctuation">,</span>
      model<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        os<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        model<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> getPhone</code></pre><p>getData/getPhone</p></div><h2 id="获取对象中的指定键值对-对以-分割的值转为数组。" tabindex="-1">获取对象中的指定键值对，对以<code>,</code>分割的值转为数组。 <a class="header-anchor" href="#获取对象中的指定键值对-对以-分割的值转为数组。" aria-label="Permalink to &quot;获取对象中的指定键值对，对以\`,\`分割的值转为数组。&quot;">​</a></h2><p>方法名：<code>getPickData</code><br> 场景：判断手机系统是 Android 或 IOS，并且返回手机具体型号<br> 参数解释：<br> source: <code>源对象</code><br> arrayKeys?: <code>将数组转为string的键数组</code><br> deleteKeys?: <code>要删除的键数组</code><br> 使用方法：getPickData({ source: obj, arrayKeys: [&#39;c&#39;, &#39;d&#39;], deleteKeys: [&#39;a&#39;, &#39;b&#39;]})</p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Obj</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> getPickData <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Obj</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>source<span class="token punctuation">,</span> arrayKeys<span class="token punctuation">,</span> deleteKeys<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>source<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> arrayKeys<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> deleteKeys<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">D</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arrayKeys<span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span>key <span class="token keyword">as</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">[</span>key <span class="token keyword">as</span> Exclude<span class="token operator">&lt;</span><span class="token constant">K</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deleteKeys<span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span>key <span class="token keyword">as</span> <span class="token constant">D</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">[</span>key <span class="token keyword">as</span> Exclude<span class="token operator">&lt;</span><span class="token constant">K</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">=</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> data
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> getPickData
</code></pre><p>getData/getPickData</p></div>`,12),e=[o];function c(l,u,k,r,i,d){return s(),a("div",null,e)}const m=n(p,[["render",c]]);export{y as __pageData,m as default};
