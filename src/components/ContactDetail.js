import React, { Component } from 'react'

class ContactDetail extends Component {
    render() {
        return (
                <div>Contact Detail {this.props.match.params.id}</div>	
                )
    }
}

export default ContactDetail