import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import {Link} from 'react-router-dom';

class BinList extends Component {
    onBinRemove(bin){
        Meteor.call('bins.remove', bin);
    }

    renderList() {
        return this.props.bins.map(bin => {
            const url = `/bins/${bin._id}`; //ES6 syntax that, uses backquotes, this is equivilent to standard string concatenation

            return (
                <li className="list-group-item" key={bin._id}>
                    <Link to={url}>Bin {bin._id}</Link>
                    <span className="pull-right">
                        <button className="btn-danger" onClick={() =>{this.onBinRemove(bin)}}>
                            Remove
                        </button>
                    </span>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}

export default withTracker(props => {
    const handle = Meteor.subscribe('bins');

    return {
        loadng: !handle.ready(),
        bins: Bins.find({}).fetch()
    }
})(BinList);