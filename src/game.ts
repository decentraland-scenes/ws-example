import { getCurrentRealm } from '@decentraland/EnvironmentAPI'
import { activate } from './switchMaterial'

let socket

joinSocketsServer()

export async function joinSocketsServer() {
  // fetch realm data to keep players in different realms separate
  let realm = await getCurrentRealm()
  log(`You are in the realm: `, realm.displayName)
  // connect to ws server
  socket = new WebSocket(
    'wss://64-225-45-232.nip.io/wsecho/' + realm.displayName
  )
  // listen for incoming ws messages
  socket.onmessage = function (event) {
    try {
      const parsed = JSON.parse(event.data)
      log(parsed)
      // activate cube referenced in message
      activate(cubes[parsed.cube])
    } catch (error) {
      log(error)
    }
  }
}

// list of all cubes
let cubes: Entity[] = []

// add cubes
for (let i = 0; i < 8; i++) {
  let cube = new Entity()
  cube.addComponent(
    new Transform({
      position: new Vector3(i * 2 + 1, 1, 4),
    })
  )
  cube.addComponent(new BoxShape())
  cube.addComponent(
    new OnPointerDown(
      (e) => {
        // send ws message when clicked
        socket.send(
          JSON.stringify({
            cube: i,
          })
        )
      },
      { button: ActionButton.POINTER, hoverText: 'Activate' }
    )
  )
  engine.addEntity(cube)

  cubes.push(cube)
}

// ground
let floor = new Entity()
floor.addComponent(new GLTFShape('models/FloorBaseGrass.glb'))
floor.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1.6, 0.1, 1.6),
  })
)
engine.addEntity(floor)
