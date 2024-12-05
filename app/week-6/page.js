import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="font-bold text-3xl mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
