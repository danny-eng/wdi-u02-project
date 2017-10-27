# Protect the King!

## Wireframes

### Homepage

![Homepage](https://i.imgur.com/qTqaHHu.jpg "Homepage")

### Register

![Register](https://i.imgur.com/B52WX9N.jpg "Register")

### Login

![Login](https://i.imgur.com/cKgT85i.jpg "Login screen")

### Idle

![Idle](https://i.imgur.com/oNUt8WS.jpg "Idle")

### Game
![Game](https://i.imgur.com/CFsngQN.jpg "Game")

## User Story

### Initial use

1. The client enters the URL for the app and reaches the homepage.

2. On the homepage, the client can either register for a new account or log in with an existing account.

3. On the register page, the client fills out and submits the form. They are directed to the idle page.

4. On the login page, the client fills out the form and submits the form. They are directed to the idle page.

5. (?) On the idle page, they can either chat with other clients that are also on the idle page. They can also set their avatar, view their profile, or log out.

6. When the client wishes to play, they can press the play button, which directs them to the game.

### Game

1. Protect the King is a game that pits a team of players against one another.

2. Players choose either a knight character or an archer character upon loading the game screen and spawn such a character under their control.

3. It's a top-down game where players take their character and kill each other.

4. Each kill or death is recorded. Player progression is also recorded.

5. No win/loss condition.

### When that's all done

6. Have a "protect your territory" scenario; spawn in your base, defend your king within the base.

7. Win by killing the enemy king within the enemy base.

8. Death means respawning within your own base. Bases are spread far apart.

## Databases

### Player

| id | username | password\_digest | nick | kills | deaths | k\_deaths | a\_deaths | knight | archer | cur\_team |
|:--:|:--------:|:----------------:|:----:|:-----:|:------:|:---------:|:---------:|:------:|:------:|:---------:|
|||||||||knight(id)|archer(id)|team(id)|

### Knight

| id | hp | atk | def | spd | rng |
|:--:|:--:|:---:|:---:|:---:|:---:|

### Archer

| id | hp | atk | def | spd | rng |
|:--:|:--:|:---:|:---:|:---:|:---:|

### Teams

| id | team |
|:--:|:----:|

## Requirements

- Set up server + databases.
- Set up the environment.
- Collisions for players, projectiles, environment object.
