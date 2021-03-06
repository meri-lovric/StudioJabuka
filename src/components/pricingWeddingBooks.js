import React from "react"
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table"


const Pricing = () => {
  return (
    <PricingTable highlightColor="#8e24aa !important">
      <PricingSlot highlighted title="4:3 M" priceText="690 kn">
        <PricingDetail> Format 28×21</PricingDetail>
        <PricingDetail> Tvrdi uvez </PricingDetail>
        <PricingDetail> 26 stranica </PricingDetail>
        <PricingDetail> 8 dodatnih 150 kn</PricingDetail>
      </PricingSlot>
      <PricingSlot title="4:3 L" priceText="1490 kn">
      <PricingDetail> Format 38×29</PricingDetail>
        <PricingDetail> Tvrdi uvez </PricingDetail>
        <PricingDetail> 26 stranica </PricingDetail>
        <PricingDetail> 8 dodatnih 250 kn</PricingDetail>
      </PricingSlot>
      <PricingSlot title="1:1 M" priceText="590kn">
      <PricingDetail> Format 28×21</PricingDetail>
        <PricingDetail> Tvrdi uvez </PricingDetail>
        <PricingDetail> 26 stranica </PricingDetail>
        <PricingDetail> 8 dodatnih 100 kn</PricingDetail>
      </PricingSlot>
      <PricingSlot title="1:1 L" priceText="990 kn">
      <PricingDetail> Format 28×21</PricingDetail>
        <PricingDetail> Tvrdi uvez </PricingDetail>
        <PricingDetail> 26 stranica </PricingDetail>
        <PricingDetail> 8 dodatnih 190 kn</PricingDetail>
      </PricingSlot>
      <style jsx>{`
        .grey {
          display: none;
        }
        .price li {
          font-size: 1.1em;
        }
        .tag {
          font-size: 1.4em;
        }
        .price{
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
          background-color:white;
        }
        #highlighted-header {
          background-color: #8e24aa !important;
        }
      `}</style>
    </PricingTable>
  )
}
export default Pricing
