(self.webpackChunkvalar_docs=self.webpackChunkvalar_docs||[]).push([[264],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6184:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={sidebar_position:3,sidebar_name:"ESPHome"},l={unversionedId:"VAL-1000/ESPHome",id:"VAL-1000/ESPHome",isDocsHomePage:!1,title:"ESPhome Integration",description:"ESPHome V1.18 is required",source:"@site/docs/VAL-1000/ESPHome.md",sourceDirName:"VAL-1000",slug:"/VAL-1000/ESPHome",permalink:"/docs/VAL-1000/ESPHome",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/VAL-1000/ESPHome.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_name:"ESPHome"},sidebar:"tutorialSidebar",previous:{title:"StallGuard",permalink:"/docs/VAL-1000/StallGuard"},next:{title:"VALAR W1: Window Opener Setup Instructions",permalink:"/docs/Window Opener/valar_w1"}},s=[{value:"1. Add New Device",id:"1-add-new-device",children:[]},{value:"2. Tuning",id:"2-tuning",children:[{value:"1. Current:",id:"1-current",children:[]},{value:"2. Velocity:",id:"2-velocity",children:[]},{value:"3. Acceleration:",id:"3-acceleration",children:[]},{value:"4. TCOOLTHRS setting:",id:"4-tcoolthrs-setting",children:[]},{value:"5. SGTHRS setting",id:"5-sgthrs-setting",children:[]},{value:"My workflow for setting stallguard:",id:"my-workflow-for-setting-stallguard",children:[]}]}],u={toc:s};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ESPHome V1.18 is required")),(0,a.kt)("h2",{id:"1-add-new-device"},"1. Add New Device"),(0,a.kt)("p",null,"Begin by adding a new device in ESPHome. Copy the following code into the YAML file, completely replacing what is there. "),(0,a.kt)("script",{src:"https://gist.github.com/daniel-frenkel/8e4cdc51d2ce889c06ae5fc3ca4e8293.js"}),(0,a.kt)("h2",{id:"2-tuning"},"2. Tuning"),(0,a.kt)("p",null,"StallGuard requires near-perfect value to work, thus it requires you to properly tune the values. "),(0,a.kt)("p",null,"StallGuard is a combination of the following parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. Current\n2. Velocity\n3. Acceleration\n4. TCOOLTHRS setting\n5. SGTHRS setting\n")),(0,a.kt)("h3",{id:"1-current"},"1. Current:"),(0,a.kt)("p",null,"The current you are using will determine the amount of back EMF created, so first set your current to a level you want. A high current will make the motor louder and stronger. A low current will do the opposite."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT:")," Always use the ",(0,a.kt)("strong",{parentName:"p"},"least")," amount of current needed to make the motor move. This is good for safety reasons, it makes StallGuard more reliable, and runs the motor and driver much cooler, thus extending their lives. "),(0,a.kt)("h3",{id:"2-velocity"},"2. Velocity:"),(0,a.kt)("p",null,"Next, set the velocity. How fast do you want it to go. "),(0,a.kt)("h3",{id:"3-acceleration"},"3. Acceleration:"),(0,a.kt)("p",null,"Next, set the acceleration. StallGuard is not reliable at very low speeds, so a very long and slow acceleration will not be good with StallGuard. Try to accelerate as fast as you can based on your project. Just know during the acceleration phase, StallGuard may not work right awat, so can you risk having it not work until it gets to its operating velocity? "),(0,a.kt)("p",null,"For example, in my window opener, I cannot risk StallGuard not working. If the window is locked when trying to open the window, damage may occur if StallGuard does not immediately detect the locked window. So I need to accelerate it as quickly as possible to reach its operating velocity. So take some time to get your acceleration right. "),(0,a.kt)("h3",{id:"4-tcoolthrs-setting"},"4. TCOOLTHRS setting:"),(0,a.kt)("p",null,"Now we can set the TCOOLTHRS value. It is on page 26 of the datasheet. "),(0,a.kt)("p",null,"This is the velocity threshold at which point stallGuard will activate. StallGuard is not reliable at low speeds so we need to shut it off until a certain speed is reached. It will always trigger the stall pin when starting up in the first few milisecond, even when there is no stall. "),(0,a.kt)("p",null,"So we need to set the correct velocity value at which point to turn StallGuard on, but this can be very difficult to do because the value is quite hard to figure out. "),(0,a.kt)("p",null,"Fortunately I\u2019ve spent a lot of time figuring this out, and created a formula to figure it out."),(0,a.kt)("p",null,"TCOOLS = (3089838.00",(0,a.kt)("em",{parentName:"p"},"pow(float(VELOCITY),-1.00161534))"),"1.5;"),(0,a.kt)("p",null,"Simply plug in your VELOCITY value into the formula, and it will give you the threshold value. "),(0,a.kt)("h3",{id:"5-sgthrs-setting"},"5. SGTHRS setting"),(0,a.kt)("p",null,"Finally, we need to set the SGTHRS value which is the main value to set. It is a value from 0 - 255 as seen on page 55 of the datsheet."),(0,a.kt)("p",null,"A value of 0 will turn StallGuard off completely. The higher you go, the more sensitive it will be to tripping."),(0,a.kt)("h3",{id:"my-workflow-for-setting-stallguard"},"My workflow for setting stallguard:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First I set StallGaurd value to 0 to turn it off. "),(0,a.kt)("li",{parentName:"ol"},"Then I figure out the ",(0,a.kt)("strong",{parentName:"li"},"minimum")," current to set. I need to have just enough current to move whatever needs to be moved, but not any more. If the current is too high, StallGuard will require a lot of force to trip, so don\u2019t set the current any higher than the application calls for. Set it at near zero and slowly inscrease it until your object begins to move."),(0,a.kt)("li",{parentName:"ol"},"Then I figure out what velocity I want and set that."),(0,a.kt)("li",{parentName:"ol"},"Then I figure out what acceleration I want, trying to use the fastest I can for the application"),(0,a.kt)("li",{parentName:"ol"},"Then I set the TCOOLTHRS value based on the formula above. In fact, I have it coded into the sketch so it automatically sets when I set the velocity."),(0,a.kt)("li",{parentName:"ol"},"Then I start at SGTHRS value 0 and start moving the motor and applying pressure to it with my fingers. I slowly increase this number until it stalls. Just keep running the motor, applying pressure, and increasing the value. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remember:"),"  A higher SGTHRS value gives a higher sensitivity. A higher value makes StallGuard more sensitive and requires less torque to indicate a stall."))}c.isMDXComponent=!0}}]);