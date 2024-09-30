import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newOrder = await request.json();

  // const trxId = new ObjectId().toString();

  const initiateData = {
    store_id: process.env.NEXT_PUBLIC_SSLCOMMERZ_STORE_ID,
    store_passwd: process.env.NEXT_PUBLIC_SSLCOMMERZ_STORE_PASSWORD,
    total_amount: newOrder.price,
    currency: "BDT",
    tran_id: newOrder.paymentId,
    success_url: "http://localhost:3000/payment/api/success",
    fail_url: "http://localhost:3000/payment/api/fail",
    cancel_url: "http://localhost:3000/payment/api/cancel",
    cus_name: newOrder.name,
    cus_email: newOrder.email,
    cus_add1: newOrder.address,
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: newOrder.phone,
    cus_fax: "01711111111",
    shipping_method: "NO",
    multi_card_name: "mastercard,visacard,amexcard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
    product_name: newOrder.orderTitle,
    product_category: "Pet Product",
    product_profile: "general",
  };

  const response = await fetch(
    "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
    {
      method: "POST",
      body: new URLSearchParams(initiateData), // Convert the data to application/x-www-form-urlencoded format
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  let responseData;
  // Check if the response status is 200 OK
  if (response.ok) {
    responseData = await response.json(); // Parse the JSON response
    // console.log("Parsed Response:", responseData); // Log the parsed response
  } else {
    console.error("Error:", response.status, response.statusText);
    return Response.json({ message: "Something Went Wrong" }, { status: 400 });
  }

  const db = await connectDB();
  const orderCollection = db.collection("orders");

  try {
    const res = await orderCollection.insertOne(newOrder);

    if (res) {
      return Response.json(
        {
          message: "Booked Successfully",
          paymentUrl: responseData.GatewayPageURL,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};
