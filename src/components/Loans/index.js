"use client";
import React from "react";

const LoansPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());
        const res = await fetch("/api/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (data.success) {
            alert("Request submitted 🚀");
        }
    };

    const handleClick = () => {
        const ele = document.getElementById("#contactForm");
        if (ele) {
            ele.scrollIntoView({ behavior: "smooth" });
        }
    }

    const features = [
        {
            icon: "📈",
            title: "5000+",
            subtitle: "Loans Approved",
        },
        {
            icon: "🏦",
            title: "15+",
            subtitle: "Banking Partners",
        },
        {
            icon: "💰",
            title: "0 Hidden Fees",
            subtitle: "100% Transparency",
        },
        {
            icon: "⚡",
            title: "Fast",
            subtitle: "Processing & Approval",
        },
    ]

    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* 🔴 HERO SECTION */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Get Loan Approved in 24 Hours from Top Banks
                </h1>

                <p className="text-lg md:text-xl mb-6">
                    ✔ Personal Loan | Home Loan | Business Loan <br />
                    ✔ Lowest Interest Rates Starting 6.5% <br />
                    ✔ 100% Free Consultation
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <button className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg font-semibold shadow" onClick={handleClick}>
                        🔵 Get Callback in 10 Minutes
                    </button>

                    {/* <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-lg font-semibold shadow"
                    >
                        🟢 Chat on WhatsApp (Instant Approval Help)
                    </a> */}
                </div>
            </section>

            {/* 🟡 TRUST SECTION */}
            <section className="py-12 px-6 text-center bg-gray-50">
                <h2 className="text-2xl font-bold mb-6">
                    👉 Why People Choose Us:
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
                        >
                            <div className="text-4xl mb-3 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 mt-1 text-sm">
                                {item.subtitle}
                            </p>

                            {/* subtle bottom accent */}
                            <div className="mt-4 h-1 w-0 bg-indigo-500 mx-auto group-hover:w-12 transition-all duration-300 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🟢 FORM SECTION */}
            <section className="py-16 px-6" id="#contactForm">
                <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Check Your Loan Eligibility
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="w-full p-3 border rounded-lg"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            className="w-full p-3 border rounded-lg"
                        />

                        <select name="loanType" className="w-full p-3 border rounded-lg">
                            <option>Loan Type</option>
                            <option>Personal Loan</option>
                            <option>Home Loan</option>
                            <option>Business Loan</option>
                            <option>Others</option>
                        </select>

                        <input
                            type="number"
                            name="amount"
                            placeholder="Loan Amount"
                            required
                            className="w-full p-3 border rounded-lg"
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            required
                            className="w-full p-3 border rounded-lg"
                        />

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-lg font-semibold"
                        >
                            Check My Eligibility Now
                        </button>
                    </form>
                </div>
            </section>

            {/* 🟣 URGENCY SECTION */}
            <section className="bg-yellow-100 py-12 px-6 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    👉 Limited-Time Offer:
                </h2>

                <p className="text-lg">
                    Get lowest interest deals this week only <br />
                    Priority approval for first 50 applicants
                </p>
            </section>

            {/* 🟤 STICKY WHATSAPP BUTTON
            <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-400 text-white px-5 py-3 rounded-full shadow-lg font-semibold"
            >
                💬 Talk to Loan Expert
            </a> */}

        </div>
    );
};

export default LoansPage;