export const dynamic = "force-dynamic";

import OrderInfo from "./OrderInfo";
import Statistics from "./Statistics";

const DashboardContents = () => {
  return (
    <>
      <OrderInfo />
      <Statistics />
    </>
  );
};

export default DashboardContents;
