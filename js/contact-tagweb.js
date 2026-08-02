// Email js dual engine for 2 email js accoutn :)
document.addEventListener("DOMContentLoaded", function () {
    // FIXED: ID links directly targeting the active form node elements
    const form = document.getElementById("contact-form-element");
    if (!form) {
        console.error("🚨 Form element with target ID not found in active document node.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // 1. Fire Instant Micro-Loading Animation Frame
        Swal.fire({
            title: "Sending Message...",
            text: "Please wait while our engine syncs the dynamic data channels.",
            background: "rgba(11, 15, 25, 0.9)",
            color: "#fffafa",
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        // 2. Stream Data Input Fields Extraction Variables (Matching HTML placeholders exactly)
        const fullName = form.querySelector('input[placeholder="Full Name"]').value.trim();
        const email = form.querySelector('input[placeholder="Email Address"]').value.trim();
        const subject = form.querySelector('input[placeholder="Email Subject"]').value.trim();
        const message = form.querySelector('textarea[placeholder="Your Message to me..."]').value.trim();

        // Send mesg to adming of users mesg
        // Initialize Admin Account Keys
        emailjs.init("dAMF2yTIPWS6ZnrQo");

        emailjs.send("service_fl2tqsn", "template_i7qy57w", {
            fullName: fullName,
            email: email,
            subject: subject,
            message: message,
        })
            .then(function () {
                console.log("Pipeline 1: Message successfully routed to Tag-web Admin Inbox! ✅");

                // Auto confirmation to users gmail account 
                // Switch engine context to User Confirmation Account Keys
                emailjs.init("OpDkORzSICuBiLjXF");

                return emailjs.send("service_tf0f48h", "template_8idyzqt", {
                    fullName: fullName,
                    email: email,
                    message: message,
                });
            })
            .then(function () {
                console.log("Pipeline 2: Auto-receipt successfully dispatched to visitor! ✅");

                // 3. Final Resolution Framework Success Alert Trigger
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully!",
                    html: `<p style="font-size:17px; font-family:'Outfit', sans-serif;">
                        Thanks for contacting us 💜<br><br>
                        A confirmation receipt has been sent to your inbox 📩
                       </p>`,
                    confirmButtonText: "Awesome",
                    confirmButtonColor: "#7aa2f7",
                    background: "rgba(11, 15, 25, 0.85)",
                    color: "#fffafa",
                    timer: 5000,
                    timerProgressBar: true,
                    customClass: { popup: 'premium-glass-card' }
                });
                form.reset();
            })
            .catch(function (error) {
                console.error("🚨 Transmission crash error log:", error);
                Swal.fire({
                    icon: "error",
                    title: "Failed to Send",
                    text: "Something went wrong. Please check connection proxies or try again!",
                    background: "rgba(11, 15, 25, 0.9)",
                    color: "#fffafa",
                    confirmButtonColor: "#ea4335"
                });
            });
    });
});
