// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                  <h2 className="text-xl font-bold mb-4">Key Features</h2>
       <ul className="list-disc pl-5 space-y-4">
    <li>
      <strong>Level-Wise Progression:</strong> Users begin at Level 0 with simplified concepts, advancing through engaging sections like Women Safety, Traffic Rules, and Men’s Rights.
    </li>
    <li>
      <strong>Interactive Content:</strong> Each section features MCQs, quizzes, and flashcards designed to reinforce knowledge through active participation.
    </li>
    <li>
      <strong>Group Learning & Competition:</strong>
      <ul className="list-disc pl-5 mt-2">
        <li><strong>Collaborative Learning:</strong> Users can form groups, compete, and learn together, enhancing retention and encouraging teamwork.</li>
        <li><strong>Leaderboards:</strong> Track progress and rank among peers, motivating users to stay engaged and continue learning.</li>
      </ul>
    </li>
    <li>
      <strong>Discussion Forum:</strong>
      <ul className="list-disc pl-5 mt-2">
        <li><strong>UPSC & Beyond:</strong> A dedicated space for aspirants and users to discuss exam preparation, share resources, and seek advice on challenges faced in real-life scenarios.</li>
        <li><strong>Community Support:</strong> Foster a supportive learning environment where users help each other navigate complex topics.</li>
      </ul>
    </li>
    <li>
      <strong>Weekly Story-Based Challenges:</strong>
      <ul className="list-disc pl-5 mt-2">
        <li><strong>Practical Scenarios:</strong> Users tackle real-life, story-driven challenges that apply constitutional principles in everyday situations.</li>
        <li><strong>Competitive Edge:</strong> Weekly competitions encourage continuous learning and reward users with badges and recognition.</li>
      </ul>
    </li>
    <li>
      <strong>Admin Profile & Management:</strong>
      <ul className="list-disc pl-5 mt-2">
        <li><strong>Content Moderation:</strong> Admins manage quizzes, challenges, and forum discussions to ensure high-quality, relevant content.</li>
        <li><strong>User Analytics:</strong> Track user progress, engagement, and provide insights to optimize learning experiences.</li>
      </ul>
    </li>
  </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}