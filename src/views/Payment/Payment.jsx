import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postMembership } from "../../redux/store/slices/users/paymentSlice";

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState);
	const navigate = useNavigate();
  const [values, setValues] = useState({
    lookup_key: "20.00",
  });

  const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID, // Viene de Paypal
    currency: "USD", // En que moneda se va a cobrar
    intent: "capture", // Cobra de una vez
  };

  const handleCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "100.00",
          },
        },
      ],
    });
  };

  const handleOrderApproved = async (data, actions) => {
    const paymentDetails = await actions.order.capture();
    dispatch(postMembership({
      paymentId: paymentDetails.id,
      pricePaid: paymentDetails.purchase_units[0].amount.value
    }, user.loggedUser.id)); // => Va a decirle al back quien hizo la compra y el id de esa compra
		navigate('/henrycollege/courses')
  };

  const hasActiveMembership = user.loggedUser.Membership && new Date(user.loggedUser.Membership.expirationDate) >= new Date();

  if (hasActiveMembership) {
    return (
			<h1>Ya tienes una suscripcion activa</h1>
		);
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <h1 color="tertiary">Membresia trimestral</h1>
      <p color="tertiary">
        Paga ya solo <b>$100.00</b>
      </p>
      <PayPalButtons
        createOrder={handleCreateOrder}
        onApprove={handleOrderApproved}
        style={{ layout: "vertical" }}
      />
    </PayPalScriptProvider>
  );
};

export default ProductDisplay;
