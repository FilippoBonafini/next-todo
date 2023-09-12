"use client"


type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void
}

export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
    const handleDelete = () => {
        // Chiedi all'utente conferma prima di eliminare l'elemento.
        if (window.confirm('Sei sicuro di voler eliminare questo elemento?')) {
            deleteTodo(id); // Chiama la funzione deleteTodo se l'utente conferma l'eliminazione.
        }
    };

    return (
        <li className="flex gap-1 items-center">
            <input
                id={id}
                type="checkbox"
                className="cursor-pointer peer"
                defaultChecked={complete}
                onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <label
                htmlFor={id}
                className={`peer-checked:${complete ? 'line-through text-slate-500' : 'text-black'}`}
            >
                {title}
            </label>
            <button
                type="button" // Utilizza type="button" per evitare il submit automatico del form
                className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                onClick={handleDelete} // Chiama la funzione handleDelete quando si fa clic sul pulsante "cancella"
            >
                Cancella
            </button>
        </li>
    );
}