import CheckTable from "./components/CheckTable";

import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import AdminLayout from "@/Layouts/admin/AdminLayout.jsx";

const Tables = () => {
  return (
    <AdminLayout>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable
            title="سفارشات در حال ارسال"
            columnsData={columnsDataDevelopment}
            tableData={tableDataDevelopment}
        />
          <CheckTable  title="سفارشات آماده تایید برای ارسال"  columnsData={columnsDataCheck} tableData={tableDataCheck} />

      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
          <ColumnsTable
              title="سفارشات در حال آماده شدن"
              columnsData={columnsDataColumns}
              tableData={tableDataColumns}
          />

      </div>
    </AdminLayout>
  );
};

export default Tables;
