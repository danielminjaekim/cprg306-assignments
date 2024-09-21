import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="font-black text-3xl m-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}