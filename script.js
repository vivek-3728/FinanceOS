// =========================
// PERIOD SELECTOR
// =========================

const periodSelector =
    document.getElementById("period");


periodSelector.addEventListener(
    "change",
    function () {

        console.log(
            "Selected period:",
            periodSelector.value
        );

    }
);


// =========================
// INITIAL FINANCIAL VALUES
// =========================

let totalSpent = 0;

let totalReceived = 0;

let balance = 0;


// =========================
// DISPLAY INITIAL VALUES
// =========================

document.getElementById("total-spent").textContent =
    `₹${totalSpent}`;


document.getElementById("total-received").textContent =
    `₹${totalReceived}`;


document.getElementById("balance").textContent =
    `₹${balance}`;
    // =========================
// TRANSACTION PAGE
// =========================

const transactionForm =
    document.getElementById("transaction-form");


if (transactionForm) {


    // Get form inputs

    const transactionType =
        document.getElementById("transaction-type");

    const transactionAmount =
        document.getElementById("transaction-amount");

    const transactionCategory =
        document.getElementById("transaction-category");

    const transactionDate =
        document.getElementById("transaction-date");

    const transactionDescription =
        document.getElementById("transaction-description");


    // Get transaction container

    const transactionsContainer =
        document.getElementById(
            "transactions-container"
        );


    // =========================
    // TRANSACTION DATA
    // =========================

    const transactions = [];


    // =========================
    // TODAY'S DATE
    // =========================

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    transactionDate.value =
        `${year}-${month}-${day}`;


    // =========================
    // ADD TRANSACTION
    // =========================

    transactionForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const transaction = {

                id: Date.now(),

                type:
                    transactionType.value,

                amount:
                    Number(
                        transactionAmount.value
                    ),

                category:
                    transactionCategory.value,

                date:
                    transactionDate.value,

                description:
                    transactionDescription.value

            };


            transactions.push(transaction);


            console.log(transaction);

            console.log(transactions);


            transactionForm.reset();


            transactionDate.value =
                `${year}-${month}-${day}`;

        }
    );

}