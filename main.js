let keyboard=document.querySelector('#keyboard')
let str=`<div class="str"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings" target = "_blank">\`\`</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/" target="_blank" >!</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media" target="_blank">@</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/MDN/Community/Conversations" target="_blank">#</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/jQuery" target="_blank">$</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank">%</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">^</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target="_blank">&</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference" target="_blank">*</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions" target="_blank">(</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions" target="_blank">)</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" target="_blank">-</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" target="_blank">+</a></div>
<div class="backspace"><a href="https://baike.baidu.com/item/backspace/5792981?fr=aladdin" target="_blank">BACKSPACE</a></div>
<div class="tab"><a href="https://baike.baidu.com/item/Tab/4023" target="_blank">TAB</a></div>
<div><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank">Q</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window" target="_blank">W</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/element" target="_blank">E</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MediaKeySession/remove" target="_blank">R</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLDetailsElement/toggle_event" target="_blank">T</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/y" target="_blank">Y</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/u" target="_blank">U</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList/item" target="_blank">I</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity" target="_blank">O</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::placeholder" target="_blank">P</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function" target="_blank">{</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function" target="_blank">}</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target="_blank">|</a></div>
<div class="capslock"><a href="https://baike.baidu.com/item/Capslock%E9%94%AE/7511606?fr=aladdin" target="_blank">CAPS LOCK</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XUL/Attribute/align" target="_blank">A</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">S</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete" target="_blank">D</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for" target="_blank">F</a></div>
<div><a href="https://developer.mozilla.org/en-US/docs/Glossary/Global_object" target="_blank">G</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/height" target="_blank">H</a></div>
<div><a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON" target="_blank">J</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank">K</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length" target="_blank">L</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after" target="_blank">:</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/prototype" target="_blank">"</a></div>
<div class="enter"><a href="https://baike.baidu.com/item/%E5%9B%9E%E8%BD%A6%E9%94%AE/558894?fromtitle=enter&fromid=2171736&fr=aladdin" target="_blank">ENTER</a></div>
<div class="shift"><a href="https://baike.baidu.com/item/shift/23812484" target="_blank">SHIFT</a></div>
<div><a href="http://www.zeptojs.cn/" target="_blank">Z</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/XML/XML_Introduction" target="_blank">X</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial" target="_blank">C</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/PresentationAvailability/value" target="_blank">V</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/:-moz-only-whitespace" target="_blank">B</a></div>
<div><a href="https://www.npmjs.com/package/mdn" target="_blank">N</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main" target="_blank">M</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement" target="_blank"><</a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement" target="_blank">></a></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" target="_blank">?</a></div>
<div class="pause"><a href="https://baike.baidu.com/item/pause/9262919?fr=aladdin" target="_blank">PAUSE</a></div>
<div><a href="https://baike.baidu.com/item/ctrl/380778" target="_blank">CTRL</a></div>
<div><a href="https://baike.baidu.com/item/FN/21511692#viewPageContent" target="_blank">FN</a></div>
<div><a href="https://baike.baidu.com/item/Windows%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F?fromtitle=windows&fromid=165458" target="_blank">WIN</a></div>
<div><a href="https://baike.baidu.com/item/ALT/16437#viewPageContent" target="_blank">ALT</a></div>
<div class="space"></div>
<div><a href="https://baike.baidu.com/item/ALT/16437#viewPageContent" target="_blank">ALT</a></div>
<div><a href="https://baike.baidu.com/item/ctrl/380778" target="_blank">CTRL</a></div>
<div>左</div>
<div>上下</div>
<div>右</div>`

let n=1
keyboard.innerHTML=str.substring(0,100)

setInterval(function(){
  if(n>str.length){
    return
  }
  n=n+1 
  keyboard.innerHTML=str.substring(0,n)
},1)

