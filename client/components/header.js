import React, {Component} from 'react';
import Accounts from "./accounts";
import { Link, withRouter} from 'react-router-dom';

class Header extends Component {
    onBinClick(event){
        event.preventDefault();

        Meteor.call('bins.insert', (error, binID) => {
            this.props.history.push(`/bins/${binID}`);
        })
    }

    render() {
        return(
          <nav className="nav navbar-default">
              <div className="navbar-header">
                  <Link className="navbar-brand" to='/'>MDBin</Link>
              </div>
              <ul className="nav navbar-nav">
                  <li>
                      <Accounts/>
                  </li>
                  <li>
                      <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                  </li>
              </ul>
          </nav>
        );
    }
}

export default withRouter(Header);