
            // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
            import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries

            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
                apiKey: "AIzaSyCknvugcE6ZB6jCEqlfLqabda_A-PQ3i4Q",
                authDomain: "academy-romny.firebaseapp.com",
                projectId: "academy-romny",
                storageBucket: "academy-romny.appspot.com",
                messagingSenderId: "372644470359",
                appId: "1:372644470359:web:94adb1d1c5f6c6cea90d12",
                measurementId: "G-CXGC218NCL"
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
            // Initialize Cloud Firestore and get a reference to the service
            const db = getFirestore(app);

            let loginForm = document.getElementById("application-form");
            loginForm.addEventListener("submit", async (e) => {
                e.preventDefault();
                let application = {
                    name: document.getElementById("first-name").value,
                    surname: document.getElementById("last-name").value,
                    age: document.getElementById("age").value,
                    mail: document.getElementById("email").value,
                    message: document.getElementById("message").value,
                    phone: document.getElementById("phone").value
                }

                try {
                    const docRef = await addDoc(collection(db, "applications"), application);
                    alert("Document written with ID: ", docRef.id);
                } catch (e) {
                    alert("Error adding document: ", e);
                }
            });
