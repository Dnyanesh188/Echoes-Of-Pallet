import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeliveryHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-delivery"));
  console.log(user);

  const deliveryLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-delivery");
    sessionStorage.removeItem("delivery-jwtToken");
    setTimeout(() => {
      window.location.reload(true);
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/delivery-person/order/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">My Delivery Orders</b>
        </Link>
      </li>

      <li class="nav-item">
       <button className="btn btn-danger" >
       <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={deliveryLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
       </button>
        
        <ToastContainer />
      </li>
    </ul>
  );
};

export default DeliveryHeader;
