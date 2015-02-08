# Arpeggio

[Heroku link][heroku]

[heroku]: http://www.arpeggio.xyz

## Minimum Viable Product
Arpeggio is a clone of SoundCloud built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [ ] Upload songs
- [ ] Tag songs
- [x] View artists and songs
- [ ] Subscribe to artists
- [x] View a stream of subscribed artists
- [ ] Search for artists
- [ ] Search for songs by title
- [ ] Search for songs by tag

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication & JSON API (~1-2 day)
I will implement user authentication in Rails based on learned practices at App
Academy. Users will be able to sign up and create and end sessions by the end of
this phase. I will also implement the API routes to serve song data as JSON.
Finally, I'll be pushing the app to Heroku and will make sure that all parts are
working before moving on.

[Details][phase-one]

### Phase 2: Song Storage and First Backbone Views (~2 days)
I will add the Backbone models and collections that fetch data from the
previously defined routes. I will also create a following controller that will
be used for displaying followed user's songs in the stream. By the end of this
phase, there will be Backbone views for uploading new songs, showing songs, and
showing artists.

[Details][phase-two]

### Phase 3: Third-Party Libraries & Playing Songs (~1 days)
In this phase I will begin to work with third-party libraries for handling song
media file uploads and playing songs. I plan on incorporating the FilePicker
library for file upload and the JPlayer library for playing songs.

[Details][phase-three]

### Phase 4: User Streams (~1-2 days)

For this phase I'll create a `stream` route that uses the `current_user`'s
`followed_artists` association to serve a list of artist's songs. Then, within
Backbone, I'll also make a `Stream` collection that fetches from the new route,
then create a `StreamShow` view that uses the new collection. This will be the
page the user is shown after logging in.

[Details][phase-four]

### Phase 5: Searching for Artists and Songs (~2 days)
I'll need a `search` controller and a `search` class. An instance of the class
will take the query as a parameter and will perform two queries:

1. Find artists where the `username` matches the search
2. Find songs where the `title` matches the search

The class will then return an object containing the results. In Backbone, a
`SearchResults` view that will display both matched artists and matched songs
will be implemented. These will be separated into two columns and will be a
composite view.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Comments for songs and artists
- [ ] Number of plays for songs
- [ ] Support for multiple open sessions
- [ ] User playlists
- [ ] Notifications system
- [ ] Search based on tags

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
