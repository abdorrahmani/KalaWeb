
import {
  columnsDataDevelopment,
} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import DevelopmentTable from "./components/DevelopmentTable";
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
