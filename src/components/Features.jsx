const features = [
  {
    title: 'Adaptive Pomodoro',
    description: 'Customizable focus sprints that learn from your rhythm.',
  },
  {
    title: 'Top-3 Task Flow',
    description: 'Night-before planning, morning review, and evening check-off reminders.',
  },
  {
    title: 'Insight Dashboard',
    description: 'Visualize focus patterns, streaks, and productivity insights.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 shadow rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}