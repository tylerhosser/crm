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

  export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  };

  export const getContactWithID = (req,res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  };

  export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  };

  export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted contact'});
    });
  };
