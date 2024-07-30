import { useState } from 'react';

function App() {
    const stepMessages = ['Dream', 'Believe', 'Achieve'];
    const [step, setStep] = useState(1);
    const [open, setOpen] = useState(false);

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleOpen = () => {
        setOpen(!open);
        setStep(1);
    };

    return (
        <>
            <button className='close' onClick={handleOpen}>
                &times;
            </button>
            {!open && (
                <div className='steps'>
                    <div className='numbers'>
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                    </div>
                    <p className='message'>
                        Step {step}: {stepMessages[step - 1]}
                    </p>
                    <div className='buttons'>
                        <button
                            style={{ backgroundColor: '#526d82', color: '#fff' }}
                            onClick={handlePrev}
                        >
                            Prev
                        </button>
                        <button
                            style={{ backgroundColor: '#526d82', color: '#fff' }}
                            onClick={handleNext}
                            disabled={step >= 3 ? true : false}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
