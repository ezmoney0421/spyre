// Generated by CoffeeScript 1.3.3
/*jshint devel:true
*//*global Backbone:true, $:true
*/var AppView,_this=this;AppView=Backbone.View.extend({el:$("#app-container"),initialize:function(){var e;e=new window.BarTabView;window.addEventListener("push",this.pushedTo);this.getLocation();return this},getLocation:function(){var e,t,n;n=this;e=function(e){return n.model.set("loc",e)};t=function(e){return window.alert(e)};return navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(e,t):t("not supported")},pushedTo:function(){console.log(_this.model);return _this}});