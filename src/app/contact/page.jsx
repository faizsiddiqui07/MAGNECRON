"use client";

import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
  X,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import React, { useState } from "react";
import axios from "axios";
import { base_url } from "../../config/config";
import contactImage from "../../assets/ContactImage.webp";


const ContactPage = () => {
  const [formStatus, setFormStatus] = useState("idle"); 
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await axios.post(
        `${base_url}/api/contact-query`,
        formData,
      );

      if (response.data.success) {
        showToast(
          "success",
          response.data.message || "Query submitted successfully.",
        );
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          message: "",
        });
      } else {
        showToast("error", response.data.message || "Failed to submit query.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMsg =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      showToast("error", errorMsg);
    } finally {
      setFormStatus("idle");
    }
  };

  return (
    <div className="animate-fade-in flex flex-col w-full h-full grow relative">
      {/* CUSTOM TOAST NOTIFICATION */}
      {toast.show && (
        <div
          className={`fixed top-24 right-4 z-50 p-4 border animate-fade-in flex items-start gap-4 min-w-75 max-w-sm shadow-xl
            ${toast.type === "success" ? "bg-neutral-900 border-[#231e15]" : "bg-[#060606]/90 border-[#58482a]"}
          `}
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === "success" ? (
              <CheckCircle2 className="text-[#C7B390]" size={20} />
            ) : (
              <AlertCircle className="text-red-500" size={20} />
            )}
          </div>
          <div className="grow">
            <h4
              className={`text-sm font-bold uppercase tracking-widest mb-1 ${toast.type === "success" ? "text-[#C7B390]" : "text-red-500"}`}
            >
              {toast.type === "success" ? "Success" : "Error"}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => setToast({ show: false, type: "", message: "" })}
            className="shrink-0 text-gray-500 hover:text-[#fcfcfc] transition-colors"
          >
            <X size={16}/>
          </button>
        </div>
      )}

      {/* Hero Contact */}
      <div className="w-full h-[40vh] relative border-b border-[#fcfcfc]">
        <img
          src={contactImage.src}
          alt="Contact"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-[#fcfcfc]">
              Get In Touch
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 py-16 w-full flex flex-col md:flex-row gap-16">
        {/* Contact Form */}
        <div className="md:w-3/5">
          <h3 className="text-3xl font-bold uppercase mb-8 pb-4 border-b border-neutral-800">
            Send an Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-neutral-700 p-4 focus:outline-none focus:border-[#fcfcfc] transition-all bg-neutral-900 text-[#fcfcfc]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-neutral-700 p-4 focus:outline-none focus:border-[#fcfcfc] transition-all bg-neutral-900 text-[#fcfcfc]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                Company / Institution *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-neutral-700 p-4 focus:outline-none focus:border-[#fcfcfc] transition-all bg-neutral-900 text-[#fcfcfc]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-neutral-700 p-4 focus:outline-none focus:border-[#fcfcfc] transition-all bg-neutral-900 text-[#fcfcfc]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                Message *
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-neutral-700 p-4 focus:outline-none focus:border-[#C7B390] transition-all bg-neutral-900 text-[#fcfcfc]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="bg-[#C7B390] text-[#060606] px-8 py-4 uppercase tracking-widest font-bold w-full md:w-auto hover:bg-[#fcfcfc] transition-colors disabled:bg-gray-500"
            >
              {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>

        {/* Global Offices & Socials */}
        <div className="md:w-2/5">
          <div className="bg-neutral-900 p-8 border border-neutral-800">
            <h3 className="text-2xl font-bold uppercase mb-8 pb-4 border-b border-[#C7B390] text-[#fcfcfc]">
              Headquarter
            </h3>

            <div className="space-y-8">
              <div className="flex items-start text-[#fcfcfc]">
                <MapPin
                  className="mr-4 mt-1 shrink-0 text-[#C7B390]"
                  size={20}
                />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">
                    Lucknow
                  </h4>
                  <p className="text-gray-400">India</p>
                </div>
              </div>

              <div className="flex items-start text-[#fcfcfc]">
                <Phone
                  className="mr-4 mt-1 shrink-0 text-[#C7B390]"
                  size={20}
                />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">
                    Phone
                  </h4>
                  <p className="text-gray-400">+91 9119897772</p>
                </div>
              </div>

              <div className="flex items-start text-[#fcfcfc]">
                <Mail className="mr-4 mt-1 shrink-0 text-[#C7B390]" size={20} />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">
                    Email
                  </h4>
                  <p className="text-gray-400">contact@magnecron.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Links Section */}
            <h3 className="text-xl font-bold uppercase mt-12 mb-6 pb-4 border-b border-neutral-800 text-[#fcfcfc]">
              Connect With Us
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://twitter.com/magnecron"
                target="_blank"
                rel="noreferrer"
                className="flex items-center group text-gray-400 hover:text-[#fcfcfc] transition-colors"
              >
                <div className="w-10 h-10 border border-neutral-800 group-hover:border-[#C7B390] flex items-center justify-center mr-3 transition-colors bg-[#060606]">
                  <FaXTwitter size={18} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">
                  X
                </span>
              </a>

              <a
                href="https://facebook.com/magnecron"
                target="_blank"
                rel="noreferrer"
                className="flex items-center group text-gray-400 hover:text-[#fcfcfc] transition-colors"
              >
                <div className="w-10 h-10 border border-neutral-800 group-hover:border-[#C7B390] flex items-center justify-center mr-3 transition-colors bg-[#060606]">
                  <FaFacebook size={18} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">
                  Facebook
                </span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center group text-gray-400 hover:text-[#fcfcfc] transition-colors"
              >
                <div className="w-10 h-10 border border-neutral-800 group-hover:border-[#C7B390] flex items-center justify-center mr-3 transition-colors bg-[#060606]">
                  <FaLinkedin size={18} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://youtube.com/magnecron"
                target="_blank"
                rel="noreferrer"
                className="flex items-center group text-gray-400 hover:text-[#fcfcfc] transition-colors"
              >
                <div className="w-10 h-10 border border-neutral-800 group-hover:border-[#C7B390] flex items-center justify-center mr-3 transition-colors bg-[#060606]">
                  <FaYoutube size={18} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">
                  YouTube
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;