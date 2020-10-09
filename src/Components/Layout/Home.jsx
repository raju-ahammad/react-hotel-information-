import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedRooms from '../Rooms/FeaturedRooms'
import Service from "../Services/Service"
import Banner from './Banner'
import Hero from './Hero'

const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="There have luxarious room" subtitle="delux room start with 5000TK">
                <Link to="/rooms" className="btn-primary"> our rooms </Link>
            </Banner>
        </Hero>
        <Service/>
        <FeaturedRooms/>
        </>
    )
}

export default Home
