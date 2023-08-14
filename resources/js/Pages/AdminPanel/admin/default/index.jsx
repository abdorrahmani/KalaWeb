
import MiniCalendar from "../../../../Components/calendar/MiniCalendar.jsx";
import TotalSpent from "./components/TotalSpent";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "../../../../Components/widget/Widget";

import "../../../../../assets/css/App.css"
import Admin from "@/Layouts/admin/index.jsx";
const Dashboard = () => {
  return (
      <Admin>
          <div>
              {/* Card widget */}

              <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6" dir="rtl">

                  <Widget
                      icon={<IoDocuments className="h-6 w-6" />}
                      title={"سفارش جاری"}
                      subtitle={"0"}
                  />
                  <Widget
                      icon={<MdBarChart className="h-7 w-7" />}
                      title={"سفارش تحویل شده"}
                      subtitle={"$574.34"}
                  />
                  <Widget
                      icon={<MdDashboard className="h-6 w-6" />}
                      title={"سفارش مرجوع شده"}
                      subtitle={"$1,000"}
                  />
                  <Widget
                      icon={<MdBarChart className="h-7 w-7" />}
                      title={"کیف پول"}
                      subtitle={"340.5تومان"}
                  />

              </div>

              {/* Charts and calendar */}

              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <TotalSpent />
                  <div>
                      <MiniCalendar />
                  </div>
              </div>


          </div>
      </Admin>

  );
};

export default Dashboard;
