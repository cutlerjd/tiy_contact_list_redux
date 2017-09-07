import React, { Component } from 'react'

class ContactListItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
                <h3>ContactListItem {this.props.user.name.first}</h3>	
                )
    }
}

export default ContactListItem