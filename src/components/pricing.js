import React from "react"
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table"

const Pricing = () => {
    return (
    <PricingTable highlightColor="#00c851" highlighted="#00c851 !important">
      <PricingSlot title="FREE" priceText="$0/month">
        <PricingDetail> 15 projects</PricingDetail>
        <PricingDetail> 5 GB storage</PricingDetail>
        <PricingDetail> 5 users</PricingDetail>
        <PricingDetail> Time tracking</PricingDetail>
      </PricingSlot>
      <PricingSlot highlighted title="BASIC" priceText="$24/month">
        <PricingDetail> 35 projects</PricingDetail>
        <PricingDetail> 15 GB storage</PricingDetail>
        <PricingDetail> Unlimited users</PricingDetail>
        <PricingDetail> Time tracking</PricingDetail>
      </PricingSlot>
      <PricingSlot title="PROFESSIONAL" priceText="$99/month">
        <PricingDetail> 100 projects</PricingDetail>
        <PricingDetail> 30 GB storage</PricingDetail>
        <PricingDetail> Unlimited users</PricingDetail>
        <PricingDetail> Time tracking</PricingDetail>
      </PricingSlot>
      <PricingSlot title="ENTERPRISE" priceText="$200/month">
        <PricingDetail> Unlimited projects</PricingDetail>
        <PricingDetail> 75 GB storage</PricingDetail>
        <PricingDetail> Unlimited users</PricingDetail>
        <PricingDetail> Time tracking</PricingDetail>
      </PricingSlot>
      <style jsx>{`
        .grey {
          display: none;
        }
      `}</style>
    </PricingTable>
    )
}
export default Pricing
