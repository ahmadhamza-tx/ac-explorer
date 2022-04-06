import consumer from "./consumer"
document.addEventListener('turbolinks:load',() => {

  const element =document.getElementById('room-id');
  const room_id=element.getAttribute('data-room-id');

  console.log("Before connection I am on Room id: " + room_id);

    consumer.subscriptions.create({channel: "RoomChannel", room_id}, {
  connected()  {
    console.log("Successfully connected to Room Channel_" + room_id)
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("OMG.. disconnected from Room_Channel_" + room_id);
  },

  received(data) {
    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});
})

