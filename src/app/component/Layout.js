import ThemeToggle from './ThemeToggle';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <nav className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SoftSell</h1>
        <ThemeToggle />
      </nav>
      {children}
      <footer className="p-4 text-center text-sm">
        © {new Date().getFullYear()} SoftSell. All rights reserved.
      </footer>
    </div>
  );
}