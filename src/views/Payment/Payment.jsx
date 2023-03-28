import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Hidden,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postPayment } from "../../redux/store/slices/payment/paymentSlice";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState);
	const navigate = useNavigate();
  const payment = useSelector((state) => state.paymentState);
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
    const name = paymentDetails.payer.name.given_name;
    dispatch(postPayment(paymentDetails)); // => Va a decirle al back quien hizo la compra y el id de esa compra
		navigate('/henrycollege/courses')
  };

  if (payment.paid.status === "COMPLETED") {
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
