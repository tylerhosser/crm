import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    let newContact = new Contact(req.body);
    try {
      const saveContact = await newContact.save();
      res.json(saveContact);
    } catch (err) {
      res.send(err);
    }
  };

  export const getContacts = (req,res) => {
    Contact.find()
    .then((find)=>{
      res.json(contact);
    })
    .catch((err)=>{
      res.send(err) 
    })
  };