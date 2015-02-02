# Arpeggio

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Minimum Viable Product
Arpeggio is a clone of SoundCloud built on Rails and Backbone. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Upload songs
- [ ] Tag songs
- [ ] View artists and songs
- [ ] Subscribe to artists
- [ ] View a stream of subscribed artists
- [ ] Search for artists
- [ ] Search for songs by title
- [ ] Search for songs by tag

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication & JSON API (~1 day)
I will implement user authentication in Rails based on learned practices at App
Academy. Users will be able to sign up and create and end sessions by the end of
this phase. I will also implement the API routes to serve song data
as JSON. Finally, I'll be pushing the app to Heroku and will make sure
that all parts are working before moving on.

[Details][phase-one]

### Phase 2: Song Storage and First Backbone Views (~2 days)
I will add the Backbone models and collections that fetch data from the
previously defined routes. By the end of this
phase, there will be Backbone views for uploading new songs and showing songs.

[Details][phase-two]

### Phase 3: Editing and Playing Songs (~1 days)
In this phase I will begin to work with third-party libraries for handling
song media file uploads and playing. I plan on incorporating the FilePicker
library for file upload and the JPlayer library for playing songs.

[Details][phase-three]

### Phase 4: User Streams (~1-2 days)

For this phase I'll create a `stream` route that uses the `current_user`'s
`followed_artists` association to serve a list of artist's songs ordered
chronologically. On the Backbone side, I'll make a `Stream` collection that
fetches from the new route, then create a `StreamShow` view that uses the new
collection. This will be the page the user is shown after logging in.

[Details][phase-four]

### Phase 5: Searching for Artists and Songs (~2 days)
I'll need a `search` route that accepts a query in the params. Two queries will
be run: one to find artists where the `username` matches the search term,
and another to find songs where the `title` matches the search.
In Backbone, a `SearchResults` view that will display both matched artists and
matched songs will be implemented. These will be separated into two columns and
will be a composite view.

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
