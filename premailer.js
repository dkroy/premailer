(function(window){ "use strict";
    var
      VERSION = "0.0.2";
    
    //just encase premailer already exists
    var _premailer = window.premailer;
    
    _premailer = {
      transform : function(html, options){
        /*
          options.baseUrl
          options.queryString
        */
        console.log(options);
        return false;
      }
    };
    window.premailer = _premailer;
})(window);
