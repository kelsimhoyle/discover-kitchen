import Airtable from "airtable";

var base = new Airtable({apiKey: process.env.GATSBY_AIRTABLE_API_KEY}).base(process.env.GATSBY_AIRTABLE_BASE_ID);

const addContact = (data) => {
    let postData = data;

    if (data.services) {
        postData.services = data.services.join(", ");
    } else {
      data.services = "";
    }

    base('Contact Requests').create([
        {
          "fields": postData
        }
      ], function(err, records) {
        console.log(records)
        if (err) {
          console.error(err);
          return false;
        }
       
      });
      return true;
}

export default addContact;