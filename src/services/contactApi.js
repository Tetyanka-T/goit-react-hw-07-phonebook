import axios from 'axios';

axios.defaults.baseURL = 'https://611647e08f38520017a387da.mockapi.io/api/v1/';

export class ContactsAPI {
  static async fetchContactsList() {
    const { data } = await axios.get('/contacts');

    return data;
  }

  static async createContact(contact) {
    const { data } = await axios.post('/contacts', contact);

    return data;
  }

  static async deleteContact(id) {
    await axios.delete(`/contacts/${id}`);
  }
}
