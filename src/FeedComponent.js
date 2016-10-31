import React from 'react';

import style from './sass/feed.scss';

var FeedComponent = React.createClass({
  render: function(){
    return (
      <div className="feed_component-container">
        <h1 className="feed_component-header">FUSD Emergency Notices</h1>
        <hr></hr>
        <div className="feed_component-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
});

export default FeedComponent;
