import { useContext } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../../context";
import { actions } from "../../actions";

const Confirmation = ({ delPopup }) => {
  const { delConfirm, setDelConfirm, dispatch } = useContext(CartContext);

  return (
    <div
      className={`fixed z-50 bottom-0 md:bottom-10 flex justify-center items-center duration-300 ease-out ${
        delConfirm.status
          ? "right-0 md:right-10 opacity-100 visible"
          : "-right-full opacity-0 invisible"
      }`}
    >
      <div className="p-6 bg-black text-white rounded-lg shadow-md border">
        <p>
          Do you want to delete{" "}
          <span className="font-medium">
            {delConfirm.mode === "deleteSingle" && delPopup && delPopup.title}
            {delConfirm.mode === "deleteAll" && "all"}
          </span>
          ?
        </p>

        <div className="mt-3 border-t pt-3 flex justify-end gap-6 items-center">
          <button
            className="text-green-400 cursor-pointer"
            onClick={() => setDelConfirm({ ...delConfirm, status: false })}
          >
            No
          </button>
          <button
            className="text-red-500 font-medium cursor-pointer"
            onClick={() => {
              if (delConfirm.mode === "deleteSingle") {
                dispatch({
                  type: actions.CART_REMOVED,
                  id: delPopup.id,
                });
                setDelConfirm({ ...delConfirm, mode: "", status: false });
                toast.success("Removed successfully");
              } else {
                dispatch({
                  type: actions.CART_REMOVED_ALL,
                });
                setDelConfirm({ ...delConfirm, mode: "", status: false });
                toast.success("Removed successfully");
              }
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;