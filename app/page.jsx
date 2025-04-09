// app/page.tsx or pages/index.tsx

export default function HomePage() {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">🏠 Welcome Home!</h1>
        <p className="text-gray-600 text-lg mb-6">
          You're on the main dashboard. Start exploring the platform or continue your application.
        </p>
      </div>
    </div>
  );
}
