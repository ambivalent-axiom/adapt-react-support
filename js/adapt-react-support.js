define([
    'core/js/adapt'
  ], function(Adapt) {
  
    var ReactSupport = Backbone.Controller.extend({
  
      initialize: function() {
        this.loadReactLibraries();
      },
  
      loadReactLibraries: function() {
        // Load React and ReactDOM from the vendor directory
        var scriptPath = 'extensions/adapt-react-support/js/vendor/';
        
        var loadScript = function(src) {
          return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        };
  
        // Load React first, then ReactDOM
        loadScript(scriptPath + 'react.production.min.js')
          .then(function() {
            return loadScript(scriptPath + 'react-dom.production.min.js');
          })
          .then(function() {
            Adapt.trigger('reactSupport:ready');
          })
          .catch(function(error) {
            console.error('Error loading React:', error);
          });
      }
    });
  
    Adapt.reactSupport = new ReactSupport();
  });