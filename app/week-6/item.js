export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 p-4 rounded-lg shadow-md">
      <p className="font-bold text-xl mb-2">{name}</p>
      <p className="text-gray-300">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
