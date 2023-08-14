import React, { useState } from "react";
import Calendar from "react-calendar";
import Card from "../card";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../../../assets/css/MiniCalendar.css";

const MiniCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Card extra="flex w-full h-full flex-col px-3 py-3">
        <Calendar className=" w-[auto]"
          onChange={onChange}
          value={value}
          prevLabel={<MdChevronRight className="mr-1 h-6 w-6 " />}
          nextLabel={<MdChevronLeft className="mr-1 h-6 w-6 " />}
          view={"month"}
        />
      </Card>
    </div>
  );
};

export default MiniCalendar;
