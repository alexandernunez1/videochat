const socket = io('/')


socket.emit('join-room', ROOM_ID, 13)