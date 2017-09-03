import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    render() {
        return (
            <div className="App-menu">
                {!this.state.open && <FlatButton
                    icon={< FontIcon className = "fa fa-bars" />}
                    onClick={this.handleToggle}/>}
                <Drawer
                    containerClassName={"slide-in-menu"}
                    width={"100%"}
                    openSecondary={true}
                    open={this.state.open}>
                    <FlatButton
                        className={"close-button"}
                        icon={< FontIcon className = "fa fa-times" />}
                        onClick={this.handleToggle}/>
                    <div className="profile-picture">
                        <Avatar size={50} src="/img/beppe_s.png" />
                    </div>
                    <div className="menu-content">
                        <FlatButton 
                            fullWidth={true}
                            icon={< FontIcon className = "fa fa-home" />}
                            className="menu-item" 
                            label="Home" />
                        <FlatButton 
                            fullWidth={true}
                            icon={< FontIcon className = "fa fa-code" />}
                            className="menu-item" 
                            label="Code" />
                        <FlatButton 
                            fullWidth={true}
                            icon={< FontIcon className = "fa fa-camera-retro" />}
                            className="menu-item" 
                            label="Photography" />
                        <FlatButton 
                            fullWidth={true}
                            icon={< FontIcon className = "fa fa-book" />}
                            className="menu-item" 
                            label="Writing" />
                        <FlatButton 
                            fullWidth={true}
                            icon={< FontIcon className = "fa fa-info-circle" />}
                            className="menu-item" 
                            label="About" />
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Menu;