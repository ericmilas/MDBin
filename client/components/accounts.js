import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

class Accounts extends Component{
    componentDidMount() {
        //Render the blaze accounts form then find the div we just rendered in the 'render' method and place the Blaze
        //accounts form in that div.  this.view is a reference to the rendered component, we hang on to it so we can
        //clean it up later.
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        //Go find the forms we created and destroy them, we need to clean them up ourselves because they are blaze
        //components and we are using React
        Blaze.remove(this.view);
    }

    render(){
        return(
            <div ref="container"></div>
        )
    }
}

export default Accounts;