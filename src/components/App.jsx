import { Component } from 'react';
import List from './List/List';
import Form from './Form/Form';
import Filter from './Filter/Filter'
import { nanoid } from 'nanoid';
// import { options } from './ColorPicker/options';
import ColorPicker from './ColorPicker/ColorPicker';
import ColorPickerForm from './ColorPickerFrom/ColorPickerForm';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    options: [
    { label: 'red', color: '#f44336', id: 1},
    { label: 'green', color: '#4caf50', id: 2},
    { label: 'blue', color: '#2196f3', id: 3},
    { label: 'grey', color: '#607d88', id: 4},
    { label: 'pink', color: '#e91e63', id: 5},
    { label: 'indigo', color: '#3f51b5', id: 6},
    ],
    id: '',
    label: '',
      }
  STORAGE_PHONE_KEY = "phonebook-data"
  STORAGE_COLOR_KEY = "color-picker-data"
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem(this.STORAGE_PHONE_KEY));
    const colorData = JSON.parse(localStorage.getItem(this.STORAGE_COLOR_KEY));
    if (data) {
      this.setState({
        contacts: data
      })
    }
     if (colorData) {
      this.setState({
        options: colorData
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(this.STORAGE_PHONE_KEY, JSON.stringify(this.state.contacts));
     localStorage.setItem(this.STORAGE_COLOR_KEY, JSON.stringify(this.state.options))
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
  
  onColorSubmit = ({ label, color }) => {
    const { options } = this.state;
    if (options.find(option => option.label.includes(label)) ) {
     return alert('Такий колір вже є')
   }
    const option = {
      label,
      color,
      id: nanoid()
    }
    this.setState( ({options})=> ({
      options: [...options, option],
      label: "",
    }))
      }
  
  handleColorDelete = id => {
         this.setState(({ options }) => ({
           options: options.filter(option => option.id !== id),
           label: ""
    }))

     }

  handleActiveColor = (id, label) => {
    this.setState({ id, })
    this.setState(prevState => ({
      label: prevState.label !== label ? label : "" 
    }))
    console.log(this.state.label)
    }

  render() {
    const { filter,options,id, label } = this.state;
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
     <ColorPickerForm onSubmit={this.onColorSubmit} />
     <ColorPicker onClick={this.handleActiveColor}  options={options}  label={label}  />
     {options.length > 0 &&
       <button
         type='button'
         onClick={() => this.handleColorDelete(id)}
         disabled={label ? false : true}
       >DeleteColor</button>}
    </div>
      );
  }
 
};
