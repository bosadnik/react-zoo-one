import React from 'react'

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
    getDefaultProps:function(){
        return {dataa:[
              {id: 1, author: "Pete Hunt", text: "This is one comment"},
              {id: 2, author: "Jordan Walke", text: "This is *another* one comment"}
            ]}
    },
    //  getDefaultProps:function(){
    //     return 
    //         {data: [
    //           {id: 1, author: "Pete Hunt", text: "This is one comment"},
    //           {id: 2, author: "Jordan Walke", text: "This is *another* one comment"}
    //         ]}
                    
    // },
    render: function(){
        var coments = "";
        try{
           coments = this.props.dataa.map((item)=>{
            return(
                <Comment author={item.author}>{item.text}</Comment>
            )
        })
            
        }
        catch(e){
            console.log('no data:'+e.message);    
        }
        
        return(
            <div>{this.props.test}
                {coments}
            </div>
            )
    }
});

export default CommentsList