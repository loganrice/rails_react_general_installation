var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
     $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data:data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
          <Comment author={comment.author}>
            {comment.comment}
          </Comment>
      );
    });

    return (
        <div className="commentList">
          {commentNodes}
        </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
        <div className="commentList">
          Hello, world. I am a comment form
        </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
    );
  }
});

$(document).ready(function() {
  React.render(
    <CommentBox url="comments.json" pollInterval={2000} />, 
    document.getElementById("content")
  );
});
