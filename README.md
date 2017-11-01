# Protect the King!

### Description

_Protect the King_ is an ambitious project that aims to create a fun, competitive game environment using web development technology.

The current version features functional player registration, player login, and multiplayer hosting.

## Wireframes

<details> 
<summary>Homepage</summary>
<img src="https://i.imgur.com/qTqaHHu.jpg" />
</details>

<details>
<summary>Register</summary>
<img src="https://i.imgur.com/B52WX9N.jpg" />
</details>

<details>
<summary>Login</summary>
<img src="https://i.imgur.com/cKgT85i.jpg" />
</details>

<details>
<summary>Idle</summary>
<br>
<img src="https://i.imgur.com/oNUt8WS.jpg" />
</details>

<details>
<summary>Game</summary>
<img src="https://i.imgur.com/CFsngQN.jpg" />
</details>

## User Story

<details>

<b>Initial use</b>

<ul>

<li>The client enters the URL for the app and reaches the homepage.</li>

<li>On the homepage, the client can either register for a new account or log in with an existing account.</li>

<li>On the register page, the client fills out and submits the form. They are directed to the idle page.</li>

<li>On the login page, the client fills out the form and submits the form. They are directed to the idle page.</li>

<li>(?) On the idle page, they can either chat with other clients that are also on the idle page. They can also set their avatar, view their profile, or log out.</li>

<li>When the client wishes to play, they can press the play button, which directs them to the game.</li>

</ul>

<b>Game</b>

<ul>

<li>Protect the King is a game that pits a team of players against one another.</li>

<li>Players choose either a knight character or an archer character upon loading the game screen and spawn such a character under their control.</li>

<li>It's a top-down game where players take their character and kill each other.</li>

<li>Each kill or death is recorded. Player progression is also recorded.</li>

<li>No win/loss condition.</li>

</ul>

<b>When that's all done</b>

<ul>

<li>Have a "protect your territory" scenario; spawn in your base, defend your king within the base.</li>

<li>Win by killing the enemy king within the enemy base.</li>

<li>Death means respawning within your own base. Bases are spread far apart.</li>

</ul>

</details>

## Databases

### Player

| id | username | password\_digest | nick | kills | deaths | k\_deaths | a\_deaths | knight | archer | k\_kills | a\_kills |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|||||||||knight(id)|archer(id)|||

### Knight

| id | hp | atk | def | spd | rng |
|:--:|:--:|:---:|:---:|:---:|:---:|

### Archer

| id | hp | atk | def | spd | rng |
|:--:|:--:|:---:|:---:|:---:|:---:|

### Teams

| player_id | team |
|:--:|:----:|
|player(id)||

## Requirements

- Set up server + databases.
- Set up the environment.
- Collisions for players, projectiles, environment object.

## Technologies

- `Express.js` package for setting up the server.
- `auth` and its modules for managing user accounts.
- `socket.io` to manage the multiplayer experience.

## Snippet

```

    let camX = 0;
    let camY = 0;

    if ((localPlayers[id].x >= (game.width/2)) && localPlayers[id].x < (room.width - (game.width/2))) {
        camX = localPlayers[id].x - game.width/2;
    } else if (localPlayers[id].x >= (room.width - (game.width/2))){
        camX = room.width - game.width;
    }
    if ((localPlayers[id].y >= (game.height/2)) && localPlayers[id].y < (room.height - (game.height/2))){
        camY = localPlayers[id].y - game.height/2;
    } else if (localPlayers[id].y >= (room.height - (game.height/2))){
        camY = room.height - game.height;
    }
  
    ctx.translate(-camX, -camY);

```

## Future features

- Collisions.
- Projectiles, damage.
- Death and kill tracking.
- Respawning.
- Leveling.
- The King.

## Instructions

1. Either download the .zip file from [this repository](https://github.com/danny-eng/wdi-u02-project) or fork/clone it.

2. Open Terminal and navigate to the new directory.

3. Run `npm install`.

4. Run `npm run dev`.

5. Open a browser and run `localhost:3000`.
