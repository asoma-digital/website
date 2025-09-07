// src/components/shared/PrimaryButton.jsx
import '../../styles/components/shared.css'

export default function PrimaryButton ({ buttonText, onClick }) {
    return (
        <button className="button primary-button" onClick={onClick}>
            {buttonText}
        </button>
    )
}