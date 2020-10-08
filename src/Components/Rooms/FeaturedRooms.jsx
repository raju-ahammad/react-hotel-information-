import React, { Component } from 'react';
import { RoomContext } from '../../context';


export class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        const { name, greeting } = this.context
        return (
            <div>
                hello {name} { greeting } from featurd 
            </div>
        )
    }
}

export default FeaturedRooms
