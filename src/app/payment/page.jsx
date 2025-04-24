//Katinka: OBS mangler icon på button

import Button from "@/components/Button";
import { PiCreditCardLight } from "react-icons/pi";

const Payment = () => {
  return (
    <div>
      <Button variant="primary">Buy now <PiCreditCardLight size={34} className="ml-4"/> </Button>
    </div>
  );
};

export default Payment;
