import Plans from "./components/Plans";

const plans = [
    { namePlan: "START", speedPlan: "250", pricePlan: 79, typeWifi: "5G" },
    { namePlan: "PLUS", speedPlan: "500", pricePlan: 89, typeWifi: "6 + 5G" },
    { namePlan: "PRO", speedPlan: "600", pricePlan: 99, typeWifi: "6 + 5G" },
    { namePlan: "ULTRA", speedPlan: "800", pricePlan: 119, typeWifi: "6 +5G" }
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
