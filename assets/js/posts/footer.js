/**
 * Created by ron on 4/7/2015.
 */
var React = require('react');

var Footer = React.createClass({
    render: function() {
        console.log(this.props);
        var post = this.props.post;
        return (
            <small> points by {post.postedBy + ' ' + post.postedAgo} | {post.commentCount} {post.commentCount === 1 ? ' comment' : ' comments'}</small>
        );
    }
});

module.exports = Footer;