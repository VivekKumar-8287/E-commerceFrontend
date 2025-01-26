import { ReactElement, useState } from "react";
import { Link} from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Qunatity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const Orders = () => {

  const [rows]=useState<DataType[]>([
    {
      _id: "asdffhlj",
      amount: 50000,
      quantity: 2,
      discount: 5000,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/asdffhlj`}>View</Link>,
    }
  ])
  // const Table = TableHOC<DataType>(column,rows,"dashboardProductBox","Orders",rows.length>6)();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {/* 2:54:11 */}
      {/* {Table} */}
    </div>
  );
};

export default Orders;
