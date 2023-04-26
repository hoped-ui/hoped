import{_ as s,c as n,o as a,O as o}from"./chunks/framework.bf997157.js";const u=JSON.parse('{"title":"全局组件引入","description":"","frontmatter":{},"headers":[],"relativePath":"base/global.md"}'),l={name:"base/global.md"},p=o(`<h1 id="全局组件引入" tabindex="-1">全局组件引入 <a class="header-anchor" href="#全局组件引入" aria-label="Permalink to &quot;全局组件引入&quot;">​</a></h1><br><br><ul><li><p>如果想要组件库支持全局组件的提示，可以在 src/components.d.ts 文件中声明</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> components </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vue/runtime-core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GlobalComponents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    HButton</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">components</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    HInput</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">components</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Input</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    HIcon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">components</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Icon</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span></code></pre></div></li><li><p>同时在使用组件库的时候需要用户在<code>tsconfig.json</code>中配置<code>types:[&quot;hope/lib/src/components&quot;]</code>当然这里根据你的组件库命名决定</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hope/lib/src/components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li></ul>`,4),e=[p];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};
