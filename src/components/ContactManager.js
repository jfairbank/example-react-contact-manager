import partial from 'lodash/function/partial';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../actions';

@connect(props => props)
export default class ContactManager extends React.Component {
  state = { localName: '' };

  updateName(e) {
    this.setState({
      localName: e.target.value
    });
  }

  addContact(dispatch) {
    const name = this.state.localName;

    if (!name) {
      return;
    }

    dispatch({ name });

    this.setState({ localName: '' });
  }

  render() {
    const { contacts, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <li key={contact._id}>
              <Link to={`/contact/${contact._id}`}>{contact.name}</Link>
            </li>
          ))}
        </ul>

        <br/><br/>

        <input
          type="text"
          onChange={::this.updateName}
          value={this.state.localName}/>

        <button onClick={partial(::this.addContact, actions.addContact)}>
          Add Contact
        </button>
      </div>
    );
  }
}
