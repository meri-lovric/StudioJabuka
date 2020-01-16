import React from "react"
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table"


const Pricing = () => {
  return (
    <PricingTable>
      <PricingSlot title="Foto M" priceText="3500 kn">
        <PricingDetail> Foto session</PricingDetail>
        <PricingDetail> Ceremonija vjenčanja </PricingDetail>
        <PricingDetail> Obiteljske fotografije </PricingDetail>
        <PricingDetail> Proslava do kraja protokola</PricingDetail>
      </PricingSlot>
      <PricingSlot title="Foto L" priceText="4900 kn">
        <PricingDetail> Kod mlade i mladoženje</PricingDetail>
        <PricingDetail> Foto session</PricingDetail>
        <PricingDetail> Ceremonija vjenčanja </PricingDetail>
        <PricingDetail> Obiteljske fotografije </PricingDetail>
        <PricingDetail> Proslava do kraja protokola</PricingDetail>
      </PricingSlot>
      <PricingSlot highlighted title="Foto & video M" priceText="5500 kn">
        <PricingDetail> Foto/video session</PricingDetail>
        <PricingDetail> Ceremonija vjenčanja </PricingDetail>
        <PricingDetail> Obiteljske fotografije </PricingDetail>
        <PricingDetail> Proslava do kraja protokola</PricingDetail>
      </PricingSlot>
      <PricingSlot title="Foto & video L" priceText="6900 kn">
        <PricingDetail> Kod mlade i mladoženje</PricingDetail>
        <PricingDetail> Foto session</PricingDetail>
        <PricingDetail> Ceremonija vjenčanja </PricingDetail>
        <PricingDetail> Obiteljske fotografije </PricingDetail>
        <PricingDetail> Proslava do kraja protokola</PricingDetail>
      </PricingSlot>
      <style jsx>{`
        .grey {
          display: none;
        }
        .price li {
          font-size: 1.1em;
        }
        .price .highlighted-header {
          background-color: #00c851;
        }
        .tag {
          font-size: 1.4em;
        }
        .price{
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
          background-color:white;
        }

      `}</style>
    </PricingTable>
  )
}
export default Pricing
