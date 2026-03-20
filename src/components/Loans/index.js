"use client";
import capitalizeFirstLetter from "@/app/utils/capitalize-first-letter";
import features from "@/app/utils/features";
import React from "react";

const LoansPage = ({ intent, type, city }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let payload = Object.fromEntries(formData.entries());
        payload = { ...payload, intent, type, pathCity: city, source: "website" };

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

    return (
        <div className="min-h-screen bg-white text-gray-800">

            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* 🟣 Logo / Brand */}
                    <div className="text-xl md:text-3xl font-bold text-blue-600 tracking-tight">
                        QueryQ
                    </div>

                    {/* 🔵 CTA */}
                    <button
                        onClick={handleClick}
                        className="bg-blue-500 hover:bg-blue-400 cursor-pointer text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition"
                    >
                        Check Eligibility
                    </button>

                </div>
            </header>

            {/* 🔴 HERO SECTION */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-5xl mx-auto">
                    Get {intent} {type} in {city} – Approved in 24 Hours
                </h1>

                <p className="text-lg md:text-xl mb-6">
                    ✔ {type} available in {city} <br />
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
                    👉 Why People in {city} Choose Us:
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
                        Check Your {type} Eligibility in {city}
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

            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg border border-indigo-100">

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                        {capitalizeFirstLetter(intent)} {type} in {city}
                    </h2>

                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        Looking for <span className="font-semibold text-indigo-600">{intent} {type}</span> in{" "}
                        <span className="font-semibold text-indigo-600">{city}</span>? We help you get approved quickly with
                        minimum documentation and best interest rates.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Whether you are in {city} looking for urgent funds or planning your finances,
                        our experts ensure smooth, transparent, and fast processing.
                    </p>

                    {/* 🔥 CTA inside content */}
                    <div className="mt-8">
                        <button
                            onClick={handleClick}
                            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
                        >
                            Check Eligibility Now →
                        </button>
                    </div>

                </div>
            </section>

            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                        Benefits of {type} in {city}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 hover:-translate-y-2">
                            <div className="text-3xl mb-3">⚡</div>
                            <h3 className="font-semibold text-lg mb-2">
                                Instant Approval
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Quick approval for {intent} {type}
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 hover:-translate-y-2">
                            <div className="text-3xl mb-3">💰</div>
                            <h3 className="font-semibold text-lg mb-2">
                                Low Interest Rates
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Best rates available in {city}
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 hover:-translate-y-2">
                            <div className="text-3xl mb-3">📄</div>
                            <h3 className="font-semibold text-lg mb-2">
                                Minimal Documentation
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Hassle-free process with fewer documents
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 hover:-translate-y-2">
                            <div className="text-3xl mb-3">📅</div>
                            <h3 className="font-semibold text-lg mb-2">
                                Flexible Repayment
                            </h3>
                            <p className="text-gray-500 text-sm">
                                EMI options tailored for you
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* 🟣 URGENCY SECTION */}
            <section className="bg-yellow-100 py-12 px-6 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    👉 Limited-Time Offer:
                </h2>

                <p className="text-lg">
                    Get lowest interest {type} deals in {city} this week only <br />
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

            <footer className="text-center text-xs text-gray-500 py-2 px-4 border-t mt-10">
                All claims and offers are subject to conditions; content shown is for illustrative/placeholder purposes and may not reflect actual terms.
            </footer>

        </div>
    );
};

export default LoansPage;