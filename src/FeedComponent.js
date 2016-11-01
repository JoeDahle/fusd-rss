import React from 'react';

import style from './sass/feed.scss';

let location = document.location.protocol + '//fusdaz.parentlink.net';
let o = 6423;

var FeedComponent = React.createClass({
  rssCallback: function(){
      let src = 'https://fusdaz.parentlink.net/static/base/rss/widget/scripts.js';
      fetch(src, {
        mode: 'no-cors'
      })
          .then(function(response){
            return response;
          })
          .then(function(myblob){
            console.log(myblob);
          })
      // s.parentNode.insertBefore(pl, s)
  },

  render: function(){
    return (
      <div className="feed_component-container">
        <h1 className="feed_component-header">FUSD Emergency Notices</h1>
        <hr></hr>
        {this.rssCallback()}
      </div>
    );
  }
});

export default FeedComponent;
