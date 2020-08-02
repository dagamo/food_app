
  import Contacts from 'react-native-contacts';
  
  export const getDeviceContacts = () => {
		Contacts.checkPermission((err, permission) => {

			if (err) throw err;
			console.log('permission', permission)
			// Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
			if (permission === 'undefined') {
				Contacts.requestPermission((err, permission) => {
					// ...
					if (permission === 'authorized') {
						// yay!
						Contacts.getAll((err, contacts) => {
							if (err) {
								throw err;
							}
						return contactsProcess(contacts);
							// setContacts({ allContacts: contacts, contactsSelected: [] });
						});
					}else{
            return false
          }
				});
			}
			if (permission === 'authorized') {
				// yay!
				Contacts.getAll((err, contacts) => {
					if (err) {
						throw err;
					}
				return contactsProcess(contacts);
					// setContacts({ allContacts: contacts, contactsSelected: [] });
				});
			}
			if (permission === 'denied') {
          return false
			}
		})
  };
  
  const contactsProcess = (contacts) => {
		let newContacts = contacts.filter((contact) => {
			let phones = contact.phoneNumbers.filter((phone) => phone.label === 'mobile');
			if (phones.length !== 0) {
				return contact;
			}
		});

		newContacts = newContacts.map((c) => ({ ...c, checked: false }));
		return [ ...newContacts ];
	};