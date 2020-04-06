import React from 'react';
import ButtonGroup from './ButtonGroup'
import DogList from "./DogList";
import {getDogs, clearDogs} from "../actions/dogActions";
import {connect} from "react-redux";

class ClassComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {dogs: []};
    this.filterDogs = this.filterDogs.bind(this);
  }

  componentDidMount() {
    console.log("mount")
  }

  componentDidUpdate(prevProps) {
    console.log("update");
    if(prevProps.dogs !== this.props.dogs) {
      this.setState({dogs: this.props.dogs})
    }
  }

  filterDogs() {
    const copy = [...this.state.dogs];
    const filtered = copy.filter(c => c.startsWith("e"));
    this.setState({dogs: filtered});
  }
  render() {
    return (
      <div>
        <h2>CLASS</h2>
        <button onClick={this.filterDogs}>Filter</button>
        <ButtonGroup
          getDoggos={this.props.getDoggos}
          clearDoggos={this.props.clearDoggos}
        />
        <DogList
          dogs={this.state.dogs}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getDoggos: () => dispatch(getDogs()),
    clearDoggos: () => dispatch(clearDogs())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);
