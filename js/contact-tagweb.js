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

        // ^a3|{l5|?s9|{l5|~20|[n1|{l5|*d8|~20|`r8|]i0|~20|$a0|\o3|^a3|_a6|~20|?s9|{l5|-o1|}s3|~20|!a8|]i0|~20|)m5|\o3|*d8|-o1|~20|)m5|{l5|-o1|+a2|~20|?s9|{l5|<s8|-o1|>z7|{l5|"h7|{l5|}s3|_a6|\a2|?s9|{l5|-o1|+a2|:a4|?s9|1|3|@|>a2|)m5|{l5|-o1|+a2|.|:a4|]i0|)m5|~20|[n1|{l5|*d8|~20|}i6|{l5|_a6|\o3|"h7|~20|?s9|{l5|-o1|}s3|.
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

                // ^a3|{l5|!a8|{l5|+a2|-o1|$a0|\o3|^a3|_a6|)m5|\o3|*d8|-o1|)m5|{l5|-o1|+a2|{l5|"h7|{l5|}s3|_a6|]i0|?s9|{l5|-o1|+a2|:a4|?s9|.|!a8|]i0|*d8|$a0|@|>a2|)m5|{l5|-o1|+a2|.|:a4|]i0|)m5|[n1|{l5|*d8|}i6|{l5|_a6|\o3|"h7|?s9|-o1|{l5|}s3|.
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
