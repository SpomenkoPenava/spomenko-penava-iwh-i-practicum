# Integrating With HubSpot I: Foundations Practicum

This repository is for the Integrating With HubSpot I: Foundations course. This practicum is one of two requirements for receiving your Integrating With HubSpot I: Foundations certification. You must also take the exam and receive a passing grade (at least 75%).

To read the full directions, please go to the [practicum instructions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en).

**HubSpot developer test account custom objects list URL:** https://app.hubspot.com/contacts/52068895/objects/2-70083405/views/all/list

___
## Tips:
- Commit to your repository often. Even if you make small tweaks to your code, it’s best to be committing to your repository frequently.
- The subject of the custom object is up to you. Feel free to get creative!
- Please create a test account and include your private app access token in your repo.
- Ensure you re-merge any working branches into the main branch.
- DO NOT ADD YOUR PRIVATE APP TOKEN TO YOUR REPOSITORY.

## Pre-requisites:
- Using [Node](https://nodejs.org/en/download) and node packages
- Using [Express](https://expressjs.com/en/starter/installing.html)
- Using [Axios](https://axios-http.com/docs/intro)
- Using [Pug templating system](https://pugjs.org/api/getting-started.html)
- Using the command line
- Using [Git and GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

## Requirements
- All work must be your own. During the grading process we will check the revision history. Submissions that do not meet this requirement will not be considered.
- You must have at least two new routes in your index.js file and one new pug template for the homepage.
- You must create a developer test account and link to it in your README.md file. Submissions that do not meet this requirement will not be considered.

## Local setup
1. Place a `.env` file in the **parent** directory of this `app/` folder (or alongside `index.js` if preferred) with:
   ```
   PRIVATE_APP_ACCESS_TOKEN=your_token_here
   ```
   The app loads that file via `dotenv` from `../.env`. Never commit `.env` or paste the token into source, README, or chat.
2. Install dependencies and start:
   ```
   npm install
   npm start
   ```
3. Open http://localhost:3000 — homepage lists Samples (`p52068895_samples`); `/update-cobj` creates a new record.

## Custom object
- Object: Samples (`p52068895_samples` / `2-70083405`)
- Properties: `name`, `sample_status`, `location`
- Portal: 52068895
