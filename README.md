# Project REST-rant

REST-rant is an app where users can review restaurants.

***

## User Stories




- As a user clicks on `New Place`, they will redirect to the new place form page /places/new
- As a user submits the new place form, it will POST a new place object to our db

- As a user clicks on a place, it will take them to that place's page on `/places?index=id` using the place's mongo db ID


***

## Places data structure

We will include the following in our mock places data:

| Place Data | Data Type |
| ---------- | --------- |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |
| founded | Number |
| archived | Boolean |

***

## API / Routes:

| Route Type | Path | Purpose |
| ---------- | ------------------- | ------------------------------- |
| GET | `/` | Home page |
| GET | `/places` | Places index page |
| POST | `/places` | Create new place |
| GET | `/places/new` | Form page for creating a new place |
| GET | `/places?index=id[&json=userToken]` | Details about particular place |
| PUT | `/places?index=id` | Update a particular place |
| DELETE | `/places?index=id` | Delete a particular place |
| GET | `/places/edit?index=id` | Form page for editing an existing place |
| POST | `/places/rant?index=id` | Create a rant (comment) about a particular place |
| DELETE | `/places/rant?index=id&place=placeId` | Delete a rant (comment) about a particular place |
| GET | `*` | 404 Page |
| ---------- | ------------------- | ------------------------------- |
| GET | `/places/:id ***` | Details about particular place |

| Symbol | Purpose |
| ----- | ----- |
| ** | Not yet implemented |
| *** | Obsolete / deprecated |