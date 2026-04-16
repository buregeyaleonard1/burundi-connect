const Pi = window.Pi;

Pi.init({
  version: "2.0",
  sandbox: true
});

let currentUser = null;

// LOGIN
async function login() {
  try {
    const scopes = ['username', 'payments'];

    const auth = await Pi.authenticate(scopes);

    currentUser = auth.user;

    document.getElementById("user").innerText =
      "Welcome " + currentUser.username;

  } catch (err) {
    console.error(err);
  }
}

// PAYMENT
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
        console.log("Ready for approval:", paymentId);
      },
      onReadyForServerCompletion: function(paymentId, txid) {
        console.log("Ready for completion:", paymentId, txid);
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
