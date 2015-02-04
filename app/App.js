var React = require('react');
var ListContainer = require('./ListContainer');
var AddList = require('./AddList');

var App = React.createClass({
  getInitialState: function(){
    return {
      lists: []
    }
  },
  addNewList: function(newTitle){
    this.setState({
      lists: this.state.lists.concat([<ListContainer title={newTitle} key={newTitle}/>])
    })
  },
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <AddList add={this.addNewList} />
          {this.state.lists}
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)