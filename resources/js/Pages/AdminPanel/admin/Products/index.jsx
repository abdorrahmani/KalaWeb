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
import PrimaryButton from "@/Components/PrimaryButton.jsx";

const Product = (props) => {
  return (
    <AdminLayout currentRoute="محصولات">
        <div className="p-2 flex gap-4">
            <a href={route('products.create')}>
                <PrimaryButton className="bg-red-500/20"> اضافه کردن محصول جدید</PrimaryButton>
            </a>
            <PrimaryButton className="bg-indigo-500/20">محصولات ناموجود</PrimaryButton>
            <PrimaryButton className="bg-yellow-500/20">انبار</PrimaryButton>
        </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <DevelopmentTable
            title="آخرین محصولات"
            columnsData={columnsDataDevelopment}
            tableData={tableDataDevelopment}
        />

      </div>

    </AdminLayout>
  );
};

export default Product;
