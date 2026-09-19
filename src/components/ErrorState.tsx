import type { ErrorStateProps } from "../types/errorStateProps"

function ErrorState({ message, onRetry }: ErrorStateProps) {
    return (
        <section className="error-state" role="alert">
            <p>{message}</p>
            <button type="button" onClick={onRetry}>
                Reintentar
            </button>
        </section>
    )
}

export default ErrorState