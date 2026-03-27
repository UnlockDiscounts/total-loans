
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";



function ContactFormBlock() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setForm((prev) => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });
    setTimeout(() => setPopup({ show: false, type: "", message: "" }), 2500);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    setResult("");

    // Custom validation logic
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const fullName = form.fullName.trim();
    const phoneNumber = form.phone.trim();
    const emailAddress = form.email.trim();
    const subject = form.subject;
    const message = form.message?.trim() || "";

    if (!fullName || !phoneNumber || !emailAddress || !subject) {
      showPopup("error", "Full name, phone number, email and subject are required.");
      return;
    }
    if (fullName.length < 3) {
      showPopup("error", "Full name must be at least 3 characters.");
      return;
    }
    if (!emailRegex.test(emailAddress)) {
      showPopup("error", "Please enter a valid email address.");
      return;
    }
    if (!phoneRegex.test(phoneNumber)) {
      showPopup("error", "Phone number must be 10 digits and start with 6-9.");
      return;
    }

    try {
      setResult("Sending....");
      const formData = new FormData();
      formData.append("name", fullName);
      formData.append("email", emailAddress);
      formData.append("phone", phoneNumber);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append("access_key", "7d9a4465-4f2b-4a48-a607-d5e350d98028");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        setForm({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setSubmitted(false);
        showPopup("success", "Form submitted successfully!");
      } else {
        setResult("Error");
        showPopup("error", "Submission failed. Please try again.");
      }
    } catch (error) {
      showPopup("error", error.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex h-full flex-1 flex-col rounded-[16px] bg-[#FACDD1] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-6 relative">
      {popup.show && (
        <div
          className={`fixed left-1/2 top-8 z-50 -translate-x-1/2 rounded px-6 py-3 shadow-lg text-white text-sm font-medium transition-all duration-300
            ${popup.type === "success" ? "bg-green-500" : "bg-rose-500"}`}
        >
          {popup.message}
        </div>
      )}
      <h3 className="text-center font-semibold text-slate-900 mb-4">
        Send us a Message
      </h3>
      <form
        className="flex flex-1 flex-col gap-3"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="fullName"
            className="text-xs font-medium text-slate-900"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Riya Sharma"
            value={form.fullName}
            onChange={handleChange}
            className="w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          />
          {submitted && errors.fullName && (
            <span className="text-xs text-red-500">{errors.fullName}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="email"
            className="text-xs font-medium text-slate-900"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="riya@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          />
          {submitted && errors.email && (
            <span className="text-xs text-red-500">{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-slate-900"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 9999999999"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          />
          {submitted && errors.phone && (
            <span className="text-xs text-red-500">{errors.phone}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="subject"
            className="text-xs font-medium text-slate-900"
          >
            Subject
          </label>
          <select
            id="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          >
            <option value="" disabled>
              Select Subject
            </option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Home Loan">Home Loan</option>
            <option value="Business Loan">Business Loan</option>
            <option value="Vehicle Loan">Vehicle Loan</option>
            <option value="Agriculture Loan">Agriculture Loan</option>
            <option value="Education Loan">Education Loan</option>
            <option value="Govt. Scheme Loan">Govt. Scheme Loan</option>
            <option value="MSME Loan">MSME Loan</option>
          </select>
          {submitted && errors.subject && (
            <span className="text-xs text-red-500">{errors.subject}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="message"
            className="text-xs font-medium text-slate-900"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us how we can help you..."
            value={form.message}
            onChange={handleChange}
            className="min-h-[72px] w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm"
        >
          Send Message
        </button>
        
      </form>
    </div>
  );
}

export default ContactFormBlock
