require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Private app token loaded from parent .env via dotenv — never hardcode in source.
const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_ACCESS_TOKEN;
const OBJECT_TYPE = 'p52068895_samples';
const CUSTOM_PROPERTIES = ['name', 'sample_status', 'location'];

function hubspotHeaders() {
    return {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };
}

// ROUTE 1 — Homepage: fetch custom object records and render as HTML table
app.get('/', async (req, res) => {
    const url = `https://api.hubapi.com/crm/v3/objects/${OBJECT_TYPE}`;
    const params = {
        properties: CUSTOM_PROPERTIES.join(','),
        limit: 100
    };
    try {
        const resp = await axios.get(url, { headers: hubspotHeaders(), params });
        const data = resp.data.results;
        res.render('homepage', {
            title: 'Samples | Integrating With HubSpot I Practicum',
            data
        });
    } catch (error) {
        console.error('Error fetching custom objects:', error.response?.status, error.response?.data || error.message);
        res.status(500).send('Error fetching custom object records');
    }
});

// ROUTE 2 — Form page to create a new custom object record
app.get('/update-cobj', (req, res) => {
    res.render('updates', {
        title: 'Update Custom Object Form | Integrating With HubSpot I Practicum'
    });
});

// ROUTE 3 — Create custom object record from form, then redirect home
app.post('/update-cobj', async (req, res) => {
    const createUrl = `https://api.hubapi.com/crm/v3/objects/${OBJECT_TYPE}`;
    const newRecord = {
        properties: {
            name: req.body.name,
            sample_status: req.body.sample_status,
            location: req.body.location
        }
    };
    try {
        await axios.post(createUrl, newRecord, { headers: hubspotHeaders() });
        res.redirect('/');
    } catch (error) {
        console.error('Error creating custom object:', error.response?.status, error.response?.data || error.message);
        res.status(500).send('Error creating custom object record');
    }
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));
