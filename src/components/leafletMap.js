import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/leafletMap.css'


class LeafletMap extends React.Component {

  render() {
      return (
        <Map center = {this.props.position} zoom = {this.props.zoom}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution = "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.props.markerText !== "" &&
          <Marker position={[43.5313269,16.5261697]}></Marker>
          }
        </Map>
      );
  }
}
export default LeafletMap