/**
 * Created by ron on 4/7/2015.
 */
var React = require('react'),
    $ = require('jquery'),
    Item = require('./item');

var List = React.createClass({
    getInitialState: function() {
        return {posts: []};
    },

    componentWillMount: function() {
        this.fetchLatestNews();
    },

    fetchLatestNews: function() {
        $.ajax({
            url: 'http://api.ihackernews.com/page',
            dataType: 'jsonp',
            data: {format: 'jsonp'},
            success: function(result) {
                this.setState({posts: result.items});
            }.bind(this),
            error: function(err) {
                console.log('Error fetching latest news. ' + err.toString());
                alert('Error getting posts. Please try again later.');
            }.bind(this)
        });
    },

    render: function() {
        return (
            <ol className="posts">
                {this.state.posts.map(function(post) {
                    return <Item key={post.id} post={post} />
                })}
            </ol>
        );
    }
});

module.exports = List;