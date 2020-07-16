# ws-example

A basic scene that uses a WebSockets server to sync changes between players. When a player clicks on a cube, all players see it turn green. The scene checks the player's realm and only syncs between players that are in the same realm, to keep things consistent between players that can see each other.

The scene relies on a generic broadcast websockets server that broadcasts all messages that are sent to it to all players.

The code for the server can be found in [this other repo](https://github.com/decentraland-scenes/ws-broadcast).

![](screenshot/screenshot.png)

## Running the scene

After you clone the project, run the following:

```
npm install
```

Followed by:

```
dcl start
```
