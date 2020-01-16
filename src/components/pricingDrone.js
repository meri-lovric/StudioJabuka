import React from "react"
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table"

const Pricing = () => {
  return (
    <PricingTable highlightColor="#00c851">
      <PricingSlot highlighted title="Snimanje iz zraka dronom" priceText="790 kn/sat">
        <PricingDetail> Najam bespilotne letjelice sa pilotom </PricingDetail>
        <PricingDetail> Osnovna obrada fotografija </PricingDetail>
        <PricingDetail> Fotografije 20.8 MP </PricingDetail>
        <PricingDetail> FullHD snimke </PricingDetail>
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
          background-color: #00c851;
        }
      `}</style>
    </PricingTable>
  )
}
export default Pricing
