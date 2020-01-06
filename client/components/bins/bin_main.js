import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import BinEditor from "./bin_editor";

class BinMain extends Component {
    render() {
        return (
            <div>
                <BinEditor bin={this.props.bin}/>
            </div>
        )
    }
}

export default withTracker((props) => {
    const handle = Meteor.subscribe('bins');
    const binID = props.match.params.binID;

    return {
        loading: !handle.ready(),
        bin: Bins.findOne(binID)
    }
})(BinMain);