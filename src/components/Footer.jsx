export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center space-y-2 text-sm">
        <p>© {new Date().getFullYear()} asoma digital LTD</p>
        <p>
          Email:{" "}
          <a href="mailto:malia@asoma.app" className="text-primary-600 underline">
            malia@asoma.app
          </a>
        </p>
      </div>
    </footer>
  );
}