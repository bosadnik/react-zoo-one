import React from 'react'


var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

let CommentsForm = React.createClass({
    render: ()=>{
        return(
            <div>
                FORM
            </div>
            )
    }
});

var Comment = React.createClass({
    render: function(){
        return(
            <div>
                Author:{this.props.author}, wrote:{this.props.children.toString()}
            </div>
        )
    }
})


let CommentsList = React.createClass({
    //  getDefaultProps:function(){
    //     return 
    //         {data: [
    //           {id: 1, author: "Pete Hunt", text: "This is one comment"},
    //           {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    //         ]}
                    
    // },
    render: function(){
        var coments = "";
        try{
           coments = this.props.data.map((item)=>{
            return(
                <Comment author={item.author}>{item.text}</Comment>
            )
        })
            
        }
        catch(e){
            console.log('no data:'+e.message);    
        }
        
        return(
            <div>
                {coments}
            </div>
            )
    }
});

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