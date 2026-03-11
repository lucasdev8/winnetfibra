import Plans from "./components/Plans";

const plans = [
    { namePlan: "START", speedPlan: "100", pricePlan: 79.99, typeWifi: "5G" },
    { namePlan: "PLUS", speedPlan: "300", pricePlan: 89.99, typeWifi: "6 + 5G" },
    { namePlan: "PRO", speedPlan: "500", pricePlan: 99.99, typeWifi: "6 + 5G" },
    { namePlan: "ULTRA", speedPlan: "800", pricePlan: 119.99, typeWifi: "6 +5G" }
]

export default function Home() {
  return (
    <>
      <Plans  
        plans={plans}
      />
    </>
  )
}
