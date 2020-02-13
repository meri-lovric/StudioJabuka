import React from "react"
import { Map, TileLayer, Marker } from "react-leaflet"
import "../styles/leafletMap.css"

class LeafletMap extends React.Component {
  render() {
    return (
      <div ref={this.mapWrapperRef} className="map-wrapper">
        {typeof window !== "undefined" ? (
          <Map center={this.props.position} zoom={this.props.zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {this.props.markerText !== "" && (
              <Marker position={[43.5313269, 16.5261697]}></Marker>
            )}
          </Map>
        ) : null}
      </div>
    )
  }
}
export default LeafletMap
