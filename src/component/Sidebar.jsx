import "../style/Sidebar.css";
import { IoAnalyticsOutline } from "react-icons/io5";
import { PiCaretRightThin } from "react-icons/pi";
import { GoVideo } from "react-icons/go";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaNutritionix } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <div className="perfomance">
        <div>
          <h3>Performance</h3>
          <div className="innner">
            <IoAnalyticsOutline />
            <p className="mar">Performance Analytic</p>
            <PiCaretRightThin />
          </div>
          <div className="innner">
            <IoAnalyticsOutline />
            <p className="mar">Video</p>
            <GoVideo />
          </div>
          <div>
            <h3>Health & Wellness</h3>
            <div className="innner">
              <MdOutlinePersonalInjury />
              <p className="mar">Injury Tracker</p>
              <PiCaretRightThin />
            </div>
            <div className="innner">
              <FaNutritionix />
              <p className="mar">Nutrition</p>
              <GoVideo />
            </div>
          </div>
          <div>
            <h3>Calendar</h3>
            <div className="innner">
              <MdOutlinePersonalInjury />
              <p className="mar">Training plan</p>
              <PiCaretRightThin />
            </div>
            <div className="innner">
              <FaNutritionix />
              <p className="mar">Upcoming Event</p>
              <GoVideo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
