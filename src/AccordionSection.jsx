import { useState } from 'react';

import './css/AccordionSection.css';

function AccordionSection({ title, children}) {

    const [isOpen, setIsOpen] = useState(false);
    const openClass = isOpen ? "accordion-button-open" : "";

    return (
        <div className="accordion">
            <button 
                className={`accordion-button ${openClass}`}
                onClick={ () => setIsOpen(!isOpen) }
                aria-expanded={ isOpen ? "true" : "false"}
            >
                <span>{title}</span>
            </button>
            { isOpen && (<div className="accordion-content">
                {children}
            </div>
            ) }
        </div>
    );
}

export default AccordionSection;