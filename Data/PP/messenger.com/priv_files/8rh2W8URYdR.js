if (self.CavalryLogger) { CavalryLogger.start_js(["oGIPB"]); }

__d('DUPLeftNavSublist.react',['cx','Animation','CSS','Ease','React','ReactDOM','Style'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l=160,m=35,n=c('Ease').makeElasticOut(1,1.6);i=babelHelpers.inherits(o,c('React').Component);j=i&&i.prototype;o.prototype.componentWillReceiveProps=function(p){'use strict';if(c('React').Children.count(p.children)>0)if(p.expanded&&!this.props.expanded){new (c('Animation'))(c('ReactDOM').findDOMNode(this)).from('height',0).to('height','auto').ease(n).show().duration(l+m*p.children.length).go();}else if(!p.expanded&&this.props.expanded)c('Style').set(c('ReactDOM').findDOMNode(this),'height',0);};o.prototype.componentDidMount=function(){'use strict';c('CSS').hide(c('ReactDOM').findDOMNode(this));};o.prototype.render=function(){'use strict';return c('React').createElement('div',{className:"_b_3",id:this.props.id},this.props.children);};function o(){'use strict';i.apply(this,arguments);}o.propTypes={expanded:k.bool};f.exports=o;}),null);
__d('DUPLeftNavSublistItem.react',['cx','Image.react','Link.react','React'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';return c('React').createElement(c('Link.react'),{className:"__35",onClick:this.props.onClick},c('React').createElement(c('Image.react'),{className:"_1z2g",src:'/images/marketing/dup/www/dot_white.png',alt:''}),c('React').createElement('div',{className:"_1z2h"},this.props.children));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={onClick:k.func};f.exports=l;}),null);
__d("DataUsePolicySection",[],(function a(b,c,d,e,f,g){function h(i,j,k,l,m,n,o,p){"use strict";this.$DataUsePolicySection1=i;this.$DataUsePolicySection2=j;this.$DataUsePolicySection3=k;this.$DataUsePolicySection4=l;this.$DataUsePolicySection5=m;this.$DataUsePolicySection6=n;this.$DataUsePolicySection7=o;this.$DataUsePolicySection8=p;}h.prototype.getIconSource=function(){"use strict";return this.$DataUsePolicySection1;};h.prototype.getActiveIconSource=function(){"use strict";return this.$DataUsePolicySection2;};h.prototype.getDividerSource=function(){"use strict";return this.$DataUsePolicySection3;};h.prototype.getTitleText=function(){"use strict";return this.$DataUsePolicySection4;};h.prototype.getColor=function(){"use strict";return this.$DataUsePolicySection5;};h.prototype.getSubheadingElements=function(){"use strict";return this.$DataUsePolicySection6;};h.prototype.getSubheadingsText=function(){"use strict";return this.$DataUsePolicySection7;};h.prototype.getContentElement=function(){"use strict";return this.$DataUsePolicySection8;};f.exports=h;}),null);
__d('DUPLeftNavItem.react',['cx','CSS','DataUsePolicySection','DOMScroll','DUPLeftNavSublist.react','DUPLeftNavSublistItem.react','Image.react','Link.react','React','uniqueID'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$DUPLeftNavItem3=function(){if(this.props.expanded)return null;return c('React').createElement(c('Image.react'),{className:"_1tvy",src:this.props.section.getDividerSource(),alt:''});}.bind(this),this.$DUPLeftNavItem1=function(){if(this.props.expanded)return c('React').createElement(c('Image.react'),{className:"_q4w",src:this.props.section.getActiveIconSource(),alt:''});return c('React').createElement('span',null,c('React').createElement(c('Image.react'),{className:"_5-2",src:this.props.section.getIconSource(),alt:''}),c('React').createElement(c('Image.react'),{className:"_5-x",src:this.props.section.getActiveIconSource(),alt:''}));}.bind(this),this.$DUPLeftNavItem2=function(){var r=this.props.section.getSubheadingElements(),s=this.props.section.getSubheadingsText(),t=s.map(function(u,v){return c('React').createElement(c('DUPLeftNavSublistItem.react'),{key:v,onClick:this.$DUPLeftNavItem5.bind(this,r[v])},u);}.bind(this));return c('React').createElement(c('DUPLeftNavSublist.react'),{expanded:this.props.expanded,id:c('uniqueID')()},t);}.bind(this),this.$DUPLeftNavItem6=function(){return c('React').Children.count(this.$DUPLeftNavItem2().props.children)>0;}.bind(this),this.$DUPLeftNavItem4=function(){if(this.$DUPLeftNavItem6()&&!this.props.expanded)return;this.$DUPLeftNavItem5(this.props.section.getContentElement());}.bind(this),this.$DUPLeftNavItem5=function(r){c('DOMScroll').scrollTo(r,750,false,false,30,function(){c('CSS').addClass(r,"_5f0v");r.tabIndex=-1;r.focus();});},n;}l.prototype.render=function(){'use strict';var m=this.$DUPLeftNavItem1(),n=this.$DUPLeftNavItem2(),o=this.$DUPLeftNavItem3(),p="_b_1"+(this.props.expanded?' '+"_b_2":''),q=null,r=null;if(this.props.section.getSubheadingElements().length){q=this.props.expanded?'true':'false';if(n)r=n.props.id;}return c('React').createElement('div',{className:p},c('React').createElement('div',{className:"_1tvz",onClick:this.$DUPLeftNavItem4,role:'presentation'},c('React').createElement('div',{className:"_1tv-"},m,o),c('React').createElement(c('Link.react'),{className:"_1tv_",'aria-expanded':q,'aria-controls':r},this.props.section.getTitleText())),n);};l.propTypes={expanded:k.bool,section:k.instanceOf(c('DataUsePolicySection')).isRequired};f.exports=l;}),null);
__d('DUPLeftNav.react',['cx','DUPLeftNavItem.react','React'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l=-1;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.state={open:l},this.$DUPLeftNav1=function(s){return (s==='blue'?"_17it":'')+(s==='coral'?' '+"_17iu":'')+(s==='dark_blue'?' '+"_17iv":'')+(s==='pink'?' '+"_17iw":'')+(s==='red'?' '+"_17ix":'')+(s==='turquoise'?' '+"_17iy":'')+(s==='yellow'?' '+"_xps":'')+(s==='purple'?' '+"_3pg2":'');},this.$DUPLeftNav2=function(s){this.setState({open:s});}.bind(this),o;}m.prototype.render=function(){'use strict';var n=this.props.sections.map(function(o,p){return c('React').createElement('div',{className:this.$DUPLeftNav1(o.getColor()),key:p,onClick:this.$DUPLeftNav2.bind(this,p),role:'presentation'},c('React').createElement(c('DUPLeftNavItem.react'),{expanded:this.state.open===p,section:o}));},this);return c('React').createElement('div',null,n);};m.propTypes={sections:k.array};f.exports=m;}),null);