"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
    FaArrowRight,
    FaChevronDown,
    FaEnvelope,
    FaLock,
    FaPhoneAlt,
    FaUser,
} from "react-icons/fa";
import { PiSparkleFill } from "react-icons/pi";
import { MdOutlinePlace } from "react-icons/md";

const InputField = ({
    icon: Icon,
    placeholder,
    type,
    name,
    required = false,
}) => (
    <div className="group flex items-center gap-3 bg-white border border-purple-100 rounded-xl px-4 py-3.5 w-full transition-all duration-200 hover:border-purple-200 focus-within:border-purple-400 focus-within:ring-4 focus-within:ring-purple-100">
        <Icon
            className="text-[#7D45C2] shrink-0 group-focus-within:text-purple-600 transition-colors"
            size={16}
        />

        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full outline-none text-sm text-gray-800 placeholder:text-gray-400 bg-transparent"
        />
    </div>
);

const SelectField = ({
    icon: Icon,
    label,
    options,
    name,
    required = false,
}) => (
    <div className="group relative flex items-center gap-3 bg-white border border-purple-100 rounded-xl px-4 py-3.5 w-full transition-all duration-200 hover:border-purple-200 focus-within:border-purple-400 focus-within:ring-4 focus-within:ring-purple-100">
        <Icon
            className="text-purple-800/70 shrink-0 group-focus-within:text-purple-600 transition-colors"
            size={17}
        />

        <select
            name={name}
            defaultValue=""
            required={required}
            className="w-full outline-none text-sm text-gray-500 bg-transparent appearance-none cursor-pointer pr-5"
        >
            <option value="" disabled>
                {label}
            </option>

            {options.map((opt) => (
                <option key={opt} value={opt} className="text-gray-700">
                    {opt}
                </option>
            ))}
        </select>

        <FaChevronDown
            className="absolute right-4 text-gray-400 pointer-events-none"
            size={11}
        />
    </div>
);

export default function FormSection() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const data = {
            platform: "Solvestic",
            platformEmail: "solvesticwellness@gmail.com",

            // Form fields
            name: formData.get("contactPerson"),
            email: formData.get("email"),
            company: "N/A",
            phone: formData.get("phone"),
            product: formData.get("skinConcern"),
            place: formData.get("place"),
            message: "N/A",
        };

        // Validate phone
        if (!data.phone || data.phone.toString().length < 10) {
            toast.error("Enter Valid Phone Number");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "https://brandbnalo.com/api/form/add",
                data,
                {
                    validateStatus: (status) => status >= 200 && status < 500,
                },
            );

            if (res.status >= 200 && res.status < 300) {
                setSubmitted(true);

                toast.success("Successfully joined the waitlist!");

                // Reset form
                setTimeout(() => {
                    form.reset();
                }, 100);

                // Hide success state
                setTimeout(() => {
                    setSubmitted(false);
                }, 3000);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.log("ERROR:", err?.response || err.message);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            id="form"
            onSubmit={handleSubmit}
            className="w-full max-w-6xl px-5 py-8 mx-auto scroll-mt-10  "
        >
            {/* Form Heading */}
            <div className="mb-6">
                <h3 className="text-xl sm:text-5xl font-semibold text-purple-950">
                    Join Our Waitlist
                </h3>

                <p className="mt-1.5 text-sm text-gray-500">
                    Be the first to know when we launch. Get exclusive updates and
                    skincare tips.
                </p>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-2 mb-3">
                <InputField
                    icon={FaUser}
                    placeholder="Full Name"
                    name="contactPerson"
                    required
                />

                <InputField
                    icon={FaEnvelope}
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    required
                />

                <InputField
                    icon={FaPhoneAlt}
                    placeholder="Phone Number"
                    type="tel"
                    name="phone"
                    required
                />

                <InputField
                    icon={MdOutlinePlace}
                    placeholder="Place"
                    type="text"
                    name="place"
                    required
                />

                <SelectField
                    icon={PiSparkleFill}
                    label="Skin Concern"
                    name="skinConcern"
                    required
                    options={[
                        "Pigmentation",
                        "Dryness",
                        "Dull & Uneven Skin",
                        "Acne & Blemishes",
                        "Fine Lines",
                        "Sensitive Skin",
                    ]}
                />
            </div>

            {/* Submit Button */}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Launch Offer - 70% */}
                <div className="relative inline-flex w-full flex-1 sm:flex-[7]">
                    {/* Animated border */}
                    <span className="pointer-events-none absolute inset-0 rounded-full border border-purple-500 animate-[borderPing_1.8s_ease-out_infinite]" />

                    {/* Content */}
                    <div className="relative z-10 inline-flex w-full justify-center items-center gap-2 rounded-full border border-purple-200/70 bg-[#7D45C2] px-4 py-2 shadow-sm">
                        <span className="ml-3 text-center text-sm font-semibold tracking-tight text-white">
                            A chance to be featured on Solvestic’s website.
                        </span>
                    </div>
                </div>

                {/* Join Waitlist Button - 30% */}
                <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full flex-1 items-center justify-center gap-2 rounded-xl bg-[#7D45C2] px-5 py-2 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-purple-800 hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:flex-[3]"
                >
                    <span>
                        {loading
                            ? "Submitting..."
                            : submitted
                                ? "Joined Successfully!"
                                : "Join Waitlist"}
                    </span>

                    {!loading && !submitted && (
                        <FaArrowRight
                            size={13}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    )}
                </button>
            </div>



            {/* Privacy Text */}
            <p className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-gray-400 mt-3">
                <FaLock size={10} />
                Your information is safe with us. No spam, ever.
            </p>
        </form>
    );
}
