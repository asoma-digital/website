// src/components/shared/PrimaryButton.jsx
import '../../styles/components/shared.css'

export default function PrimaryButton ({ buttonText }) {
    return (
        <button className="button primary-button">
            {buttonText}
        </button>
    )
}