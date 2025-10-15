// backend/api/submit-contact-form.js

require('dotenv').config();
const axios = require('axios');

module.exports = async (req, res) => {
  // We only accept POST requests for security
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { fullName, email, message } = req.body;

  // Basic validation to ensure required fields are present
  if (!fullName || !email || !message) {
    return res.status(400).json({ message: 'Missing required form fields.' });
  }

  // Split full name into first and last name for GHL
  const [firstName, ...lastNameParts] = fullName.split(' ');
  const lastName = lastNameParts.join(' ');

  try {
    // The GHL API endpoint to create or update a contact
    const ghlApiUrl = `https://rest.gohighlevel.com/v1/contacts/`;
    
    // The contact payload to be sent to GHL
    const contactData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      // You can add custom fields here. The 'message' can be a custom field in GHL.
      customFields: [
        {
          key: 'message', // You need to create a custom field in GHL with this key
          field_value: message
        }
      ],
      tags: ['brightpath-website-contact-form'] // Add a tag for easy segmentation in GHL
    };

    const response = await axios.post(ghlApiUrl, contactData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GHL_API_KEY}` // Use your GHL API key
      }
    });

    if (response.status === 200 || response.status === 201) {
      console.log('Contact created successfully in GHL.');
      // A successful response from GHL means a new lead was created or updated.
      res.status(200).json({ success: true, message: 'Form submitted successfully!' });
    } else {
      console.error('Failed to create contact in GHL:', response.data);
      res.status(500).json({ success: false, message: 'Failed to submit form.' });
    }
  } catch (error) {
    console.error('API call error:', error.response ? error.response.data : error.message);
    res.status(500).json({ success: false, message: 'An internal server error occurred.' });
  }
};