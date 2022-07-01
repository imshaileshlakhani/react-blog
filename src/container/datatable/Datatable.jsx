import "./datatable.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from "../../datatablesource";
import { useDeleteUserMutation, useGetAllUserQuery } from '../../services/userApi'

const Datatable = () => {
  const [data, setData] = useState([]);
  const { data: userData, isSuccess } = useGetAllUserQuery()
  const [deleteUser] = useDeleteUserMutation()

  useEffect(() => {
    isSuccess && setData(userData)
  }, [isSuccess, userData])

  const handleDelete = (id) => {
    deleteUser(id)
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/admin/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <h1>User List</h1>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={3}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
