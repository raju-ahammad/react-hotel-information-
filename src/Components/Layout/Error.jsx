import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Hero from './Hero'

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="page not fount">
                <Link to="/" className="btn-primary">Go To Home</Link>
            </Banner>
        </Hero>
    )
}

export default Error
