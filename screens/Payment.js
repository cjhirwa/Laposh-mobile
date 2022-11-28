import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { StripeProvider } from "@stripe/stripe-react-native";

//ADD localhost address of your server
const API_URL = "https://reservation-zeta.vercel.app/pay";

const Payment = props => {
  const [cardDetails, setCardDetails] = useState();

  const pay = async () => {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:{
        
      }
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  return (
    <View style={styles.container}>
     <StripeProvider publishableKey="pk_test_51M6cw2EWgd0HEd71iIOBqXn7dZ2YoHXHmEd8nZ0NF587oo8PgPrpDQklfky8PxoVEAg7EpDjQfgWnWPoflvUBae700CbrMFltM">
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={cardDetails => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={pay} title="Pay" disabled={loading} />
    </StripeProvider>
      
    </View>
  );
};
export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});