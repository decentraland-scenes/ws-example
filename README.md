# ws-example

A basic scene that uses a WebSockets server to sync changes between players. When a player clicks on a cube, all players see it turn green. The scene checks the player's realm and only syncs between players that are in the same realm, to keep things consistent between players that can see each other.

![](screenshot/screenshot.png)

The scene relies on a [broadcast websockets server](https://github.com/decentraland-scenes/ws-broadcast) that broadcasts all messages that are sent to it to all players.

## Try it out

**Install the CLI**

Download and install the Decentraland CLI by running the following command:

```bash
npm i -g decentraland
```

**Previewing the scene**

Download this example and navigate to the `scene` directory, then run:

```
$:  dcl start
```

Any dependencies are installed and then the CLI opens the scene in a new browser tab.

**Run the server**

By default, the scene relies on an already deployed server on that can be reached on `wss://64-225-45-232.nip.io/`

To instead run the server locally, on a separate command line window, navigate to the `server` directory and run the following command to install all the dependencies:

```
npm i
```

Once the dependencies are installed, run the following command to start the server:

```
npm run start
```

The server will then be listening on `localhost:8080`, you can redirect the scene to point to this address when connecting to the WS server.

```

socket = new WebSocket(
    'wss://localhost:8080/broadcast/' + realm.displayName
  )
```

**Scene Usage**

Click on the cubes to see them change color. If you open multiple tabs to the same preview, you should see that all tabs respond to the changes that other players do too. These messages are travelling via WebSockets.

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

If something doesn’t work, please [file an issue](https://github.com/decentraland-scenes/Awesome-Repository/issues/new).

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
