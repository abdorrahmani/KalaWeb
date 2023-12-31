import Navbar from "../../../../Components/navbar";
import Sidebar from "@/Components/sidebar";
import MiniCalendar from "../../../../Components/calendar/MiniCalendar.jsx";
import WeeklyRevenue from "./components/WeeklyRevenue.jsx";
import TotalSpent from "./components/TotalSpent";
import PieChartCard from "./components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "../../../../Components/widget/Widget";
import CheckTable from "./components/CheckTable";
import ComplexTable from "./components/ComplexTable";
import DailyTraffic from "./components/DailyTraffic";
import TaskCard from "./components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import "../../../../../assets/css/App.css"
const Dashboard = () => {
  return (

    <div className="flex h-full w-full">
        <Sidebar/>
        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
            <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
                <div className="h-full">
                    <Navbar/>
                    <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                       <div>
                           {/* Card widget */}

                           <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                               <Widget
                                   icon={<MdBarChart className="h-7 w-7" />}
                                   title={"Earnings"}
                                   subtitle={"$340.5"}
                               />
                               <Widget
                                   icon={<IoDocuments className="h-6 w-6" />}
                                   title={"Spend this month"}
                                   subtitle={"$642.39"}
                               />
                               <Widget
                                   icon={<MdBarChart className="h-7 w-7" />}
                                   title={"Sales"}
                                   subtitle={"$574.34"}
                               />
                               <Widget
                                   icon={<MdDashboard className="h-6 w-6" />}
                                   title={"Your Balance"}
                                   subtitle={"$1,000"}
                               />
                               <Widget
                                   icon={<MdBarChart className="h-7 w-7" />}
                                   title={"New Tasks"}
                                   subtitle={"145"}
                               />
                               <Widget
                                   icon={<IoMdHome className="h-6 w-6" />}
                                   title={"Total Projects"}
                                   subtitle={"$2433"}
                               />
                           </div>

                           {/* Charts */}

                           <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                               <TotalSpent />
                               <WeeklyRevenue />
                           </div>

                           {/* Tables & Charts */}

                           <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
                               {/* Check Table */}
                               <div>
                                   <CheckTable
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
                    </div>

                </div>
            </main>
        </div>
    </div>
  );
};

export default Dashboard;
