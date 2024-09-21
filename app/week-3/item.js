export default function Item(props) {
    return (
        <section className="ml-7 mb-3 bg-auto bg-slate-800 w-1/3 p-2">
            <h2 className="text-xl font-bold">{props.name}</h2>
            <p>Buy {props.quantity} in {props.category}</p>
        </section>
    );
}