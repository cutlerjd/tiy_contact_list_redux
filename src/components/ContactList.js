import React, { Component } from 'react'
import ContactListItem from './ContactListItem'
import { connect } from 'react-redux'
import { List } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';

class ContactList extends Component {
    render() {
        return (
            <div>
                <AppBar title="Contact List" />
                <List>
                    {this.props.users.map(user => <ContactListItem key={user.login.username} user={user} />)}
                </List>
            </div>
        )
    }
}
function mapStateToProps(appState) {
    return { users: appState.users }
}
export default connect(mapStateToProps)(ContactList)