import React, { Component } from 'react'
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa"
import Title from './Title'

const serviceInfo = [
    {
        icon: <FaCocktail/>,
        title: "Free Coktails",
        info: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been."
    },
    {
        icon: <FaHiking/>,
        title: "Endless Fahiking",
        info: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been."
    },
    {
        icon: <FaShuttleVan/>,
        title: "Free ShuttleVan",
        info: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been."
    },
    {
        icon: <FaBeer/>,
        title: "Free Stronges Beer",
        info: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been."
    }
]


class Service extends Component {
    state = {
        services: serviceInfo,
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index)=> {
                        return <article key={index} className="service">
                            <span> {item.icon} </span>
                            <h6> {item.title} </h6>
                            <p> {item.info} </p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

export default Service
