import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  // state = { greetings: "hello", name: "Qasim", job: "Developer" };
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };
  //get Data - run when DOM rendered
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms, 
      featuredRooms, 
      sortedRooms:rooms,
      loading:false
    });
    // console.log(RoomContext);
  }

// Getting data through this method from data.js file and save it to rooms variable
formatData(items){
let tempItems = items.map(item => {
  let id = item.sys.id;
  let images = item.fields.images.map(image => image.fields.file.url);
  let room = {...item.fields, images, id};
  return room;
});
return tempItems;
}

// SingleRoom FUnctionality
// getRoom takes an argument by the name of slug from room component
getRoom = (slug) =>{
  // getting rooms data in tempRooms
  let tempRooms = [...this.state.rooms]
  // getting room that matches slug pass from room component 
  const room = tempRooms.find((room)=>room.slug === slug)
  return room;
}


  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {/* Because we want to access whole component tree so we use children */}
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
