import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "../components/Loading";
import Room from "./Room";
import Title from "./Title";
import { Link } from "react-router-dom";

class FeaturedRooms extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  static contextType = RoomContext;

  render() {
    // const value = this.context;
    // const { greetings, name, job } = this.context;
    let { loading, featuredRooms: rooms } = this.context;
    // console.log(rooms);
  
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room}/>
    })
  
    return (
      <section className="featured-rooms">
        <Title title="featured rooms"/>
        <div className="featured-rooms-center">
          {/* If the data is loading show spinner else show data */}
          {loading ? <Loading/> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
