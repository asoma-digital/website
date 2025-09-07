import '../../styles/pages/homepage.css';

import { PrimaryButton, SecondaryButton } from '../../components/shared';
import { PageTitle } from '../../components/shared/typography';

import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className='hero'>
            <div className='hero-text'>
                <PageTitle text="stay connected. stay focused." />
                <p>clarifi by asoma digital LTD empowers ADHD students with science-backed tools for focus, time management, and self advocacy, </p>
            </div>
            <div className='hero-buttons'>
                <PrimaryButton buttonText="Join the beta" onClick={() => navigate('/beta')}/>
                <SecondaryButton buttonText="Learn more" onClick={() => navigate('/about')}/>
            </div>
        </div>
    );
}