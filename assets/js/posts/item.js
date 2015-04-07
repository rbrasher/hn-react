/**
 * Created by ron on 4/7/2015.
 */
var React = require('react'),
    Footer = require('./footer');

var Item = React.createClass({
    render: function() {
        var post = this.props.post;
        return (
            <li>
                <a href={post.url}>{post.title}</a>
                <Footer post={post} />
            </li>
        );
    }

});

module.exports = Item;