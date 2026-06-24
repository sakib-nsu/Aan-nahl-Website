import React, { useState } from "react";

import aminur from "../images/Md Aminur Islam.jpg";
import talat from "../images/Talat Mohammad.jpg";
import mainuddin from "../images/Mainuddin Ahmed.jpg";
import mosarouf from "../images/Md Mosarouf Hossain.jpg";
import nafiu from "../images/Md. Nafiu Ibne Mazhar.jpg";
import shamsur from "../images/Mohammad Shamsur Rahman.jpg";
import nazmus from "../images/Nazmus Sadat.jpg";
import sifat from "../images/Oli Ullah Sifat.jpg";

const members = [
  {
    id: 1,
    name: "Md Aminur Islam",
    designation: "Chief Executive Officer",
    category: "Leadership",
    image: aminur,
    description:
      "Md Aminur Islam leads the organization with strategic vision and executive leadership. He oversees business growth, operations, and long-term organizational success.",
  },
  {
    id: 2,
    name: "Talat Mohammad",
    designation: "Chief Technology Officer",
    category: "Technology",
    image: talat,
    description:
      "Talat Mohammad manages technology strategy, software development, infrastructure, cybersecurity, and digital transformation initiatives.",
  },
  {
    id: 3,
    name: "Mainuddin Ahmed",
    designation: "Head of Admin, HR, Compliance and GR",
    category: "Admin",
    image: mainuddin,
    description:
      "Mainuddin Ahmed oversees administration, human resources, compliance management, and government relations activities.",
  },
  {
    id: 4,
    name: "Md Mosarouf Hossain",
    designation: "Chief Business Officer",
    category: "Business",
    image: mosarouf,
    description:
      "Md Mosarouf Hossain leads business development, strategic partnerships, revenue growth, and market expansion initiatives.",
  },
  {
    id: 5,
    name: "Nazmus Sadat",
    designation: "Project Manager",
    category: "Management",
    image: nazmus,
    description:
      "Nazmus Sadat coordinates projects, teams, timelines, resources, and client requirements to ensure successful delivery.",
  },
  {
    id: 6,
    name: "Mohammad Shamsur Rahman",
    designation: "General Manager (Business Development)",
    category: "Business",
    image: shamsur,
    description:
      "Mohammad Shamsur Rahman drives business development strategies, client acquisition, and corporate growth initiatives.",
  },
  {
    id: 7,
    name: "Oli Ullah Sifat",
    designation: "Head of Quality Control",
    category: "Quality",
    image: sifat,
    description:
      "Oli Ullah Sifat manages quality assurance processes, standards, compliance, and performance monitoring.",
  },
  {
    id: 8,
    name: "Md. Nafiu Ibne Mazhar",
    designation: "Team Lead",
    category: "Management",
    image: nafiu,
    description:
      "Md. Nafiu Ibne Mazhar leads teams, manages workflows, and ensures operational efficiency and project success.",
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      {/* Unique Banner */}
      <section className="relative overflow-hidden bg-[#F7F3EA] px-6 pb-24 pt-44 text-[#1F2937]">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E8DCC7]/50 blur-3xl"></div>
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#F5C77E]/35 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full border border-[#C9892B]/25 bg-white/70 px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#B36B12]">
                Meet Our Experts
              </p>

              <h1 className="text-5xl font-extrabold leading-tight text-[#2B241D] md:text-7xl">
                Our Creative <br />
                <span className="text-[#C9892B]">Leadership Team</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B6258]">
                A dedicated team of professionals working together to build
                reliable, scalable, and high-quality digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {members.slice(0, 8).map((member, index) => (
                <img
                  key={member.id}
                  src={member.image}
                  alt={member.name}
                  className={`h-24 w-24 rounded-3xl object-cover shadow-xl ring-4 ring-white transition duration-500 hover:-translate-y-3 hover:scale-105 ${
                    index % 2 === 0 ? "mt-10" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      {!selectedMember && (
        <section className="bg-white px-4 py-20">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl font-extrabold text-[#061b3a]">
              Team Members
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Click any member to view full profile information.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-white p-6 text-center shadow-lg ring-1 ring-slate-100 transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
                >
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-[#061b3a] to-[#00a86b]"></div>

                  <div className="relative mx-auto mt-8 h-44 w-44">
                    <div className="absolute inset-0 rounded-full bg-[#00a86b] transition duration-500 group-hover:scale-110"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative h-44 w-44 rounded-full border-4 border-white object-cover shadow-xl"
                    />
                  </div>

                  <div className="relative mt-6">
                    <span className="rounded-full bg-[#00a86b]/10 px-4 py-1 text-xs font-bold uppercase text-[#00a86b]">
                      {member.category}
                    </span>

                    <h3 className="mt-4 text-2xl font-extrabold text-[#061b3a]">
                      {member.name}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-lg font-bold leading-tight text-[#00a86b]">
                      {member.designation}
                    </p>

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                      {member.description}
                    </p>

                    <button className="mt-7 rounded-full bg-[#00a86b] px-8 py-3 text-sm font-extrabold text-white transition duration-300 group-hover:bg-[#061b3a]">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Member Details */}
      {selectedMember && (
        <section className="bg-slate-50 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <button
              onClick={() => setSelectedMember(null)}
              className="mb-10 rounded-full bg-[#061b3a] px-7 py-3 font-bold text-white transition hover:bg-[#00a86b]"
            >
              ← Back To Team
            </button>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative bg-gradient-to-br from-[#061b3a] to-[#00a86b] p-10">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="h-full max-h-[560px] w-full rounded-[2rem] object-cover shadow-2xl"
                  />
                </div>

                <div className="p-10 lg:p-14">
                  <span className="rounded-full bg-[#00a86b]/10 px-5 py-2 text-sm font-extrabold uppercase text-[#00a86b]">
                    {selectedMember.category}
                  </span>

                  <h2 className="mt-6 text-4xl font-extrabold text-[#061b3a] md:text-5xl">
                    {selectedMember.name}
                  </h2>

                  <p className="mt-4 text-2xl font-extrabold text-[#00a86b]">
                    {selectedMember.designation}
                  </p>

                  <p className="mt-8 text-lg leading-9 text-slate-700">
                    {selectedMember.description}
                  </p>

                  <div className="mt-10 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-slate-50 p-5">
                      <h4 className="font-extrabold text-[#061b3a]">
                        Department
                      </h4>
                      <p className="mt-2 text-slate-600">
                        {selectedMember.category}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5">
                      <h4 className="font-extrabold text-[#061b3a]">
                        Status
                      </h4>
                      <p className="mt-2 text-slate-600">Active Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}