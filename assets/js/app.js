/**
 * Created by ron on 4/7/2015.
 */
var React = require('react'),
    Header = require('./header'),
    Posts = require('./posts'),
    App;

App = React.createClass({

    render: function() {
        return (
            <div>
                <Header />
                <div className="container content">
                    <Posts />
                </div>
            </div>
        );
    }
});

App.start = function() {
    React.render(<App />, document.getElementById('app'));
};

module.exports = window.App = App;