# Project REST-rant

REST-rant is an app where users can review restaurants.

***

## User Stories

- As a user clicks on `New Place`, they will redirect to the new place form page /places/new
- As a user submits the new place form, it will POST a new place object to our mock db
- As a user clicks on a place, it will take them to that place's page on `/places/:id` using the place's id

***

## Places data

We will include the following in our mock places data:

| Place Data | Data Type |
| ---------- | --------- |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

***

## API / Routes:

| Route Type | Path | Purpose |
| ---------- | ------------------- | ------------------------------- |
| GET | `/` | Home page |
| GET | `/place` | Places index page |
| POST | `/place` | Create new place |
| GET | `/places/new` | Form page for creating a new place |
| GET | `/places/:id` | Details about particular place |
| PUT | `/places/:id` | Update a particular place |
| GET | `/places/:id/edit` | Form page for editing an existing place |
| DELETE | `/places/:id` | Delete a particular place |
| POST | `/places/:id/rant` | Create a rant (comment) about a particular place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place |
| GET | `*` | 404 Page |