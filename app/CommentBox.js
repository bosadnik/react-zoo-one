import React from 'react'
import CommentsList from './CommentsList'
import CommentsForm from './CommentsForm'

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

const CommentBox = React.createClass({
   
    render: function(){
        return (
            <div>
                <h1>Comments</h1>
                <CommentsForm/>
                <CommentsList data={data}/>
            </div>
        )
    }

});

export default CommentBox;