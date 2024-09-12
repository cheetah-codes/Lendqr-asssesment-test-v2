import { onSnapshot, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { colRef } from "../../utils/firebase.config";

type TableItemProps = {
  [key: string]: any;
};

interface TableProps<T extends object> {
  userData: T;
}

const TableItem = ({
  organization,
  username,
  email,
  phoneNumber,
  DateJoined,
  Status,
}: TableItemProps) => {
  useEffect(() => {
    const { searchval } = useContext(SearchContext);

    const q = query(
      colRef,
      where("organization", "==", `${searchval}`),
      where("username", "==", `${searchval}`),
      where("email", "==", `${searchval}`),
      where("status", "==", `${searchval}`)
    );
    onSnapshot(q, (snap: any) => {
      let organizations: Array<TableItemProps | any> = [];
      snap.docs.forEach((doc: any) => {
        organization.push(doc.data());
        console.log("snapshot", organizations);
      });
    });
  }, []);

  return (
    <>
      <tr>
        <td>{organization}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{DateJoined}</td>
        <td>{Status}</td>
      </tr>
    </>
  );
};

const Table = <T extends object>({}: TableProps<T[]>) => {
  const [data, setData] = useState<T[]>([]);
  const headers = [
    "Organization",
    "Username",
    "Email",
    "Phone Number",
    "Date Joined",
    "Status",
  ];

  useEffect(() => {
    fetch("http://localhost:8000/organizations")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data form fetch", data);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((headers) => {
              return (
                <th>
                  <p>{headers.toUpperCase()}</p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
