(function(){

  'use strict';

  App.Router.reopen({
    //location: 'history'
  });

  App.Router.map(function(){
    this.route('search', { path: '/'} );
  });

}());
