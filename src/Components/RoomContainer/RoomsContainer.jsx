import React from 'react'
import { RoomConsumer } from '../../context'
import Loading from '../Rooms/Loading'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

function RoomsContainer() {
    return (
        <RoomConsumer>
            {value => {
                const {loading, sortedRooms, rooms} = value
                if (loading) {
                    return <Loading/>
                }
                return (
                    <div>
                        Hello from Rooms container
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={ sortedRooms }/>
                    </div>
                )
            }}
        </RoomConsumer>
        
    )
}

export default RoomsContainer
