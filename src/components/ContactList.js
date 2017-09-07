import React, { Component } from 'react'
import ContactListItem from './ContactListItem'
import { connect } from 'react-redux'

class ContactList extends Component {
    render() {
        return (
                <div>
                <h2>List</h2>
                {this.props.users.map(user => <ContactListItem key={user.login.username} user={user}/>)}
                </div>	
                )
    }
}
function mapStateToProps(appState){
    return {users:appState.users}
}
export default connect(mapStateToProps)(ContactList)