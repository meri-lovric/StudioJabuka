import React from "react"
import { Map, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"

class LeafletMap extends React.Component {
  render() {
    return (
      <Map center={this.props.position} zoom={this.props.zoom}  style={{ width: "100%", height: "380px" }}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/asuton/ck1wbf5ge0gsx1cp7jksevnea/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXN1dG9uIiwiYSI6ImNqdGJidW9sZTBlNm4zeW56djRxODdtMnkifQ.22Y2qFashDLW4lbkedxKeA"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.props.markerText !== "" && (
          <Marker position={[43.5313269, 16.5261697]}></Marker>
        )}
        
        <style>{`
        .leaflet-container{
          height:380px;
          width:100%;
          z-index: 0;
      }
        `}</style>

      </Map>
    )
  }
}
export default LeafletMap
