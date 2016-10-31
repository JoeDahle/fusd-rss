import React from 'react';
import ReactDOM from 'react-dom';

import FeedComponent from './FeedComponent';

var App = React.createClass({
  render: function(){
    return (
      <main className="App_main">
        <div className="App_main-feed-component">
          {<FeedComponent />}
        </div>
      </main>
    )
  }
});

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
