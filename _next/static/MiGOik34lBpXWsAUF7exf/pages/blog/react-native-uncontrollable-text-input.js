(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{is9S:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),s=a("nOHt"),o=a("wZee"),u=a.n(o),i=a("apO0"),r=l.a.createElement;t.default=function(){var e=Object(s.useRouter)();Object(n.useEffect)((function(){u.a.highlightAll()}),[]);return r(l.a.Fragment,null,r(i.a,{title:"Dmitriy Gurinenko | Dev Blog"},r("div",{className:"container"},r("div",{className:"text"},r("span",{className:"hover",onClick:e.back},"\u25c0"," "),"04/09/2019",r("div",{className:"subtitle"},"React Native: uncontrollable TextInput & missed react updates"),r("hr",{style:{marginRight:20,marginTop:10}}),r("br",null),r("p",null,"So what is this about?",r("br",null),r("br",null),"Let's imagine you've already know all the RN basics but every day you try something new with your project. Today I started to code a new form in our current react-native app. After all layout hacks and logic hooks I started to use a simple well-known condition like:"),r("pre",null,r("code",{className:"language-javascript"},"\n  <TextInput\n    onChangeText={setValue}\n    style={[\n      styles.input,\n      {\n        color: isValid\n          ? MAIN_COLORS.BLACK\n          : MAIN_COLORS.ERROR,\n      },\n    ]}\n  />")),r("br",null),r("p",null,"Suddenly I stuck with a simple style prop. It just wasn't updating that color. However when I tried to use an"," ",r("code",{className:"language-javascript"},"isValid")," constant somewhere else in the same Form (stateless/functional) component, it has been rendered and updated correctly.",r("br",null),r("br",null),"After a little googling I found a quite old opened issue -"," ",r("a",{href:"https://github.com/facebook/react-native/issues/20131"},r("strong",null,"https://github.com/facebook/react-native/issues/20131"))," ","where guys explained a way to fix this. You just need to make your TextInput controllable and add a"," ",r("code",{className:"language-javascript"},"value")," prop. It should use a state value from the"," ",r("code",{className:"language-javascript"},"setValue")," callback;",r("br",null),r("br",null),"A full example of a working code:"),r("pre",null,r("code",{className:"language-javascript"},"\nconst [value, setValue] = useState();\n\n<TextInput\n  value={value}\n  onChangeText={setValue}\n  style={[\n    styles.input,\n    {\n      color: isValid\n        ? MAIN_COLORS.BLACK\n        : MAIN_COLORS.ERROR,\n    },\n  ]}\n/>"))))))}},usj0:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/react-native-uncontrollable-text-input",function(){return a("is9S")}])}},[["usj0",0,2,3,1,4,5]]]);