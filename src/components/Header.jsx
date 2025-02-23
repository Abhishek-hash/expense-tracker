// src/components/Header.jsx
const Header = () => (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Expense Tracker</h1>
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full w-10 h-10"
        />
      </div>
    </header>
  );
  
  export default Header;
  