import React, { Component } from 'react'
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {withRouter} from 'react-router-dom'


class ContactListItem extends Component {
    goToContact = (e) => (
        this.props.history.push("/contact/" + this.props.user.login.username)
    )

    render() {
        return (
                <ListItem className="names"
                primaryText={this.props.user.name.first + " " + this.props.user.name.last}
                leftAvatar={<Avatar src={this.props.user.picture.thumbnail}
                />}
                onClick={this.goToContact}
                />
                )
    }
}

export default withRouter(ContactListItem)