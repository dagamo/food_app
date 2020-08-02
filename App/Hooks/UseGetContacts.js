import React, { useEffect, useState } from 'react';
import {PermissionsAndroid, Platform} from 'react-native'
import Contacts from 'react-native-contacts';

export const useGetContacts = (getContacts) => {
	const [ contacts, setContacts ] = useState([]);

	useEffect(
		() => { 
			if(Platform.OS === 'android'){
				getDeviceContactsAndroid()
			}else{
				getDeviceContactsIOS();
			}
		},[getContacts]
	);


  /**
   * This method is for get device contacts and process
   */


	 const getDeviceContactsAndroid = ()=>{
		PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
			{
				'title': 'Contacts',
				'message': 'This app would like to view your contacts.',
				'buttonPositive': 'Please accept bare mortal'
			}
		).then(() => {
			Contacts.getAll((err, contacts) => {
				if (err === 'denied'){
					// error
					console.log(err)
				} else {
					setContacts(contactsProcess(contacts));
				}
			})
		})
	 }

const getDeviceContactsIOS = () => {
		Contacts.checkPermission((err, permission) => {
			if (err) throw err;
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
							setContacts(contactsProcess(contacts));
						});
					} else {
						return false;
					}
				});
			}
			if (permission === 'authorized') {
				// yay!
				Contacts.getAll((err, contacts) => {
					if (err) {
						throw err;
					}
					setContacts(contactsProcess(contacts));
				});
			}
			if (permission === 'denied') {
				return false;
			}
		});
  };
  
  /**
   * 
   * @param {Array} contacts THis contacts receive for find all contacts of mobile type.
   */

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

  /**
   * Return the contact state
   */
  return {
    contacts,
    setContacts
  }
  

};
