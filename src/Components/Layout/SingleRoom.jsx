import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../context';
import defaultBcg from "../../images/defaultBcg.jpeg";


export class SingleRoom extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          slug: this.props.match.params.slug,
          defaultBcg: defaultBcg
        };
      }
      static contextType = RoomContext

    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if(!room){
            return(
                <div className="error">
                    <h3> no such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">Back To Room</Link>
                </div>
            )
        }
        const {
            name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
        } = room
        const [main, ...defaultImages] = images;
        console.log(defaultImages);
        return (
            <>
            <section>
                <p>{description}</p>
            </section>
            </>
        )
        
    }
}

export default SingleRoom
