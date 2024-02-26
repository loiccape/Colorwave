import React from "react";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import RecentTicketItem from "../recent_ticket_item/RecentTicketItem";
export default function RecentTicket({primaryColor}) {
  return (
    <div className={`bg-${primaryColor} rounded p-3 col-11 col-sm-12 mx-auto mt-3`} style={{ height: "200px" }}>
      <div className="d-flex justify-content-between">
        <p>Recent tickets</p>
        <TfiLayoutMenuSeparated size={25} />
      </div>
      <div>
        <RecentTicketItem title="Add custom export" option="Released" />
        <RecentTicketItem title="Add more templates" option="In progress" />
        <RecentTicketItem title="More accecibility" option="In progress" />
      </div>
    </div>
  );
}
