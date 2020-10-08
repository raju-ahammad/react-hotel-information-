import React, { Component } from 'react'
import { FaCocktail } from "react-icons/fa"
import Title from './Title'

const serviceInfo = [
    {
        icon: <FaCocktail/>,
        title: "Free Coktails",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        icon: <FaCocktail/>,
        title: "Free Coktails",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        icon: <FaCocktail/>,
        title: "Free Coktails",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        icon: <FaCocktail/>,
        title: "Free Coktails",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]


class Service extends Component {
    state = {
        services: [
            
        ]
    }
    render() {
        return (
            <div>
                <Title title="Services" />
            </div>
        )
    }
}

export default Service
