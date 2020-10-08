import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Hero from './Hero'

const Rooms = () => {
    return (
        <Hero hero = "roomsHero">
            <Banner title= "Our room" className="btn-primary">
               <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
    )
}

export default Rooms
