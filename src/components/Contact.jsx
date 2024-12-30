

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Galactic Ventures</h1>
            <p>
                Whether you're ready to book your next cosmic adventure or simply have questions
                about our services, we'd love to hear from you!
            </p>

            <form className="contact-form">
                <input
                    type="text"
                    placeholder="Name"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <textarea
                    placeholder="Message..."
                    rows="8"
                />

                <button>
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;
