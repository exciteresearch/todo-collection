var React = require('react');

var AddList = React.createClass({
  getInitialState: function(){
    return {
      listName: ''
    }
  },
  handleChange: function(e){
    this.setState({
      listName: e.target.value
    });
  },
  handleSubmit: function(e){
    if(e.keyCode === 13){
      this.props.add(this.state.listName);
      this.setState({
        listName: ''
      })
    }
  },
  render: function(){
    return (
      <div className="col-sm-6">
        <h3 className="text-center"> Create New List </h3>
        <input type="text" placeholder="List Name" className="form-control" value={this.state.listName} onKeyDown={this.handleSubmit} onChange={this.handleChange} />
      </div>
    )
  }
});

module.exports = AddList;