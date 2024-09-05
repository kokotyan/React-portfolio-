import React, { useState } from "react";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // ここで送信処理を追加できます。たとえば、メール送信やAPIリクエストなど
  };

  return (
    <div
      className="min-h-screen bg-gray-100 text-gray-800"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#"
                className="text-2xl font-bold text-indigo-600 hover:bg-blue-50 rounded-md p-2"
              >
                Koko's Portfolio
              </a>
            </div>
            <div className="hidden sm:flex sm:space-x-8 sm:items-center">
              {/* Links */}
              {["About Me", "Skills", "Productions", "Contact","Updates"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase().replace(" ", "")}`}
                    className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium hover:bg-blue-50 rounded-md p-2"
                  >
                    {section}
                  </a>
                )
              )}
              <a
                href="https://github.com/kokotyan"
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium hover:bg-blue-50 rounded-md p-2"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.868 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.893 1.53 2.341 1.088 2.91.832.092-.648.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.985 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.844c.853.004 1.71.115 2.511.338 1.91-1.294 2.75-1.025 2.75-1.025.545 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.683 0 3.841-2.338 4.687-4.565 4.936.36.31.68.921.68 1.855 0 1.338-.012 2.419-.012 2.75 0 .268.18.579.688.481C19.136 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
            <div className="flex sm:hidden items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none hover:bg-blue-50"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`sm:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              "About Me",
              "Skills",
              "Productions",
              "Updates",
              "Contact",
              "GitHub",
            ].map((section) => (
              <a
                key={section}
                href={
                  section === "GitHub"
                    ? "https://github.com/kokotyan"
                    : `#${section.toLowerCase().replace(" ", "")}`
                }
                className="block text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-10">
        {/* About Me Section */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">
            2001年2月7日に石川のさきっぽ、珠洲で産声を上げた。空と音楽、それと美味しい食べ物が好き。
          </p>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill items */}
          </div>
        </section>

        {/* Productions Section */}
        <section
          id="productions"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Productions</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Production items */}
          </div>
        </section>

        {/* Updates Section */}
        <section
          id="updates"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Updates</h2>
          <div className="mt-4 space-y-4">{/* Update items */}</div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          {submitted ? (
            <p className="mt-4 text-green-600">Thank you for your message!</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
              >
                Send Message
              </button>
            </form>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Koko's Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
