import { useEffect, useState } from "react";
import AddCustomerForm from "../../components/admin/AddCustomerForm";
import { useAuth } from "../../hooks/useAuth";

const CustomerList = () => {
  const { registerUser } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(registerUser);
  }, [registerUser]);

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Customer List Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Customer List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-300 border-collapse">
              <thead className="bg-gray-800 text-xs uppercase text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Mobile</th>
                </tr>
              </thead>
              <tbody className="bg-gray-700 divide-y divide-gray-600">
                {users.map((user, i) => (
                  <tr key={i} className="hover:bg-gray-600">
                    <td className="px-6 py-4">{user.fName} {user.lName}</td>
                    <td className="px-6 py-4">{user.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Customer Form Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Add New Customer</h2>
          <div className="bg-gradient-to-br from-green-500 to-teal-400 p-8 rounded-xl shadow-lg text-white">
            <AddCustomerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
