import React, { useContext } from 'react';
import { RoomContext } from '../../context';
import Title from '../Services/Title';


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

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
      //get unique types
      let types = getUnique(rooms, "type");
      // add all
      types = ["all", ...types];
      // map to jsx
      types = types.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ));

    return (
        <section className="filter-container">
            <Title title="Search Rooms"/>
            <form className="filter-form">
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select
                    name="type"
                    id="type"
                    onChange={handleChange}
                    className="form-control"
                    value={type}>
                    {types}
                </select>
            </div>
            </form>
        </section>
    )
}


export default RoomsFilter
