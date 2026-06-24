import React, { useMemo, useRef, useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full Time",
    mode: "Remote",
    location: "Dhaka / Remote",
    experience: "1-3 Years",
    tags: ["React", "Next.js", "Tailwind", "API"],
    description:
      "Build responsive, modern, and scalable frontend applications using React-based technologies.",
    responsibilities: [
      "Develop clean and reusable UI components.",
      "Connect frontend with REST APIs.",
      "Optimize website speed and responsiveness.",
      "Work closely with designers and backend developers.",
    ],
    requirements: [
      "Good knowledge of React and JavaScript.",
      "Experience with Tailwind CSS.",
      "Basic understanding of API integration.",
      "Ability to write clean and maintainable code.",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full Time",
    mode: "Hybrid",
    location: "Dhaka",
    experience: "2+ Years",
    tags: ["Figma", "Design System", "Prototype"],
    description:
      "Design beautiful, user-friendly digital products with strong attention to detail.",
    responsibilities: [
      "Create wireframes, UI designs, and prototypes.",
      "Maintain consistent design systems.",
      "Collaborate with development teams.",
      "Improve user experience based on feedback.",
    ],
    requirements: [
      "Strong Figma skills.",
      "Good understanding of typography and layout.",
      "Portfolio with previous UI/UX projects.",
      "Creative problem-solving mindset.",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    type: "Part Time",
    mode: "Onsite",
    location: "Chattogram",
    experience: "Fresh / 1 Year",
    tags: ["SEO", "Meta Ads", "Analytics"],
    description:
      "Plan and execute digital marketing campaigns to grow brand visibility and leads.",
    responsibilities: [
      "Manage SEO and social media campaigns.",
      "Run Meta Ads and monitor results.",
      "Prepare performance reports.",
      "Research keywords and competitors.",
    ],
    requirements: [
      "Basic digital marketing knowledge.",
      "Understanding of SEO and analytics.",
      "Good communication skills.",
      "Creative content planning ability.",
    ],
  },
];

const benefits = [
  {
    icon: "🚀",
    title: "Fast Growth",
    text: "Learn new skills, take ownership, and grow your career faster.",
  },
  {
    icon: "🌍",
    title: "Flexible Work",
    text: "Remote, hybrid, and flexible working options for better balance.",
  },
  {
    icon: "💡",
    title: "Creative Culture",
    text: "Share ideas, build better products, and work with freedom.",
  },
  {
    icon: "🏆",
    title: "Recognition",
    text: "Your contribution matters and your success is celebrated.",
  },
];

export default function Career() {
  const cvInputRef = useRef(null);

  const [activeType, setActiveType] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyJob, setApplyJob] = useState(null);
  const [toast, setToast] = useState("");
  const [uploadedCv, setUploadedCv] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
    cv: null,
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchType = activeType === "All" || job.type === activeType;
      const matchSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase()) ||
        job.tags.join(" ").toLowerCase().includes(search.toLowerCase());

      return matchType && matchSearch;
    });
  }, [activeType, search]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  const scrollToJobs = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCvButtonClick = () => {
    cvInputRef.current?.click();
  };

  const handleCvUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedCv(file);
    showToast(`CV selected: ${file.name}`);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      showToast("Please fill all required fields.");
      return;
    }

    showToast(`Application submitted for ${applyJob.title}`);
    setApplyJob(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      portfolio: "",
      message: "",
      cv: null,
    });
  };

  return (
    <main className="career-page">
      {toast && <div className="toast">{toast}</div>}

      <input
        ref={cvInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleCvUpload}
        hidden
      />

      <style>{`
        * {
          box-sizing: border-box;
        }

        .career-page {
          min-height: 100vh;
          color: #1f2937;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
          background: transparent;
        }

        .career-container {
          width: min(1180px, 92%);
          margin: 0 auto;
        }

        .hero {
          position: relative;
          padding: 150px 0 90px;
          background: transparent;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 18px;
          border: 1px solid rgba(255, 152, 40, 0.28);
          border-radius: 999px;
          background: rgba(255, 152, 40, 0.06);
          color: #ff9828;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .pulse {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ff9828;
          box-shadow: 0 0 0 8px rgba(255, 152, 40, .14);
        }

        .hero h1 {
          font-size: clamp(44px, 7vw, 78px);
          line-height: 1.04;
          letter-spacing: -3px;
          margin: 0 0 24px;
          font-weight: 950;
          color: #111827;
        }

        .gradient-text {
          background: linear-gradient(90deg, #ff9828, #f97316, #111827);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero p {
          max-width: 650px;
          color: #4b5563;
          font-size: 18px;
          line-height: 1.85;
          margin: 0 0 34px;
        }

        .hero-actions,
        .modal-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .btn {
          border: 0;
          cursor: pointer;
          text-decoration: none;
          padding: 15px 24px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: .08em;
          transition: .25s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-primary {
          background: #ff9828;
          color: #fff;
          box-shadow: 0 16px 38px rgba(255, 152, 40, .22);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          background: #f58212;
        }

        .btn-secondary {
          background: #fff;
          color: #111827;
          border: 1px solid #e5e7eb;
          box-shadow: 0 12px 30px rgba(17, 24, 39, 0.07);
        }

        .btn-secondary:hover {
          color: #ff9828;
          border-color: rgba(255, 152, 40, .45);
          transform: translateY(-3px);
        }

        .cv-name {
          width: 100%;
          margin-top: 12px;
          color: #ff9828;
          font-size: 13px;
          font-weight: 800;
        }

        .hero-card {
          padding: 30px;
          border-radius: 34px;
          background: #fff;
          border: 1px solid #eef0f3;
          box-shadow: 0 24px 70px rgba(17, 24, 39, 0.09);
        }

        .stat {
          padding: 24px;
          border-radius: 24px;
          background: #fafafa;
          border: 1px solid #eef0f3;
          margin-bottom: 16px;
        }

        .stat:last-child {
          margin-bottom: 0;
        }

        .stat strong {
          display: block;
          font-size: 36px;
          margin-bottom: 6px;
          color: #ff9828;
        }

        .stat span {
          color: #4b5563;
          font-weight: 700;
        }

        .section {
          position: relative;
          padding: 78px 0;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 36px;
        }

        .section h2 {
          font-size: clamp(32px, 4vw, 50px);
          margin: 0;
          font-weight: 950;
          color: #111827;
        }

        .section-desc {
          max-width: 560px;
          color: #6b7280;
          line-height: 1.7;
          margin: 14px 0 0;
        }

        .tools {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
        }

        .search-input {
          width: 310px;
          max-width: 100%;
          padding: 14px 18px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #111827;
          outline: none;
          box-shadow: 0 10px 26px rgba(17, 24, 39, 0.05);
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .filter {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .filter button {
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #374151;
          padding: 11px 17px;
          border-radius: 999px;
          cursor: pointer;
          font-weight: 900;
          transition: .25s ease;
        }

        .filter button:hover,
        .filter button.active {
          background: #ff9828;
          border-color: #ff9828;
          color: #fff;
        }

        .job-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .job-card {
          position: relative;
          padding: 30px;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid #ececec;
          overflow: hidden;
          transition: all 0.35s ease;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
        }

        .job-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 30px;
          width: 70px;
          height: 4px;
          background: #ff9828;
          border-radius: 999px;
        }

        .job-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 152, 40, 0.25);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
        }

        .job-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 18px;
        }

        .job-card h3 {
          font-size: 24px;
          font-weight: 800;
          line-height: 1.3;
          margin: 0 0 8px;
          color: #111827;
        }

        .job-card p {
          margin: 0;
          color: #6b7280;
          line-height: 1.8;
        }

        .job-type {
          padding: 8px 14px;
          border-radius: 999px;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          color: #374151;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 24px 0;
        }

        .tags span {
          background: #f9fafb;
          border: 1px solid #ececec;
          color: #4b5563;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }

        .apply-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding-top: 22px;
          margin-top: 22px;
          border-top: 1px solid #f1f5f9;
        }

        .details-btn {
          border: none;
          background: transparent;
          color: #111827;
          font-weight: 700;
          cursor: pointer;
          transition: .3s;
        }

        .details-btn:hover {
          color: #ff9828;
        }

        .apply-btn {
          border: none;
          background: #ff9828;
          color: white;
          padding: 11px 18px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 700;
          transition: .3s;
        }

        .apply-btn:hover {
          background: #f58212;
          transform: translateY(-2px);
        }

        .benefits {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .benefit {
          padding: 25px;
          border-radius: 28px;
          background: #fff;
          border: 1px solid #eef0f3;
          box-shadow: 0 18px 50px rgba(17, 24, 39, 0.06);
          transition: .25s ease;
        }

        .benefit:hover {
          transform: translateY(-6px);
          border-color: rgba(255,152,40,.35);
        }

        .benefit-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          margin-bottom: 18px;
          font-size: 22px;
        }

        .benefit h3 {
          color: #111827;
          margin: 0 0 10px;
        }

        .benefit p {
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
        }

        .cta {
          margin: 50px 0 84px;
          padding: 46px;
          border-radius: 34px;
          text-align: center;
          background: #fff;
          border: 1px solid #eef0f3;
          box-shadow: 0 24px 70px rgba(17, 24, 39, 0.08);
        }

        .cta h2 {
          font-size: clamp(32px, 5vw, 54px);
          margin: 0 0 14px;
          font-weight: 950;
          color: #111827;
        }

        .cta p {
          color: #6b7280;
          margin: 0 auto 28px;
          max-width: 620px;
          line-height: 1.8;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(0,0,0,.55);
          display: grid;
          place-items: center;
          padding: 20px;
        }

        .modal {
          width: min(720px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 28px;
          padding: 30px;
          background: #fff;
          color: #111827;
          border: 1px solid #eef0f3;
          box-shadow: 0 35px 100px rgba(0,0,0,.22);
        }

        .modal-head {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: start;
          margin-bottom: 22px;
        }

        .modal h2 {
          margin: 0;
          font-size: 30px;
        }

        .close-btn {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #111827;
          cursor: pointer;
          font-size: 20px;
        }

        .modal-list {
          color: #4b5563;
          line-height: 1.8;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
        }

        .form-field.full {
          grid-column: 1 / -1;
        }

        .form-field label {
          font-weight: 800;
          color: #374151;
        }

        .form-field input,
        .form-field textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #111827;
          outline: none;
        }

        .form-field textarea {
          min-height: 110px;
          resize: vertical;
        }

        .toast {
          position: fixed;
          top: 22px;
          right: 22px;
          z-index: 1000;
          padding: 14px 20px;
          border-radius: 999px;
          background: #ff9828;
          color: #fff;
          font-weight: 950;
          box-shadow: 0 18px 45px rgba(0,0,0,.2);
        }

        .empty {
          grid-column: 1 / -1;
          padding: 40px;
          text-align: center;
          border-radius: 24px;
          border: 1px solid #eef0f3;
          background: #fff;
          color: #6b7280;
        }

        @media (max-width: 900px) {
          .hero-grid,
          .job-grid,
          .benefits {
            grid-template-columns: 1fr;
          }

          .section-head {
            align-items: start;
            flex-direction: column;
          }

          .tools {
            width: 100%;
            align-items: stretch;
          }

          .filter {
            justify-content: flex-start;
          }

          .search-input {
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .hero {
            padding-top: 110px;
          }

          .hero h1 {
            letter-spacing: -1.8px;
          }

          .hero-card,
          .cta,
          .modal {
            padding: 24px;
            border-radius: 24px;
          }

          .job-top,
          .apply-row,
          .form-grid {
            grid-template-columns: 1fr;
            flex-direction: column;
            align-items: start;
          }

          .btn,
          .apply-btn {
            width: 100%;
          }
        }
      `}</style>

      <section className="hero">
        <div className="career-container hero-grid">
          <div>
            <div className="badge">
              <span className="pulse" />
              We are hiring in 2026
            </div>

            <h1>
              Build your future with a{" "}
              <span className="gradient-text">creative team</span>
            </h1>

            <p>
              Join a dedicated team of professionals working together to build
              reliable, scalable, and high-quality digital solutions.
            </p>

            <div className="hero-actions">
              <button onClick={scrollToJobs} className="btn btn-primary">
                View Open Positions
              </button>

              <button onClick={handleCvButtonClick} className="btn btn-secondary">
                Send Your CV
              </button>

              {uploadedCv && (
                <div className="cv-name">Selected file: {uploadedCv.name}</div>
              )}
            </div>
          </div>

          <div className="hero-card">
            <div className="stat">
              <strong>25+</strong>
              <span>Talented team members</span>
            </div>

            <div className="stat">
              <strong>4.8/5</strong>
              <span>Employee satisfaction</span>
            </div>

            <div className="stat">
              <strong>100%</strong>
              <span>Growth-focused culture</span>
            </div>
          </div>
        </div>
      </section>

      <section id="open-positions" className="section">
        <div className="career-container">
          <div className="section-head">
            <div>
              <h2>Open Positions</h2>
              <p className="section-desc">
                Find the role that matches your skills and ambition.
              </p>
            </div>

            <div className="tools">
              <input
                className="search-input"
                type="text"
                placeholder="Search job, location, skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="filter">
                {["All", "Full Time", "Part Time"].map((type) => (
                  <button
                    key={type}
                    className={activeType === type ? "active" : ""}
                    onClick={() => setActiveType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="job-grid">
            {filteredJobs.length === 0 ? (
              <div className="empty">No jobs found.</div>
            ) : (
              filteredJobs.map((job) => (
                <article className="job-card" key={job.id}>
                  <div className="job-top">
                    <div>
                      <h3>{job.title}</h3>
                      <p>{job.location}</p>
                    </div>

                    <span className="job-type">{job.type}</span>
                  </div>

                  <p>
                    <strong>Mode:</strong> {job.mode}
                    <br />
                    <strong>Experience:</strong> {job.experience}
                  </p>

                  <div className="tags">
                    {job.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="apply-row">
                    <button
                      type="button"
                      className="details-btn"
                      onClick={() => setSelectedJob(job)}
                    >
                      View Details
                    </button>

                    <button
                      type="button"
                      className="apply-btn"
                      onClick={() => setApplyJob(job)}
                    >
                      Apply Now
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="career-container">
          <div className="section-head">
            <div>
              <h2>Why Join Us?</h2>
              <p className="section-desc">
                A workplace designed for today’s creative professionals.
              </p>
            </div>
          </div>

          <div className="benefits">
            {benefits.map((benefit) => (
              <div className="benefit" key={benefit.title}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-container">
        <div className="cta">
          <h2>Ready to start your next chapter?</h2>
          <p>
            Send us your CV and portfolio. Our team will review your profile and
            contact you for the next step.
          </p>
          <button
            type="button"
            onClick={() => setApplyJob(jobs[0])}
            className="btn btn-primary"
          >
            Apply Today
          </button>
        </div>
      </section>

      {selectedJob && (
        <div className="modal-backdrop" onClick={() => setSelectedJob(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <h2>{selectedJob.title}</h2>
                <p className="section-desc">{selectedJob.description}</p>
              </div>

              <button className="close-btn" onClick={() => setSelectedJob(null)}>
                ×
              </button>
            </div>

            <h3>Responsibilities</h3>
            <ul className="modal-list">
              {selectedJob.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>Requirements</h3>
            <ul className="modal-list">
              {selectedJob.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="modal-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSelectedJob(null);
                  setApplyJob(selectedJob);
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {applyJob && (
        <div className="modal-backdrop" onClick={() => setApplyJob(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <h2>Apply for {applyJob.title}</h2>
                <p className="section-desc">
                  Fill out the form below and submit your application.
                </p>
              </div>

              <button className="close-btn" onClick={() => setApplyJob(null)}>
                ×
              </button>
            </div>

            <form onSubmit={handleApplySubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label>Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Portfolio / LinkedIn</label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) =>
                      setFormData({ ...formData, portfolio: e.target.value })
                    }
                  />
                </div>

                <div className="form-field full">
                  <label>Upload CV</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cv: e.target.files?.[0] || null,
                      })
                    }
                  />
                </div>

                <div className="form-field full">
                  <label>Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn btn-primary">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}