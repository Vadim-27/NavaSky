'use client';

import { SyntheticEvent, useState } from 'react';
import services from '../services';
import AccordionItem from '../AccordionItem';

const Accordion = () => {
    const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

    const handleChange = (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
        setExpandedPanel(isExpanded ? panel : false);
    };

    return (
        <>
            {services.map((service) => (
                <AccordionItem
                    key={service.label}
                    expandedPanel={expandedPanel}
                    onChange={handleChange}
                    {...service}
                />
            ))}
        </>
    );
};

export default Accordion;
