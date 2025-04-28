import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";

const PaymentMethods = () => {
  return (
    <div className="flex justify-between">
      <FaCcVisa size={34} />
      <FaCcMastercard size={34} />
      <SiKlarna size={34} />
      <FaCcPaypal size={34} />
      <MdCardGiftcard size={34} />
    </div>
  );
};

export default PaymentMethods;
