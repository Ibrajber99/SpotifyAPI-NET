(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(9),a=(n(0),n(187)),o={id:"utilities",title:"Utilities",sidebar_label:"Utilities"},c={id:"version-5.1.1/web/utilities",title:"Utilities",description:"Paging-Methods",source:"@site/versioned_docs/version-5.1.1/web/utilities.md",permalink:"/SpotifyAPI-NET/docs/web/utilities",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/utilities.md",version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1599766243,sidebar_label:"Utilities",sidebar:"version-5.1.1/someSidebar",previous:{title:"Tracks",permalink:"/SpotifyAPI-NET/docs/web/tracks"},next:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/auth/getting_started"}},s=[{value:"Paging-Methods",id:"paging-methods",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"paging-methods"},"Paging-Methods"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"SpotifyWebAPI")," features two paging-helper Methods, ",Object(a.b)("inlineCode",{parentName:"p"},"GetNextPage(Paging<T> page)")," and ",Object(a.b)("inlineCode",{parentName:"p"},"GetPreviousPage(Paging<T> page)"),".\nBoth are an easy way to receive the next/previous page of a Paging-Object."),Object(a.b)("p",null,"Sample:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var playlistTracks = _spotify.GetPlaylistTracks("1122095781", "4EcNf2l8rXInbJOf3tQdgU", "", 50);\nwhile (true)\n{\n    Console.WriteLine(playlistTracks.Items.Count);\n    if (!playlistTracks.HasNextPage())\n        break;\n    playlistTracks = _spotify.GetNextPage(playlistTracks);\n}\n')))}p.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(f,c({ref:t},l,{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);