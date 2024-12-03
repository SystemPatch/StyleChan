// ==UserScript==
// @name         StyleChan
// @version      1.0.25
// @namespace    StyleChan
// @description  Customizable themes for 4chan X.
// @minGMVer     1.14
// @minFFVer     26
// @license      GPL-3.0; https://github.com/3nly/StyleChan/blob/main/LICENSE 
// @match        http://boards.4chan.org/*
// @match        https://boards.4chan.org/*
// @match        http://sys.4chan.org/*
// @match        https://sys.4chan.org/*
// @exclude      http://www.4chan.org/
// @exclude      https://www.4chan.org/
// @exclude      http://www.4chan.org/*
// @exclude      https://www.4chan.org/*
// @exclude      http://www.4chan.org/advertise
// @exclude      https://www.4chan.org/advertise
// @exclude      http://www.4chan.org/advertise?*
// @exclude      https://www.4chan.org/advertise?*
// @exclude      http://www.4chan.org/donate
// @exclude      https://www.4chan.org/donate
// @exclude      http://www.4chan.org/donate?*
// @exclude      https://www.4chan.org/donate?*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @run-at       document-start
// @updateURL    https://github.com/3nly/StyleChan/releases/latest/download/StyleChan.meta.js
// @downloadURL  https://github.com/3nly/StyleChan/releases/latest/download/StyleChan.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABRFBMVEUAAADtAIwArvBQtknpDI3tAIwDrulPtkgErub/8gAArvD/8gBQtkkBru0Cr+tQtkkCrurqC43+8gBQtkkAru9QtklQtkntAYwAru7sAoxPtkkCruvrBoxPtkj78QFQtkn37wLrCI337wJPtkj27wNQtkgArvAAru8Aru/+8gDtAYxQtkkBru798QHsBYz88QHsA4wBru3rBoz68QH58AJPtkkCrur58ALsBoz37wLqCYz17gNQtkntAYwAru9Qtkn+8gDsAozsAoz98QH98QEBru7sAozsA4xQtklQtklQtklQtkn88QHrBowCrur58ALtAYz+8gABru9Qtkn98gD98QH98QFQtkkBru388QHsAoxQtknsBIz68QH98QH78AIBru0Bru0BruxQtkjsA4z78QIBru7qCYz/8gDtAIwArvBQtkkkzno5AAAAaHRSTlMA+Pr4CfMMCwb37uvdSjstFA/y6eDKwbayZFlSQDUiHBcUEg8OBfLozsCtopqaf3duaVNEOSUiHBoIBwTv7NrR0MzCsqainpGNcmZHMS8pKN7cwLW1rJ6aiIiHg3loXE80MS4VqYGAIkGLyJ4AAAJeSURBVEjHxZNXWxpBFECHKlKl9ybNUKSDVGnBIII9tthiyi78//fsnV0Cs7vf+JIvngeWh3Pg3hlAH8BW2FKNcc9E2GIJJ97XfZdGu9F1/BbMGO12YyaI6MRuVEtA5bQvMcYpPXgAn+CwSvOrxqWECS3wqaTB5RYlOJYJXDFKMG1LgwztaN+cEl/lk1j0mZxh+r3diPz2VF60HkTVCAi7yIEmeAPdTq2m3dCjhcFZ3+2NwnuLc9P/gs/0Ndt1OC78upX/261gORSDAOIIHm74Mfj4omMB6ItCYU2zAmfeJi4IX3ubXPDoTXxQ0rArNN/UUDh5/wHm2fmsXKzw8HuM2TWKfSgssHl7QvhAag6+2s3KFXZfgvCBpBmCJgTioprBF6zNYp8M0BFLFniPLezfEv4i9R0HgQ5ZaAqIR/eL98VLq9MsSafEB0U96SdNiMerEH0FH2g9CxK9mfejA9EShSbCvO4tZEcKaEj/HpZutLiXF1Ghf8HBPekfWRFCkVy+wT3MXSJQ+mWOdYz9EbP9M869MTlkgsLmzukDhFBoyDDMdm4XF9Jg1lnPw/ufGMxXXHQlF6f+8dcfg38KPmZUhz3Wm2d1CDPrC+e/b137mCso5h7hwi9qSGDm1nB6v9QU5lkzgql2int6pTKVBV/AGvB6A/gvvXvNEOTiCBKz3zTXIRladwzJdr6FaJQNjAhDmeY3rhkJwzglCJ1LA8MpJTgxSANb5V8GkZ40OA8hCnfSgH6ukeHq/G3CE36BNOo5A2i9p/IVl9h6j3H0Do2Tp/xjOYJQvPL8XKmj/88f8uGNBHXfIrwAAAAASUVORK5CYII=
// ==/UserScript==