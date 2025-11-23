import React, { useRef, useEffect } from "react";
import dayjs from "dayjs";

function Date() {
  const today = dayjs();
  const startOfMonth = today.startOf("month");
  const endOfMonth = today.endOf("month");

  const days = [];
  let day = startOfMonth;
  while (day.isBefore(endOfMonth) || day.isSame(endOfMonth)) {
    days.push(day);
    day = day.add(1, "day");
  }

  const todayRef = useRef(null);

  useEffect(() => {
    if (todayRef.current) {
      // Scroll today into view smoothly and center
      todayRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, []);

  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex gap-2 w-[200px]">
        {days.map((d) => {
          const isToday = d.isSame(today, "day");

          return (
            <div
              key={d.format("DD")}
              ref={isToday ? todayRef : null} // assign ref to today
              className="flex flex-col items-center justify-center px-4 py-2 rounded-xl min-w-[60px] text-gray-700"
            >
              <span className="text-center text-black text-[10px] sm:text-[18px] font-[300]">
                {d.format("ddd")}
              </span>
              <span
                className={`mt-2 text-center text-[16px] sm:text-[18px] font-[300] ${
                  isToday
                    ? "bg-[#6357F9] font-bold text-white py-1 px-2 rounded-[10px]"
                    : "text-gray-700"
                }`}
              >
                {d.format("DD")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Date;
