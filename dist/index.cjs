var Cr=Object.create;var k=Object.defineProperty;var Gr=Object.getOwnPropertyDescriptor;var br=Object.getOwnPropertyNames;var Dr=Object.getPrototypeOf,Xr=Object.prototype.hasOwnProperty;var p=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),jr=(t,e)=>{for(var r in e)k(t,r,{get:e[r],enumerable:!0})},Pe=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of br(e))!Xr.call(t,i)&&i!==r&&k(t,i,{get:()=>e[i],enumerable:!(s=Gr(e,i))||s.enumerable});return t};var Ee=(t,e,r)=>(r=t!=null?Cr(Dr(t)):{},Pe(e||!t||!t.__esModule?k(r,"default",{value:t,enumerable:!0}):r,t)),Fr=t=>Pe(k({},"__esModule",{value:!0}),t);var H=p((Qi,Ge)=>{var Ur="2.0.0",_r=Number.MAX_SAFE_INTEGER||9007199254740991,Vr=16;Ge.exports={SEMVER_SPEC_VERSION:Ur,MAX_LENGTH:256,MAX_SAFE_INTEGER:_r,MAX_SAFE_COMPONENT_LENGTH:Vr}});var B=p((ki,be)=>{var Hr=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};be.exports=Hr});var C=p((P,De)=>{var{MAX_SAFE_COMPONENT_LENGTH:me}=H(),Br=B();P=De.exports={};var Mr=P.re=[],a=P.src=[],o=P.t={},zr=0,E=(t,e,r)=>{let s=zr++;Br(t,s,e),o[t]=s,a[s]=e,Mr[s]=new RegExp(e,r?"g":void 0)};E("NUMERICIDENTIFIER","0|[1-9]\\d*");E("NUMERICIDENTIFIERLOOSE","[0-9]+");E("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*");E("MAINVERSION",`(${a[o.NUMERICIDENTIFIER]})\\.(${a[o.NUMERICIDENTIFIER]})\\.(${a[o.NUMERICIDENTIFIER]})`);E("MAINVERSIONLOOSE",`(${a[o.NUMERICIDENTIFIERLOOSE]})\\.(${a[o.NUMERICIDENTIFIERLOOSE]})\\.(${a[o.NUMERICIDENTIFIERLOOSE]})`);E("PRERELEASEIDENTIFIER",`(?:${a[o.NUMERICIDENTIFIER]}|${a[o.NONNUMERICIDENTIFIER]})`);E("PRERELEASEIDENTIFIERLOOSE",`(?:${a[o.NUMERICIDENTIFIERLOOSE]}|${a[o.NONNUMERICIDENTIFIER]})`);E("PRERELEASE",`(?:-(${a[o.PRERELEASEIDENTIFIER]}(?:\\.${a[o.PRERELEASEIDENTIFIER]})*))`);E("PRERELEASELOOSE",`(?:-?(${a[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[o.PRERELEASEIDENTIFIERLOOSE]})*))`);E("BUILDIDENTIFIER","[0-9A-Za-z-]+");E("BUILD",`(?:\\+(${a[o.BUILDIDENTIFIER]}(?:\\.${a[o.BUILDIDENTIFIER]})*))`);E("FULLPLAIN",`v?${a[o.MAINVERSION]}${a[o.PRERELEASE]}?${a[o.BUILD]}?`);E("FULL",`^${a[o.FULLPLAIN]}$`);E("LOOSEPLAIN",`[v=\\s]*${a[o.MAINVERSIONLOOSE]}${a[o.PRERELEASELOOSE]}?${a[o.BUILD]}?`);E("LOOSE",`^${a[o.LOOSEPLAIN]}$`);E("GTLT","((?:<|>)?=?)");E("XRANGEIDENTIFIERLOOSE",`${a[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);E("XRANGEIDENTIFIER",`${a[o.NUMERICIDENTIFIER]}|x|X|\\*`);E("XRANGEPLAIN",`[v=\\s]*(${a[o.XRANGEIDENTIFIER]})(?:\\.(${a[o.XRANGEIDENTIFIER]})(?:\\.(${a[o.XRANGEIDENTIFIER]})(?:${a[o.PRERELEASE]})?${a[o.BUILD]}?)?)?`);E("XRANGEPLAINLOOSE",`[v=\\s]*(${a[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[o.XRANGEIDENTIFIERLOOSE]})(?:${a[o.PRERELEASELOOSE]})?${a[o.BUILD]}?)?)?`);E("XRANGE",`^${a[o.GTLT]}\\s*${a[o.XRANGEPLAIN]}$`);E("XRANGELOOSE",`^${a[o.GTLT]}\\s*${a[o.XRANGEPLAINLOOSE]}$`);E("COERCE",`(^|[^\\d])(\\d{1,${me}})(?:\\.(\\d{1,${me}}))?(?:\\.(\\d{1,${me}}))?(?:$|[^\\d])`);E("COERCERTL",a[o.COERCE],!0);E("LONETILDE","(?:~>?)");E("TILDETRIM",`(\\s*)${a[o.LONETILDE]}\\s+`,!0);P.tildeTrimReplace="$1~";E("TILDE",`^${a[o.LONETILDE]}${a[o.XRANGEPLAIN]}$`);E("TILDELOOSE",`^${a[o.LONETILDE]}${a[o.XRANGEPLAINLOOSE]}$`);E("LONECARET","(?:\\^)");E("CARETTRIM",`(\\s*)${a[o.LONECARET]}\\s+`,!0);P.caretTrimReplace="$1^";E("CARET",`^${a[o.LONECARET]}${a[o.XRANGEPLAIN]}$`);E("CARETLOOSE",`^${a[o.LONECARET]}${a[o.XRANGEPLAINLOOSE]}$`);E("COMPARATORLOOSE",`^${a[o.GTLT]}\\s*(${a[o.LOOSEPLAIN]})$|^$`);E("COMPARATOR",`^${a[o.GTLT]}\\s*(${a[o.FULLPLAIN]})$|^$`);E("COMPARATORTRIM",`(\\s*)${a[o.GTLT]}\\s*(${a[o.LOOSEPLAIN]}|${a[o.XRANGEPLAIN]})`,!0);P.comparatorTrimReplace="$1$2$3";E("HYPHENRANGE",`^\\s*(${a[o.XRANGEPLAIN]})\\s+-\\s+(${a[o.XRANGEPLAIN]})\\s*$`);E("HYPHENRANGELOOSE",`^\\s*(${a[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[o.XRANGEPLAINLOOSE]})\\s*$`);E("STAR","(<|>)?=?\\s*\\*");E("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");E("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var M=p((en,Xe)=>{var Yr=["includePrerelease","loose","rtl"],Zr=t=>t?typeof t!="object"?{loose:!0}:Yr.filter(e=>t[e]).reduce((e,r)=>(e[r]=!0,e),{}):{};Xe.exports=Zr});var ee=p((tn,Ue)=>{var je=/^[0-9]+$/,Fe=(t,e)=>{let r=je.test(t),s=je.test(e);return r&&s&&(t=+t,e=+e),t===e?0:r&&!s?-1:s&&!r?1:t<e?-1:1},Wr=(t,e)=>Fe(e,t);Ue.exports={compareIdentifiers:Fe,rcompareIdentifiers:Wr}});var I=p((rn,Be)=>{var te=B(),{MAX_LENGTH:_e,MAX_SAFE_INTEGER:re}=H(),{re:Ve,t:He}=C(),Kr=M(),{compareIdentifiers:F}=ee(),x=class{constructor(e,r){if(r=Kr(r),e instanceof x){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid Version: ${e}`);if(e.length>_e)throw new TypeError(`version is longer than ${_e} characters`);te("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let s=e.trim().match(r.loose?Ve[He.LOOSE]:Ve[He.FULL]);if(!s)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+s[1],this.minor=+s[2],this.patch=+s[3],this.major>re||this.major<0)throw new TypeError("Invalid major version");if(this.minor>re||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>re||this.patch<0)throw new TypeError("Invalid patch version");s[4]?this.prerelease=s[4].split(".").map(i=>{if(/^[0-9]+$/.test(i)){let n=+i;if(n>=0&&n<re)return n}return i}):this.prerelease=[],this.build=s[5]?s[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(te("SemVer.compare",this.version,this.options,e),!(e instanceof x)){if(typeof e=="string"&&e===this.version)return 0;e=new x(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof x||(e=new x(e,this.options)),F(this.major,e.major)||F(this.minor,e.minor)||F(this.patch,e.patch)}comparePre(e){if(e instanceof x||(e=new x(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let s=this.prerelease[r],i=e.prerelease[r];if(te("prerelease compare",r,s,i),s===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(s===void 0)return-1;if(s===i)continue;return F(s,i)}while(++r)}compareBuild(e){e instanceof x||(e=new x(e,this.options));let r=0;do{let s=this.build[r],i=e.build[r];if(te("prerelease compare",r,s,i),s===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(s===void 0)return-1;if(s===i)continue;return F(s,i)}while(++r)}inc(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r),this.inc("pre",r);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);s===-1&&this.prerelease.push(0)}r&&(F(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}};Be.exports=x});var G=p((sn,Ze)=>{var{MAX_LENGTH:Jr}=H(),{re:Me,t:ze}=C(),Ye=I(),Qr=M(),kr=(t,e)=>{if(e=Qr(e),t instanceof Ye)return t;if(typeof t!="string"||t.length>Jr||!(e.loose?Me[ze.LOOSE]:Me[ze.FULL]).test(t))return null;try{return new Ye(t,e)}catch{return null}};Ze.exports=kr});var Ke=p((nn,We)=>{var es=G(),ts=(t,e)=>{let r=es(t,e);return r?r.version:null};We.exports=ts});var Qe=p((ln,Je)=>{var rs=G(),ss=(t,e)=>{let r=rs(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};Je.exports=ss});var tt=p((an,et)=>{var ke=I(),is=(t,e,r,s)=>{typeof r=="string"&&(s=r,r=void 0);try{return new ke(t instanceof ke?t.version:t,r).inc(e,s).version}catch{return null}};et.exports=is});var S=p((on,st)=>{var rt=I(),ns=(t,e,r)=>new rt(t,r).compare(new rt(e,r));st.exports=ns});var se=p((un,it)=>{var ls=S(),as=(t,e,r)=>ls(t,e,r)===0;it.exports=as});var at=p((cn,lt)=>{var nt=G(),os=se(),us=(t,e)=>{if(os(t,e))return null;{let r=nt(t),s=nt(e),i=r.prerelease.length||s.prerelease.length,n=i?"pre":"",l=i?"prerelease":"";for(let u in r)if((u==="major"||u==="minor"||u==="patch")&&r[u]!==s[u])return n+u;return l}};lt.exports=us});var ut=p((hn,ot)=>{var cs=I(),hs=(t,e)=>new cs(t,e).major;ot.exports=hs});var ht=p((fn,ct)=>{var fs=I(),ps=(t,e)=>new fs(t,e).minor;ct.exports=ps});var pt=p((pn,ft)=>{var Es=I(),ms=(t,e)=>new Es(t,e).patch;ft.exports=ms});var mt=p((En,Et)=>{var vs=G(),ds=(t,e)=>{let r=vs(t,e);return r&&r.prerelease.length?r.prerelease:null};Et.exports=ds});var dt=p((mn,vt)=>{var $s=S(),Rs=(t,e,r)=>$s(e,t,r);vt.exports=Rs});var Rt=p((vn,$t)=>{var gs=S(),Is=(t,e)=>gs(t,e,!0);$t.exports=Is});var ie=p((dn,It)=>{var gt=I(),Ns=(t,e,r)=>{let s=new gt(t,r),i=new gt(e,r);return s.compare(i)||s.compareBuild(i)};It.exports=Ns});var Ot=p(($n,Nt)=>{var Os=ie(),Ls=(t,e)=>t.sort((r,s)=>Os(r,s,e));Nt.exports=Ls});var xt=p((Rn,Lt)=>{var xs=ie(),Ss=(t,e)=>t.sort((r,s)=>xs(s,r,e));Lt.exports=Ss});var z=p((gn,St)=>{var Ts=S(),As=(t,e,r)=>Ts(t,e,r)>0;St.exports=As});var ne=p((In,Tt)=>{var ws=S(),qs=(t,e,r)=>ws(t,e,r)<0;Tt.exports=qs});var ve=p((Nn,At)=>{var ys=S(),Ps=(t,e,r)=>ys(t,e,r)!==0;At.exports=Ps});var le=p((On,wt)=>{var Cs=S(),Gs=(t,e,r)=>Cs(t,e,r)>=0;wt.exports=Gs});var ae=p((Ln,qt)=>{var bs=S(),Ds=(t,e,r)=>bs(t,e,r)<=0;qt.exports=Ds});var de=p((xn,yt)=>{var Xs=se(),js=ve(),Fs=z(),Us=le(),_s=ne(),Vs=ae(),Hs=(t,e,r,s)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return Xs(t,r,s);case"!=":return js(t,r,s);case">":return Fs(t,r,s);case">=":return Us(t,r,s);case"<":return _s(t,r,s);case"<=":return Vs(t,r,s);default:throw new TypeError(`Invalid operator: ${e}`)}};yt.exports=Hs});var Ct=p((Sn,Pt)=>{var Bs=I(),Ms=G(),{re:oe,t:ue}=C(),zs=(t,e)=>{if(t instanceof Bs)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(oe[ue.COERCE]);else{let s;for(;(s=oe[ue.COERCERTL].exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||s.index+s[0].length!==r.index+r[0].length)&&(r=s),oe[ue.COERCERTL].lastIndex=s.index+s[1].length+s[2].length;oe[ue.COERCERTL].lastIndex=-1}return r===null?null:Ms(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,e)};Pt.exports=zs});var bt=p((Tn,Gt)=>{"use strict";Gt.exports=function(t){t.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}});var Xt=p((An,Dt)=>{"use strict";Dt.exports=d;d.Node=b;d.create=d;function d(t){var e=this;if(e instanceof d||(e=new d),e.tail=null,e.head=null,e.length=0,t&&typeof t.forEach=="function")t.forEach(function(i){e.push(i)});else if(arguments.length>0)for(var r=0,s=arguments.length;r<s;r++)e.push(arguments[r]);return e}d.prototype.removeNode=function(t){if(t.list!==this)throw new Error("removing node which does not belong to this list");var e=t.next,r=t.prev;return e&&(e.prev=r),r&&(r.next=e),t===this.head&&(this.head=e),t===this.tail&&(this.tail=r),t.list.length--,t.next=null,t.prev=null,t.list=null,e};d.prototype.unshiftNode=function(t){if(t!==this.head){t.list&&t.list.removeNode(t);var e=this.head;t.list=this,t.next=e,e&&(e.prev=t),this.head=t,this.tail||(this.tail=t),this.length++}};d.prototype.pushNode=function(t){if(t!==this.tail){t.list&&t.list.removeNode(t);var e=this.tail;t.list=this,t.prev=e,e&&(e.next=t),this.tail=t,this.head||(this.head=t),this.length++}};d.prototype.push=function(){for(var t=0,e=arguments.length;t<e;t++)Zs(this,arguments[t]);return this.length};d.prototype.unshift=function(){for(var t=0,e=arguments.length;t<e;t++)Ws(this,arguments[t]);return this.length};d.prototype.pop=function(){if(!!this.tail){var t=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,t}};d.prototype.shift=function(){if(!!this.head){var t=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,t}};d.prototype.forEach=function(t,e){e=e||this;for(var r=this.head,s=0;r!==null;s++)t.call(e,r.value,s,this),r=r.next};d.prototype.forEachReverse=function(t,e){e=e||this;for(var r=this.tail,s=this.length-1;r!==null;s--)t.call(e,r.value,s,this),r=r.prev};d.prototype.get=function(t){for(var e=0,r=this.head;r!==null&&e<t;e++)r=r.next;if(e===t&&r!==null)return r.value};d.prototype.getReverse=function(t){for(var e=0,r=this.tail;r!==null&&e<t;e++)r=r.prev;if(e===t&&r!==null)return r.value};d.prototype.map=function(t,e){e=e||this;for(var r=new d,s=this.head;s!==null;)r.push(t.call(e,s.value,this)),s=s.next;return r};d.prototype.mapReverse=function(t,e){e=e||this;for(var r=new d,s=this.tail;s!==null;)r.push(t.call(e,s.value,this)),s=s.prev;return r};d.prototype.reduce=function(t,e){var r,s=this.head;if(arguments.length>1)r=e;else if(this.head)s=this.head.next,r=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;s!==null;i++)r=t(r,s.value,i),s=s.next;return r};d.prototype.reduceReverse=function(t,e){var r,s=this.tail;if(arguments.length>1)r=e;else if(this.tail)s=this.tail.prev,r=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;s!==null;i--)r=t(r,s.value,i),s=s.prev;return r};d.prototype.toArray=function(){for(var t=new Array(this.length),e=0,r=this.head;r!==null;e++)t[e]=r.value,r=r.next;return t};d.prototype.toArrayReverse=function(){for(var t=new Array(this.length),e=0,r=this.tail;r!==null;e++)t[e]=r.value,r=r.prev;return t};d.prototype.slice=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var r=new d;if(e<t||e<0)return r;t<0&&(t=0),e>this.length&&(e=this.length);for(var s=0,i=this.head;i!==null&&s<t;s++)i=i.next;for(;i!==null&&s<e;s++,i=i.next)r.push(i.value);return r};d.prototype.sliceReverse=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var r=new d;if(e<t||e<0)return r;t<0&&(t=0),e>this.length&&(e=this.length);for(var s=this.length,i=this.tail;i!==null&&s>e;s--)i=i.prev;for(;i!==null&&s>t;s--,i=i.prev)r.push(i.value);return r};d.prototype.splice=function(t,e,...r){t>this.length&&(t=this.length-1),t<0&&(t=this.length+t);for(var s=0,i=this.head;i!==null&&s<t;s++)i=i.next;for(var n=[],s=0;i&&s<e;s++)n.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var s=0;s<r.length;s++)i=Ys(this,i,r[s]);return n};d.prototype.reverse=function(){for(var t=this.head,e=this.tail,r=t;r!==null;r=r.prev){var s=r.prev;r.prev=r.next,r.next=s}return this.head=e,this.tail=t,this};function Ys(t,e,r){var s=e===t.head?new b(r,null,e,t):new b(r,e,e.next,t);return s.next===null&&(t.tail=s),s.prev===null&&(t.head=s),t.length++,s}function Zs(t,e){t.tail=new b(e,t.tail,null,t),t.head||(t.head=t.tail),t.length++}function Ws(t,e){t.head=new b(e,null,t.head,t),t.tail||(t.tail=t.head),t.length++}function b(t,e,r,s){if(!(this instanceof b))return new b(t,e,r,s);this.list=s,this.value=t,e?(e.next=this,this.prev=e):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}try{bt()(d)}catch{}});var Vt=p((wn,_t)=>{"use strict";var Ks=Xt(),D=Symbol("max"),y=Symbol("length"),U=Symbol("lengthCalculator"),Z=Symbol("allowStale"),X=Symbol("maxAge"),q=Symbol("dispose"),jt=Symbol("noDisposeOnSet"),g=Symbol("lruList"),A=Symbol("cache"),Ut=Symbol("updateAgeOnGet"),$e=()=>1,ge=class{constructor(e){if(typeof e=="number"&&(e={max:e}),e||(e={}),e.max&&(typeof e.max!="number"||e.max<0))throw new TypeError("max must be a non-negative number");let r=this[D]=e.max||1/0,s=e.length||$e;if(this[U]=typeof s!="function"?$e:s,this[Z]=e.stale||!1,e.maxAge&&typeof e.maxAge!="number")throw new TypeError("maxAge must be a number");this[X]=e.maxAge||0,this[q]=e.dispose,this[jt]=e.noDisposeOnSet||!1,this[Ut]=e.updateAgeOnGet||!1,this.reset()}set max(e){if(typeof e!="number"||e<0)throw new TypeError("max must be a non-negative number");this[D]=e||1/0,Y(this)}get max(){return this[D]}set allowStale(e){this[Z]=!!e}get allowStale(){return this[Z]}set maxAge(e){if(typeof e!="number")throw new TypeError("maxAge must be a non-negative number");this[X]=e,Y(this)}get maxAge(){return this[X]}set lengthCalculator(e){typeof e!="function"&&(e=$e),e!==this[U]&&(this[U]=e,this[y]=0,this[g].forEach(r=>{r.length=this[U](r.value,r.key),this[y]+=r.length})),Y(this)}get lengthCalculator(){return this[U]}get length(){return this[y]}get itemCount(){return this[g].length}rforEach(e,r){r=r||this;for(let s=this[g].tail;s!==null;){let i=s.prev;Ft(this,e,s,r),s=i}}forEach(e,r){r=r||this;for(let s=this[g].head;s!==null;){let i=s.next;Ft(this,e,s,r),s=i}}keys(){return this[g].toArray().map(e=>e.key)}values(){return this[g].toArray().map(e=>e.value)}reset(){this[q]&&this[g]&&this[g].length&&this[g].forEach(e=>this[q](e.key,e.value)),this[A]=new Map,this[g]=new Ks,this[y]=0}dump(){return this[g].map(e=>ce(this,e)?!1:{k:e.key,v:e.value,e:e.now+(e.maxAge||0)}).toArray().filter(e=>e)}dumpLru(){return this[g]}set(e,r,s){if(s=s||this[X],s&&typeof s!="number")throw new TypeError("maxAge must be a number");let i=s?Date.now():0,n=this[U](r,e);if(this[A].has(e)){if(n>this[D])return _(this,this[A].get(e)),!1;let c=this[A].get(e).value;return this[q]&&(this[jt]||this[q](e,c.value)),c.now=i,c.maxAge=s,c.value=r,this[y]+=n-c.length,c.length=n,this.get(e),Y(this),!0}let l=new Ie(e,r,n,i,s);return l.length>this[D]?(this[q]&&this[q](e,r),!1):(this[y]+=l.length,this[g].unshift(l),this[A].set(e,this[g].head),Y(this),!0)}has(e){if(!this[A].has(e))return!1;let r=this[A].get(e).value;return!ce(this,r)}get(e){return Re(this,e,!0)}peek(e){return Re(this,e,!1)}pop(){let e=this[g].tail;return e?(_(this,e),e.value):null}del(e){_(this,this[A].get(e))}load(e){this.reset();let r=Date.now();for(let s=e.length-1;s>=0;s--){let i=e[s],n=i.e||0;if(n===0)this.set(i.k,i.v);else{let l=n-r;l>0&&this.set(i.k,i.v,l)}}}prune(){this[A].forEach((e,r)=>Re(this,r,!1))}},Re=(t,e,r)=>{let s=t[A].get(e);if(s){let i=s.value;if(ce(t,i)){if(_(t,s),!t[Z])return}else r&&(t[Ut]&&(s.value.now=Date.now()),t[g].unshiftNode(s));return i.value}},ce=(t,e)=>{if(!e||!e.maxAge&&!t[X])return!1;let r=Date.now()-e.now;return e.maxAge?r>e.maxAge:t[X]&&r>t[X]},Y=t=>{if(t[y]>t[D])for(let e=t[g].tail;t[y]>t[D]&&e!==null;){let r=e.prev;_(t,e),e=r}},_=(t,e)=>{if(e){let r=e.value;t[q]&&t[q](r.key,r.value),t[y]-=r.length,t[A].delete(r.key),t[g].removeNode(e)}},Ie=class{constructor(e,r,s,i,n){this.key=e,this.value=r,this.length=s,this.now=i,this.maxAge=n||0}},Ft=(t,e,r,s)=>{let i=r.value;ce(t,i)&&(_(t,r),t[Z]||(i=void 0)),i&&e.call(s,i.value,i.key,t)};_t.exports=ge});var T=p((qn,zt)=>{var j=class{constructor(e,r){if(r=Qs(r),e instanceof j)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new j(e.raw,r);if(e instanceof Ne)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split("||").map(s=>this.parseRange(s.trim())).filter(s=>s.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${e}`);if(this.set.length>1){let s=this.set[0];if(this.set=this.set.filter(i=>!Bt(i[0])),this.set.length===0)this.set=[s];else if(this.set.length>1){for(let i of this.set)if(i.length===1&&si(i[0])){this.set=[i];break}}}this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){e=e.trim();let s=`parseRange:${Object.keys(this.options).join(",")}:${e}`,i=Ht.get(s);if(i)return i;let n=this.options.loose,l=n?L[N.HYPHENRANGELOOSE]:L[N.HYPHENRANGE];e=e.replace(l,pi(this.options.includePrerelease)),$("hyphen replace",e),e=e.replace(L[N.COMPARATORTRIM],ei),$("comparator trim",e),e=e.replace(L[N.TILDETRIM],ti),e=e.replace(L[N.CARETTRIM],ri),e=e.split(/\s+/).join(" ");let u=e.split(" ").map(h=>ii(h,this.options)).join(" ").split(/\s+/).map(h=>fi(h,this.options));n&&(u=u.filter(h=>($("loose invalid filter",h,this.options),!!h.match(L[N.COMPARATORLOOSE])))),$("range list",u);let c=new Map,m=u.map(h=>new Ne(h,this.options));for(let h of m){if(Bt(h))return[h];c.set(h.value,h)}c.size>1&&c.has("")&&c.delete("");let v=[...c.values()];return Ht.set(s,v),v}intersects(e,r){if(!(e instanceof j))throw new TypeError("a Range is required");return this.set.some(s=>Mt(s,r)&&e.set.some(i=>Mt(i,r)&&s.every(n=>i.every(l=>n.intersects(l,r)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new ks(e,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(Ei(this.set[r],e,this.options))return!0;return!1}};zt.exports=j;var Js=Vt(),Ht=new Js({max:1e3}),Qs=M(),Ne=W(),$=B(),ks=I(),{re:L,t:N,comparatorTrimReplace:ei,tildeTrimReplace:ti,caretTrimReplace:ri}=C(),Bt=t=>t.value==="<0.0.0-0",si=t=>t.value==="",Mt=(t,e)=>{let r=!0,s=t.slice(),i=s.pop();for(;r&&s.length;)r=s.every(n=>i.intersects(n,e)),i=s.pop();return r},ii=(t,e)=>($("comp",t,e),t=ai(t,e),$("caret",t),t=ni(t,e),$("tildes",t),t=ui(t,e),$("xrange",t),t=hi(t,e),$("stars",t),t),O=t=>!t||t.toLowerCase()==="x"||t==="*",ni=(t,e)=>t.trim().split(/\s+/).map(r=>li(r,e)).join(" "),li=(t,e)=>{let r=e.loose?L[N.TILDELOOSE]:L[N.TILDE];return t.replace(r,(s,i,n,l,u)=>{$("tilde",t,s,i,n,l,u);let c;return O(i)?c="":O(n)?c=`>=${i}.0.0 <${+i+1}.0.0-0`:O(l)?c=`>=${i}.${n}.0 <${i}.${+n+1}.0-0`:u?($("replaceTilde pr",u),c=`>=${i}.${n}.${l}-${u} <${i}.${+n+1}.0-0`):c=`>=${i}.${n}.${l} <${i}.${+n+1}.0-0`,$("tilde return",c),c})},ai=(t,e)=>t.trim().split(/\s+/).map(r=>oi(r,e)).join(" "),oi=(t,e)=>{$("caret",t,e);let r=e.loose?L[N.CARETLOOSE]:L[N.CARET],s=e.includePrerelease?"-0":"";return t.replace(r,(i,n,l,u,c)=>{$("caret",t,i,n,l,u,c);let m;return O(n)?m="":O(l)?m=`>=${n}.0.0${s} <${+n+1}.0.0-0`:O(u)?n==="0"?m=`>=${n}.${l}.0${s} <${n}.${+l+1}.0-0`:m=`>=${n}.${l}.0${s} <${+n+1}.0.0-0`:c?($("replaceCaret pr",c),n==="0"?l==="0"?m=`>=${n}.${l}.${u}-${c} <${n}.${l}.${+u+1}-0`:m=`>=${n}.${l}.${u}-${c} <${n}.${+l+1}.0-0`:m=`>=${n}.${l}.${u}-${c} <${+n+1}.0.0-0`):($("no pr"),n==="0"?l==="0"?m=`>=${n}.${l}.${u}${s} <${n}.${l}.${+u+1}-0`:m=`>=${n}.${l}.${u}${s} <${n}.${+l+1}.0-0`:m=`>=${n}.${l}.${u} <${+n+1}.0.0-0`),$("caret return",m),m})},ui=(t,e)=>($("replaceXRanges",t,e),t.split(/\s+/).map(r=>ci(r,e)).join(" ")),ci=(t,e)=>{t=t.trim();let r=e.loose?L[N.XRANGELOOSE]:L[N.XRANGE];return t.replace(r,(s,i,n,l,u,c)=>{$("xRange",t,s,i,n,l,u,c);let m=O(n),v=m||O(l),h=v||O(u),R=h;return i==="="&&R&&(i=""),c=e.includePrerelease?"-0":"",m?i===">"||i==="<"?s="<0.0.0-0":s="*":i&&R?(v&&(l=0),u=0,i===">"?(i=">=",v?(n=+n+1,l=0,u=0):(l=+l+1,u=0)):i==="<="&&(i="<",v?n=+n+1:l=+l+1),i==="<"&&(c="-0"),s=`${i+n}.${l}.${u}${c}`):v?s=`>=${n}.0.0${c} <${+n+1}.0.0-0`:h&&(s=`>=${n}.${l}.0${c} <${n}.${+l+1}.0-0`),$("xRange return",s),s})},hi=(t,e)=>($("replaceStars",t,e),t.trim().replace(L[N.STAR],"")),fi=(t,e)=>($("replaceGTE0",t,e),t.trim().replace(L[e.includePrerelease?N.GTE0PRE:N.GTE0],"")),pi=t=>(e,r,s,i,n,l,u,c,m,v,h,R,f)=>(O(s)?r="":O(i)?r=`>=${s}.0.0${t?"-0":""}`:O(n)?r=`>=${s}.${i}.0${t?"-0":""}`:l?r=`>=${r}`:r=`>=${r}${t?"-0":""}`,O(m)?c="":O(v)?c=`<${+m+1}.0.0-0`:O(h)?c=`<${m}.${+v+1}.0-0`:R?c=`<=${m}.${v}.${h}-${R}`:t?c=`<${m}.${v}.${+h+1}-0`:c=`<=${c}`,`${r} ${c}`.trim()),Ei=(t,e,r)=>{for(let s=0;s<t.length;s++)if(!t[s].test(e))return!1;if(e.prerelease.length&&!r.includePrerelease){for(let s=0;s<t.length;s++)if($(t[s].semver),t[s].semver!==Ne.ANY&&t[s].semver.prerelease.length>0){let i=t[s].semver;if(i.major===e.major&&i.minor===e.minor&&i.patch===e.patch)return!0}return!1}return!0}});var W=p((yn,Jt)=>{var K=Symbol("SemVer ANY"),V=class{static get ANY(){return K}constructor(e,r){if(r=mi(r),e instanceof V){if(e.loose===!!r.loose)return e;e=e.value}Le("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===K?this.value="":this.value=this.operator+this.semver.version,Le("comp",this)}parse(e){let r=this.options.loose?Yt[Zt.COMPARATORLOOSE]:Yt[Zt.COMPARATOR],s=e.match(r);if(!s)throw new TypeError(`Invalid comparator: ${e}`);this.operator=s[1]!==void 0?s[1]:"",this.operator==="="&&(this.operator=""),s[2]?this.semver=new Wt(s[2],this.options.loose):this.semver=K}toString(){return this.value}test(e){if(Le("Comparator.test",e,this.options.loose),this.semver===K||e===K)return!0;if(typeof e=="string")try{e=new Wt(e,this.options)}catch{return!1}return Oe(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof V))throw new TypeError("a Comparator is required");if((!r||typeof r!="object")&&(r={loose:!!r,includePrerelease:!1}),this.operator==="")return this.value===""?!0:new Kt(e.value,r).test(this.value);if(e.operator==="")return e.value===""?!0:new Kt(this.value,r).test(e.semver);let s=(this.operator===">="||this.operator===">")&&(e.operator===">="||e.operator===">"),i=(this.operator==="<="||this.operator==="<")&&(e.operator==="<="||e.operator==="<"),n=this.semver.version===e.semver.version,l=(this.operator===">="||this.operator==="<=")&&(e.operator===">="||e.operator==="<="),u=Oe(this.semver,"<",e.semver,r)&&(this.operator===">="||this.operator===">")&&(e.operator==="<="||e.operator==="<"),c=Oe(this.semver,">",e.semver,r)&&(this.operator==="<="||this.operator==="<")&&(e.operator===">="||e.operator===">");return s||i||n&&l||u||c}};Jt.exports=V;var mi=M(),{re:Yt,t:Zt}=C(),Oe=de(),Le=B(),Wt=I(),Kt=T()});var J=p((Pn,Qt)=>{var vi=T(),di=(t,e,r)=>{try{e=new vi(e,r)}catch{return!1}return e.test(t)};Qt.exports=di});var er=p((Cn,kt)=>{var $i=T(),Ri=(t,e)=>new $i(t,e).set.map(r=>r.map(s=>s.value).join(" ").trim().split(" "));kt.exports=Ri});var rr=p((Gn,tr)=>{var gi=I(),Ii=T(),Ni=(t,e,r)=>{let s=null,i=null,n=null;try{n=new Ii(e,r)}catch{return null}return t.forEach(l=>{n.test(l)&&(!s||i.compare(l)===-1)&&(s=l,i=new gi(s,r))}),s};tr.exports=Ni});var ir=p((bn,sr)=>{var Oi=I(),Li=T(),xi=(t,e,r)=>{let s=null,i=null,n=null;try{n=new Li(e,r)}catch{return null}return t.forEach(l=>{n.test(l)&&(!s||i.compare(l)===1)&&(s=l,i=new Oi(s,r))}),s};sr.exports=xi});var ar=p((Dn,lr)=>{var xe=I(),Si=T(),nr=z(),Ti=(t,e)=>{t=new Si(t,e);let r=new xe("0.0.0");if(t.test(r)||(r=new xe("0.0.0-0"),t.test(r)))return r;r=null;for(let s=0;s<t.set.length;++s){let i=t.set[s],n=null;i.forEach(l=>{let u=new xe(l.semver.version);switch(l.operator){case">":u.prerelease.length===0?u.patch++:u.prerelease.push(0),u.raw=u.format();case"":case">=":(!n||nr(u,n))&&(n=u);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${l.operator}`)}}),n&&(!r||nr(r,n))&&(r=n)}return r&&t.test(r)?r:null};lr.exports=Ti});var ur=p((Xn,or)=>{var Ai=T(),wi=(t,e)=>{try{return new Ai(t,e).range||"*"}catch{return null}};or.exports=wi});var he=p((jn,pr)=>{var qi=I(),fr=W(),{ANY:yi}=fr,Pi=T(),Ci=J(),cr=z(),hr=ne(),Gi=ae(),bi=le(),Di=(t,e,r,s)=>{t=new qi(t,s),e=new Pi(e,s);let i,n,l,u,c;switch(r){case">":i=cr,n=Gi,l=hr,u=">",c=">=";break;case"<":i=hr,n=bi,l=cr,u="<",c="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Ci(t,e,s))return!1;for(let m=0;m<e.set.length;++m){let v=e.set[m],h=null,R=null;if(v.forEach(f=>{f.semver===yi&&(f=new fr(">=0.0.0")),h=h||f,R=R||f,i(f.semver,h.semver,s)?h=f:l(f.semver,R.semver,s)&&(R=f)}),h.operator===u||h.operator===c||(!R.operator||R.operator===u)&&n(t,R.semver))return!1;if(R.operator===c&&l(t,R.semver))return!1}return!0};pr.exports=Di});var mr=p((Fn,Er)=>{var Xi=he(),ji=(t,e,r)=>Xi(t,e,">",r);Er.exports=ji});var dr=p((Un,vr)=>{var Fi=he(),Ui=(t,e,r)=>Fi(t,e,"<",r);vr.exports=Ui});var gr=p((_n,Rr)=>{var $r=T(),_i=(t,e,r)=>(t=new $r(t,r),e=new $r(e,r),t.intersects(e));Rr.exports=_i});var Nr=p((Vn,Ir)=>{var Vi=J(),Hi=S();Ir.exports=(t,e,r)=>{let s=[],i=null,n=null,l=t.sort((v,h)=>Hi(v,h,r));for(let v of l)Vi(v,e,r)?(n=v,i||(i=v)):(n&&s.push([i,n]),n=null,i=null);i&&s.push([i,null]);let u=[];for(let[v,h]of s)v===h?u.push(v):!h&&v===l[0]?u.push("*"):h?v===l[0]?u.push(`<=${h}`):u.push(`${v} - ${h}`):u.push(`>=${v}`);let c=u.join(" || "),m=typeof e.raw=="string"?e.raw:String(e);return c.length<m.length?c:e}});var Tr=p((Hn,Sr)=>{var Or=T(),fe=W(),{ANY:Se}=fe,Q=J(),Te=S(),Bi=(t,e,r={})=>{if(t===e)return!0;t=new Or(t,r),e=new Or(e,r);let s=!1;e:for(let i of t.set){for(let n of e.set){let l=Mi(i,n,r);if(s=s||l!==null,l)continue e}if(s)return!1}return!0},Mi=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===Se){if(e.length===1&&e[0].semver===Se)return!0;r.includePrerelease?t=[new fe(">=0.0.0-0")]:t=[new fe(">=0.0.0")]}if(e.length===1&&e[0].semver===Se){if(r.includePrerelease)return!0;e=[new fe(">=0.0.0")]}let s=new Set,i,n;for(let f of t)f.operator===">"||f.operator===">="?i=Lr(i,f,r):f.operator==="<"||f.operator==="<="?n=xr(n,f,r):s.add(f.semver);if(s.size>1)return null;let l;if(i&&n){if(l=Te(i.semver,n.semver,r),l>0)return null;if(l===0&&(i.operator!==">="||n.operator!=="<="))return null}for(let f of s){if(i&&!Q(f,String(i),r)||n&&!Q(f,String(n),r))return null;for(let Pr of e)if(!Q(f,String(Pr),r))return!1;return!0}let u,c,m,v,h=n&&!r.includePrerelease&&n.semver.prerelease.length?n.semver:!1,R=i&&!r.includePrerelease&&i.semver.prerelease.length?i.semver:!1;h&&h.prerelease.length===1&&n.operator==="<"&&h.prerelease[0]===0&&(h=!1);for(let f of e){if(v=v||f.operator===">"||f.operator===">=",m=m||f.operator==="<"||f.operator==="<=",i){if(R&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===R.major&&f.semver.minor===R.minor&&f.semver.patch===R.patch&&(R=!1),f.operator===">"||f.operator===">="){if(u=Lr(i,f,r),u===f&&u!==i)return!1}else if(i.operator===">="&&!Q(i.semver,String(f),r))return!1}if(n){if(h&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===h.major&&f.semver.minor===h.minor&&f.semver.patch===h.patch&&(h=!1),f.operator==="<"||f.operator==="<="){if(c=xr(n,f,r),c===f&&c!==n)return!1}else if(n.operator==="<="&&!Q(n.semver,String(f),r))return!1}if(!f.operator&&(n||i)&&l!==0)return!1}return!(i&&m&&!n&&l!==0||n&&v&&!i&&l!==0||R||h)},Lr=(t,e,r)=>{if(!t)return e;let s=Te(t.semver,e.semver,r);return s>0?t:s<0||e.operator===">"&&t.operator===">="?e:t},xr=(t,e,r)=>{if(!t)return e;let s=Te(t.semver,e.semver,r);return s<0?t:s>0||e.operator==="<"&&t.operator==="<="?e:t};Sr.exports=Bi});var wr=p((Bn,Ar)=>{var Ae=C();Ar.exports={re:Ae.re,src:Ae.src,tokens:Ae.t,SEMVER_SPEC_VERSION:H().SEMVER_SPEC_VERSION,SemVer:I(),compareIdentifiers:ee().compareIdentifiers,rcompareIdentifiers:ee().rcompareIdentifiers,parse:G(),valid:Ke(),clean:Qe(),inc:tt(),diff:at(),major:ut(),minor:ht(),patch:pt(),prerelease:mt(),compare:S(),rcompare:dt(),compareLoose:Rt(),compareBuild:ie(),sort:Ot(),rsort:xt(),gt:z(),lt:ne(),eq:se(),neq:ve(),gte:le(),lte:ae(),cmp:de(),coerce:Ct(),Comparator:W(),Range:T(),satisfies:J(),toComparators:er(),maxSatisfying:rr(),minSatisfying:ir(),minVersion:ar(),validRange:ur(),outside:he(),gtr:mr(),ltr:dr(),intersects:gr(),simplifyRange:Nr(),subset:Tr()}});var Wi={};jr(Wi,{Platform:()=>w,Platforms:()=>we,checkCache:()=>qe,detectCurrentPlatform:()=>ye});module.exports=Fr(Wi);var Ce={NIX_32:"linux32",NIX_64:"linux64",OSX_32:"osx32",OSX_64:"osx64",WIN_32:"win32",WIN_64:"win64"};Object.freeze(Ce);var w=Ce;var qr=Ee(wr(),1),zi={win32:{needsZip:!0,getRunnable:function(){return"nw.exe"},files:{"<=0.9.2":["nw.exe","ffmpegsumo.dll","icudt.dll","libEGL.dll","libGLESv2.dll","nw.pak"],">0.9.2 <0.12.0":["nw.exe","ffmpegsumo.dll","icudtl.dat","libEGL.dll","libGLESv2.dll","nw.pak","locales"],">=0.12.0":["nw.exe","ffmpegsumo.dll","icudtl.dat","libEGL.dll","libGLESv2.dll","nw.pak","locales","d3dcompiler_47.dll","pdf.dll"]},versionNameTemplate:"v${ version }/${ name }-v${ version }-win-ia32.zip"},win64:{needsZip:!0,getRunnable:function(){return"nw.exe"},files:{"<=0.9.2":["nw.exe","ffmpegsumo.dll","icudt.dll","libEGL.dll","libGLESv2.dll","nw.pak","locales"],">0.9.2 <0.12.0":["nw.exe","ffmpegsumo.dll","icudtl.dat","libEGL.dll","libGLESv2.dll","nw.pak","locales"],">=0.12.0":["nw.exe","ffmpegsumo.dll","icudtl.dat","libEGL.dll","libGLESv2.dll","nw.pak","locales","d3dcompiler_47.dll","pdf.dll"]},versionNameTemplate:"v${ version }/${ name }-v${ version }-win-x64.zip"},osx32:{needsZip:!1,getRunnable:function(t){return qr.default.satisfies(t,">=0.12.0 || ~0.12.0-alpha")?"nwjs.app/Contents/MacOS/nwjs":"node-webkit.app/Contents/MacOS/node-webkit"},files:{"<0.12.0-alpha":["node-webkit.app"],">=0.12.0 || ~0.12.0-alpha":["nwjs.app"]},versionNameTemplate:"v${ version }/${ name }-v${ version }-osx-ia32.zip"},osx64:{needsZip:!1,getRunnable:function(t){return satisfies(t,">=0.12.0 || ~0.12.0-alpha")?"nwjs.app/Contents/MacOS/nwjs":"node-webkit.app/Contents/MacOS/node-webkit"},files:{"<0.12.0-alpha":["node-webkit.app"],">=0.12.0 || ~0.12.0-alpha":["nwjs.app"]},versionNameTemplate:"v${ version }/${ name }-v${ version }-osx-x64.zip"},linux32:{needsZip:!0,chmod:"0755",getRunnable:function(){return"nw"},files:{"<=0.9.2":["nw","nw.pak","libffmpegsumo.so"],">0.9.2 <=0.10.1":["nw","nw.pak","libffmpegsumo.so","icudtl.dat"],">0.10.1":["nw","nw.pak","libffmpegsumo.so","icudtl.dat","locales"]},versionNameTemplate:"v${ version }/${ name }-v${ version }-linux-ia32.tar.gz"},linux64:{needsZip:!0,chmod:"0755",getRunnable:function(){return"nw"},files:{"<=0.9.2":["nw","nw.pak","libffmpegsumo.so"],">0.9.2 <=0.10.1":["nw","nw.pak","libffmpegsumo.so","icudtl.dat"],">0.10.1":["nw","nw.pak","libffmpegsumo.so","icudtl.dat","locales"]},versionNameTemplate:"v${ version }/${ name }-v${ version }-linux-x64.tar.gz"}},we=zi;var pe=Ee(require("fs"),1),yr=Ee(require("path"),1),Yi=(t,e)=>{let r=!1;if(e.length===1&&e[0]==="*")return pe.default.existsSync(t)&&pe.default.readdirSync(t).length>=2;for(let s of e){if(r)return!1;pe.default.existsSync(yr.default.join(t,s))||(r=!0)}return!r},qe=Yi;var Zi=t=>{switch(t.platform){case"darwin":return t.arch==="x64"?w.OSX_64:w.OSX_32;case"win32":return t.arch==="x64"||t.env.PROCESSOR_ARCHITEW6432?w.WIN_64:w.WIN_32;case"linux":return t.arch==="x64"?w.NIX_64:w.NIX_32;default:return}},ye=Zi;0&&(module.exports={Platform,Platforms,checkCache,detectCurrentPlatform});