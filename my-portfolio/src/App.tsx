import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            I am a web developer with experience in building beautiful and functional websites.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-700">
                A description of my project goes here.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-700">
                A description of my project goes here.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-700">
                A description of my project goes here.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow mt-10 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
