import React, { Component } from 'react';
import Treespace from "./Treespace"
import {connect} from "react-redux"
import Box from '@material-ui/core/Box';
import {treeSpaceFrom} from "../Actions/treespace"

class TreespaceContainer extends Component {

    
    state = {
        FullName: "",
        Contact:"",
        AreaForTrees:""
    }

submitForm = (event) => {
event.preventDefault()
this.props.dispatch(treeSpaceFrom(this.state))
}

onChange = (event, name) => {
    this.setState({
        ...this.state,
        [name]: event.target.value
    })
}


    render() {

        return (
            <Box
            color="text.primary"
            p={2}
            position="absolute"
            top="90%"
            right="0.5%"
            zIndex="modal"
          >
              <Treespace 
                handleSubmit ={this.submitForm}
                onChange={this.onChange}
                FullName={this.state.FullName}
                Contact={this.state.Contact}
                AreaForTrees={this.state.AreaForTrees}
                treespace={this.props.treespace}
              />
          </Box>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        treespace: reduxState.treespace


    }


}

export default connect(mapStateToProps)(TreespaceContainer);