import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import constimg from "../assets/constimg.jpg";
import './Home.css'; // Ensure this is linked to apply styles

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-5 sm:pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    {/* First Section */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0">
                        <p className="flex-1 text-left sm:mr-4">
                            <strong>Nagrik Aur Samvidhan</strong> is an interactive web platform designed to
                            simplify and promote constitutional literacy among citizens. The
                            platform offers a gamified learning experience, where users
                            progress through levels covering essential topics like Women
                            Safety, Traffic Rules, and Men’s Rights. Each section includes
                            quizzes, MCQs, and flashcards to reinforce learning. The platform
                            also features group learning, allowing users to form teams and
                            compete, fostering collaboration and engagement. A discussion
                            forum is available for UPSC aspirants and others to discuss
                            challenges, share resources, and seek advice. Additionally, weekly
                            story-based challenges present real-life scenarios to help users
                            apply constitutional principles practically.
                        </p>
                        <div className="flex-none">
                            <img
                                className={`w-106 h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 ${isScrolled ? "animate-colorChange" : ""}`}
                                src={constimg}
                                alt="image1"
                            />
                        </div>
                    </div>

                    {/* Quote Section */}
                    <div className="text-center sm:text-right mt-8 sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-black">
                            Start Learning
                            <span className="animate-bounce hidden sm:block text-4xl text-black">
                                Constitution with Fun
                            </span>
                        </h2>
                        <Link
                            className="inline-flex mt-6 text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Let's Learn
                        </Link>
                    </div>

                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-1 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-4 ">
                            <img
                                className={`md:7/12 lg:w-6/12 mx-1 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0  ${isScrolled ? "animate-colorChange" : ""}`}
                                src="https://www.memeraki.com/cdn/shop/articles/WhatsApp_Image_2024-01-23_at_4.11.25_PM_1024x.jpg?v=1706006528"
                                alt="image2"
                            />
                            <div className="quote-container">
                                <p className="quote-text">
                                    "Constitution is not a mere lawyers' document, it is a vehicle of Life, and its spirit is always the spirit of Age"
                                </p>
                                <p className="quote-author">— Dr. Bhimrao Ramji Ambedkar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Nagrik Aur Samvidhan
            </h1>
        </div>
    );
}
