import findWhere from 'lodash/collection/findWhere';
import React from 'react';
import { connect } from 'react-redux';

function renderNoContact() {
  return (
    <div>Contact Not Found</div>
  );
}

function ContactDetail({ contactProps: { contacts }, params }) {
  const contact = findWhere(contacts, {
    _id: parseInt(params.contactId, 10)
  });

  if (!contact) {
    return renderNoContact();
  }

  return (
    <div>
      <h2>{contact.name}</h2>
    </div>
  );
}

export default connect(contactProps => ({ contactProps }))(ContactDetail);
