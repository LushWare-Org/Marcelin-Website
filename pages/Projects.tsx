export default function Projects() {
  const projects = [
    'THE MGH Data Center',
    'MGH Garden of Eden Project',
    'MGHR – HR and Accounting Software',
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Projects Under Development
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-center justify-center h-12 w-12 bg-cyan-500/10 rounded-lg mb-4">
                <span className="text-2xl text-cyan-400">▸</span>
              </div>
              <h3 className="text-xl font-semibold text-silver-200">{project}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
