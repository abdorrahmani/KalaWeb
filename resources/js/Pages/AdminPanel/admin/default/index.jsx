import MiniCalendar from "../../../../Components/calendar/MiniCalendar.jsx";
import TotalSpent from "./components/TotalSpent";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "../../../../Components/widget/Widget";
import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";
import "../../../../../assets/css/App.css"
import WeeklyRevenue from "@/Pages/AdminPanel/admin/default/components/WeeklyRevenue.jsx";
import CheckTable from "@/Pages/AdminPanel/admin/tables/components/CheckTable.jsx";
import DailyTraffic from "@/Pages/AdminPanel/admin/default/components/DailyTraffic.jsx";
import PieChartCard from "@/Pages/AdminPanel/admin/default/components/PieChartCard.jsx";
import ComplexTable from "@/Pages/AdminPanel/admin/tables/components/ComplexTable.jsx";
import TaskCard from "@/Pages/AdminPanel/admin/default/components/TaskCard.jsx";

import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import AdminLayout from "@/Layouts/admin/AdminLayout.jsx";
const Dashboard = () => {
  return (
      <AdminLayout>
          <div>
              {/* Card widget */}

              <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6" dir="rtl">

                  <Widget
                      icon={<IoDocuments className="h-6 w-6" />}
                      title={"سود خالص"}
                      subtitle={"0"}
                  />
                  <Widget
                      icon={<MdBarChart className="h-7 w-7" />}
                      title={"مقدار مرجوعی"}
                      subtitle={"574.34تومان"}
                  />
                  <Widget
                      icon={<MdDashboard className="h-6 w-6" />}
                      title={"سفارش روز"}
                      subtitle={"10"}
                  />
                  <Widget
                      icon={<MdBarChart className="h-7 w-7" />}
                      title={"تعداد مرجوعی ها"}
                      subtitle={"340.5تومان"}
                  />

              </div>

              {/* Charts */}

              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <TotalSpent title={"سود"} />
                  <WeeklyRevenue title="سود این هفته" />
              </div>

              {/* Tables & Charts */}

              <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
                  {/* Check Table */}
                  <div>
                      <CheckTable
                          title="کسری انبار"
                          columnsData={columnsDataCheck}
                          tableData={tableDataCheck}
                      />
                  </div>

                  {/* Traffic chart & Pie Chart */}

                  <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
                      <DailyTraffic />
                      <PieChartCard />
                  </div>

                  {/* Complex Table , Task & Calendar */}

                  <ComplexTable
                      columnsData={columnsDataComplex}
                      tableData={tableDataComplex}
                  />

                  {/* Task chart & Calendar */}

                  <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
                      <TaskCard />
                      <div className="grid grid-cols-1 rounded-[20px]">
                          <MiniCalendar />
                      </div>
                  </div>
              </div>


          </div>
      </AdminLayout>

  );
};

export default Dashboard;
