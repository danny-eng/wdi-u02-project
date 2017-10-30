

# Notes

For personal use.

## The Problem

The problem so far: the layout of the website is completely different from the sites we've done so far.

Which means, the model/views/controller setup is arranged differently as well!

- The model communicates directly with the database. We've got a few tables, but only one we adjust frequently enough to warrent a model file. And that's the `player` table! The `Player.js` model file should have enough for full CRUD!

- The CRUD functionality seems a bit different, too. Here's how it works: CREATE a new player; READ the player's data; UPDATE the player's data; and DELETE the player.

- CREATE player comes from the register screen.

- READ player comes from initiating the game.

- UPDATE player comes from interacting with the game.

- DELETE player comes from a special deletion request.

- Since we have only one model file, we have only one controller! I think.
