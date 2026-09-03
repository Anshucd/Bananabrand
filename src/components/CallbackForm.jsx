import React, { useState } from "react";
import { Arrow } from "./Icons";
import { callbackServices } from "../data/content";
import { supabase } from "../lib/supabaseClient";

const initial = {
  name: "",
  phone: "",
  email: "",
  service: "",
  time: "",
  message: "",
};
export default function CallbackForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const bestTimeMap = {
        "Morning (9 AM – 12 PM)": "Morning",
        "Afternoon (12 PM – 4 PM)": "Afternoon",
        "Evening (4 PM – 7 PM)": "Evening",
      };

      const bestTime = bestTimeMap[form.time];

      const { error } = await supabase.rpc("submit_callback_request", {
        p_full_name: form.name,
        p_phone_number: form.phone,
        p_email: form.email,
        p_best_time: bestTime,
        p_service: form.service,
        p_project_details: form.message,
      });

      if (error) {
        console.error("Supabase error:", error);
        alert("Something went wrong. Please try again.");
        return;
      }

      setSent(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="callback" id="callback">
      <div className="callbackIntro">
        <span className="eyebrow">REQUEST A CALL BACK</span>
        <h2>
          Let's talk about <span>your next move.</span>
        </h2>
        <p>
          Share a few details and our team can get back to you with the right
          next step.
        </p>
        <div className="callbackPoints">
          <div>
            <b>01</b>
            <span>Tell us what you need</span>
          </div>
          <div>
            <b>02</b>
            <span>Choose a convenient time</span>
          </div>
          <div>
            <b>03</b>
            <span>We'll get in touch</span>
          </div>
        </div>
      </div>
      <div className="callbackCard">
        {sent ? (
          <div className="success">
            <div className="successIcon">✓</div>
            <h3>Request received.</h3>
            <p>
              Thanks, {form.name || "there"}! Your callback request is ready.
              Connect your form to your backend/email service to receive
              submissions.
            </p>
            <button
              className="primaryBtn"
              onClick={() => {
                setSent(false);
                setForm(initial);
              }}
            >
              Send Another <Arrow />
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="formGrid">
              <label>
                Full Name
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="+91 9876XXXXXX"
                  type="tel"
                  required
                />
              </label>
            </div>
            <div className="formGrid">
              <label>
                Email
                <input
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  type="email"
                  required
                />
              </label>
              <label>
                Best Time
                <select
                  name="time"
                  value={form.time}
                  onChange={update}
                  required
                >
                  <option value="">Select a time</option>
                  <option>Morning (9 AM – 12 PM)</option>
                  <option>Afternoon (12 PM – 4 PM)</option>
                  <option>Evening (4 PM – 7 PM)</option>
                </select>
              </label>
            </div>
            <label>
              What can we help with?
              <select
                name="service"
                value={form.service}
                onChange={update}
                required
              >
                <option value="">Select a service</option>
                {callbackServices.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label>
              Briefly tell us about your project
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                placeholder="Tell us about your business, goals or idea..."
                rows="4"
              />
            </label>
            <button
              className="primaryBtn submitBtn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Request a Call Back"}
              {!loading && <Arrow />}
            </button>
            <small className="formNote">
              Your details are used only to respond to this request.
            </small>
          </form>
        )}
      </div>
    </section>
  );
}
