import React, { useContext } from 'react';
import { RoomContext } from '../../context';
import Title from '../Services/Title';


export const RoomsFilter = ({ rooms }) => {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
      } = context;

    return (
        <secttion className="filter-container">
            <Title title="Search Rooms"/>
        </secttion>
    )
}


export default RoomsFilter
