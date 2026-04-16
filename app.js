const Pi = window.Pi;

Pi.init({
  version: "2.0",
  sandbox: true
});

// LOGIN
async function login() {
  try {
    const scopes = ['username', 'payments'];

    const auth = await Pi.authenticate(scopes);

    document.getElementById("user").innerText =
      "Welcome " + auth.user.username;

    console.log(auth);
  } catch (err) {
    console.error(err);
  }
}

// PAYMENT
async function pay() {
  try {
    const paymentData = {
      amount: 1,
      memo: "Burundi-connect test",
      metadata: { type: "test" }
    };

    await Pi.createPayment(paymentData, {
      onReadyForServerApproval: function(paymentId) {
        console.log("Approve:", paymentId);
      },
      onReadyForServerCompletion: function(paymentId, txid) {
        console.log("Complete:", paymentId, txid);
      },
      onCancel: function(paymentId) {
        console.log("Cancelled:", paymentId);
      },
      onError: function(error) {
        console.error(error);
      }
    });

  } catch (err) {
    console.error(err);
  }
}
