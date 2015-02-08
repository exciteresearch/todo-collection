var React = require('react');
var ListContainer = require('./ListContainer');
var AddList = require('./AddList');

var App = React.createClass({
  getInitialState: function(){
    return {
      lists: []
    }
  },
  addNewList: function(title){
    this.setState({
      lists: this.state.lists.concat([{newTitle: title, index: this.state.lists.length}])
    })
  },
  handleRemoveList: function(index){
    var tempList = this.state.lists;
    tempList.splice(index, 1);
    this.setState({
      lists: tempList
    })
  },
  render: function(){
    var componentList = this.state.lists.map(function(item, index){
      return <ListContainer title={item.newTitle} key={item.index} index={index} remove={this.handleRemoveList} />
    }.bind(this));
    return (
      <div className="container">
        <div className="row">
          <AddList add={this.addNewList} />
          {componentList}
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)