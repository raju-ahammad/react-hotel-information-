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
      types = ["all", ...types];
      // map to jsx
      types = types.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ));

      let people = getUnique(rooms, "capacity");
      people = people.map((item, index) => (
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
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        onChange={handleChange}
                        className="form-control"
                        value={capacity}
                    >
                        {people}
                    </select>
                </div>
                <div className="form-group">
                <label htmlFor="price">room price ${price}</label>
                <input
                    type="range"
                    name="price"
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price}
                    onChange={handleChange}
                    className="form-control"
                />
                </div>
                <div className="form-group">
                <label htmlFor="price">room size </label>
                <div className="size-inputs">
                    <input
                    type="number"
                    name="minSize"
                    value={minSize}
                    onChange={handleChange}
                    className="size-input"
                    />
                    <input
                    type="number"
                    name="maxSize"
                    value={maxSize}
                    onChange={handleChange}
                    className="size-input"
                    />
                </div>
                </div>
            </form>
        </section>
    )
}


export default RoomsFilter
