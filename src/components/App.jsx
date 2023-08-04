import { Component } from 'react';
import List from './List/List';
import Form from './Form/Form';
import Filter from './Filter/Filter'
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
STORAGE_KEY = "phonebook-data"
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    if (data) {
      this.setState({
        contacts: data
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state.contacts))
  }

  handleFromData = ({name, number,status}) => {
    const contact = {
      name,
      number,
      id: nanoid(),
      checked: false,
      status
    }
    this.setState(({ contacts }) => ({
     contacts: [contact, ...contacts]
    }))
  }

    handleFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
  }
  toggleChecbox = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.map(contact => {
        if (id === contact.id) {
          return {
            ...contact,
            checked: !contact.checked
          }     
        }
             return contact
      })
    }))
  }

      deleteAllContacts = () => {
    this.setState({
    contacts: []
        })
  }

  deleteChecked = () => {
    this.setState(({contacts}) => ({
    contacts: contacts.filter(contact => contact.checked !== true)
        }))
  }
  deleteContactById = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !==id)
    }))
  }
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter( contact => contact.name.toLowerCase().includes(normalizedFilter))
}

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts()
 return (
    <div>
     <Form onSubmit={this.handleFromData} />
     {filteredContacts.length >= 2 && <Filter onChange={this.handleFilter}
       value={filter} />}
     <List options={filteredContacts}
       onCheckbox={this.toggleChecbox}
       onClick={this.deleteContactById}
       
     />
     {filteredContacts.length >= 2 &&
     <div><button onClick={this.deleteAllContacts} type='button'>Delete all</button>
     <button onClick={this.deleteChecked} type='button'>Delete checked</button></div>}
    </div>
      );
  }
 
};
