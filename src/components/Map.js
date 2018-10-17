import React, { Component } from 'react'



export default class Map extends Component {

    async componentDidMount() {
        const res = await fetch('https://image.maps.api.here.com/mia/1.6/mapview?app_id="rQsqyQaka1DetV7i8u8k"&app_code="YFvWu3W9kEGR93P35RVrkQ"')
        const Map = await res.json()
        console.log({Map})
    } 

    render() {
        return (
            <div>
                <p>Poop</p>
            </div>
        )
    }
}