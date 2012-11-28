// Generated by CoffeeScript 1.4.0
/*jshint devel:true
*/

/*global Backbone:true, $:true
*/

var SpyreAppView;

SpyreAppView = Backbone.View.extend({
  el: $('#app-container'),
  events: {
    "push": "is_pushed"
  },
  initialize: function() {
    var barTabView, self;
    self = this;
    barTabView = new window.BarTabView();
    this.getLocation();
    return this;
  },
  getLocation: function() {
    var gotLocation, noLocation, self;
    self = this;
    gotLocation = function(geo) {
      return self.model.set('geo', geo);
    };
    noLocation = function(msg) {
      return window.alert(msg);
    };
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(gotLocation, noLocation);
    } else {
      noLocation("not supported");
    }
    return this;
  },
  is_pushed: function() {
    if (window.location.pathname.match('/stats')) {
      this.buildMap();
    }
    return this;
  },
  buildMap: function() {
    var geo, map, pos;
    geo = this.model.get('geo');
    if (geo && geo.coords && geo.coords.latitude) {
      pos = geo.coords;
      map = L.map('map').setView([pos.latitude, pos.longitude], 14);
      L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
        key: '21c7e179d9f542658c51686febf6ae90',
        styleId: 79170,
        maxZoom: 18
      }).addTo(map);
    }
    return this;
  }
});