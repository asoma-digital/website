// src/components/shared/SecondaryButton.jsx
import '../../styles/components/shared.css'

export default function SecondaryButton ({ buttonText }) {
    return (
        <button className="button secondary-button">
            {buttonText}
        </button>
    )
}