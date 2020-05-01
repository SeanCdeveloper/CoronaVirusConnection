const users = [];

const addUser = ({id,name,room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    /* Sets how a user cannot be in duplicate rooms, and multiple usernames cannot be accessed. 
    It also pushes all the current 'users' into a 'user' Array.  
    */
    const existingUser = users.find((user) => user.room === room && user.name === name);
    
    if(!name || !room) return {error: "Username and room are required."};
    if(existingUser) return {error: 'Username is taken.'};

    const user = {id,name,room};
    users.push(user);
    return {user};
}

/* Removing a user from the 'user' Array */
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if(index !== -1) {
        return users.splice(index,1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);
    
module.exports = {addUser,removeUser,getUser,getUsersInRoom};