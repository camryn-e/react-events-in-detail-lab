// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    onRecieveCoordinates = (event) => {
        event.persist()
        const coords = [event.clientX, event.clientY]
        //console.log(coords)
        return coords
    }

    render() {
        return(
           <button onClick={(event) => {
               //console.log(event.clientX, event.clientY)
            //    let coords = [event.clientX, event.clientY]
            //    console.log(coords)
               console.log(this.onRecieveCoordinates(event))
            }}></button>
        )
    }
}