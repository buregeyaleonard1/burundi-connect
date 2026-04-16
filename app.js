async function pay() {
  if (!currentUser) {
    alert("Banza ukore login");
    return;
  }

  try {
    const paymentData = {
      amount: 0.1,
      memo: "Test payment Burundi-connect",
      metadata: { test: true }
    };

    await Pi.createPayment(paymentData, {
      onReadyForServerApproval: function(paymentId) {
        console.log("AUTO APPROVED:", paymentId);
        
        // 👉 trick yo gutuma ikomeza
        return Promise.resolve();
      },

      onReadyForServerCompletion: function(paymentId, txid) {
        console.log("AUTO COMPLETED:", paymentId, txid);
        return Promise.resolve();
      },

      onCancel: function(paymentId) {
        console.log("Cancelled:", paymentId);
      },

      onError: function(error) {
        console.error("Error:", error);
      }
    });

  } catch (err) {
    console.error(err);
  }
}
