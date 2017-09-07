import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import AccountIcon from 'material-ui/svg-icons/action/account-box';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Link} from 'react-router-dom'

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class ContactDetail extends Component {

    render() {
        console.log(this.props.user)
        return (
                <div>
                <AppBar
                title={"Contact Details - " + this.props.user.name.first.capitalize() + " " + this.props.user.name.last.capitalize()}
                iconElementLeft={<Link to="/"><IconButton><NavigationClose /></IconButton></Link>}
                />
                <Card>
                <CardMedia
                  overlay={<CardTitle title={this.props.user.name.first.capitalize() + " " + this.props.user.name.last.capitalize()} subtitle={this.props.user.email} />}
                >
                  <img src={this.props.user.picture.large} alt="" />
                </CardMedia>
                <List>
                <ListItem 
                primaryText={this.props.user.name.first.capitalize() + " " + this.props.user.name.last.capitalize()}
                leftIcon={<AccountIcon/>}
                />
                <ListItem
                primaryText={this.props.user.cell}
                leftIcon={<AccountIcon/>}
                />
                </List>
              </Card>
                </div>	
                )
    }
}
function mapStateToProps(appState, ownProps){
    console.log("user",{user: appState.users.filter(user => ownProps.match.params.id === user.login.username)})
    return {user: appState.users.filter(user => ownProps.match.params.id === user.login.username)[0]}
}
export default connect(mapStateToProps)(ContactDetail)