var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

const addContact = (data) => {
    let postData = data;

    if (data.services) {
        postData.services = data.services.join(", ");
    }

    base('Contact Requests').create([
        {
          "fields": postData
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return false;
        }
       
      });
      return true;
}

export default addContact;