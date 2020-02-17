import React from "react"
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table"

const Pricing = () => {
  return (
    <PricingTable highlightColor="#8e24aa !important">
      <PricingSlot title="Zahvalnice" priceText="9 kn/komad">
        <PricingDetail> Fotografije format 10×15 </PricingDetail>
        <PricingDetail> > 80 zahvalnica 5kn/komad </PricingDetail>
      </PricingSlot>
      <PricingSlot title="Spot" priceText="790 kn">
        <PricingDetail> Izrada video spota</PricingDetail>
        <PricingDetail> Dužine do 3 minute</PricingDetail>
        <PricingDetail> Za promotivne svrhe </PricingDetail>
      </PricingSlot>
      <PricingSlot highlighted title="Foto" priceText="790 kn">
        <PricingDetail> Jedan sat fotografiranja</PricingDetail>
        <PricingDetail> Uključuje obradu fotografija </PricingDetail>
      </PricingSlot>
      <PricingSlot title="Video" priceText="790 kn">
        <PricingDetail> Jedan sat snimanja</PricingDetail>
        <PricingDetail> Uključuje obradu videa</PricingDetail>
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
        .price {
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
          background-color: white;
        }
        #highlighted-header {
          background-color: #8e24aa !important;
        }
      `}</style>
    </PricingTable>
  )
}
export default Pricing
