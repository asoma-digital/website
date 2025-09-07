// src/components/shared/SecondaryButton.jsx
import '../../styles/components/shared.css'

export default function SecondaryButton ({ buttonText, onClick }) {
    return (
        <button className="button secondary-button" onClick={onClick}>
            {buttonText}
        </button>
    )
}