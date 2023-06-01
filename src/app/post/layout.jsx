import { Counter } from "./Counter"

export default function PostLayout({children}) {
    return (
        <div>
            <h1>Este es el layout de los post</h1>
            <Counter />
            {children}
        </div>
    )
}