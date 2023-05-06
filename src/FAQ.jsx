import AccordionSection from './AccordionSection';

import './css/FAQ.css';

function FAQ() {

    return (
        <div className="FAQ">
            <h2>Frequently Asked Question (FAQ) </h2>
            <AccordionSection title="Are your products gluten-free?">
            Yes, we offer a variety of gluten-free desserts for our customers with dietary restrictions.
            </AccordionSection>
            <AccordionSection title="How do you ensure the freshness of your desserts?">
            We make all of our desserts in small batches using the freshest and highest quality ingredients available. 
            We also package our desserts carefully to ensure that they stay fresh during transit.
            </AccordionSection>
            <AccordionSection title="Do you offer delivery?">
            Yes, we offer delivery within our local area. Please check our delivery information page for more details.
            </AccordionSection>
            <AccordionSection title="Can I place a custom order for a special occasion?">
            Yes, we offer custom orders for special occasions such as birthdays, weddings, 
            and corporate events. Please contact us to discuss your specific needs.
            </AccordionSection>
            <AccordionSection title="Do you offer discounts for bulk orders?">
            Yes, we offer discounts for bulk orders. Please contact us for more information.
            </AccordionSection>
            <AccordionSection title="How long will my desserts stay fresh?">
            Our desserts are best consumed within a few days of receiving them.
            Please refer to the label on each product for specific storage instructions.
            </AccordionSection>
            <AccordionSection title="Do you offer refunds?">
            We strive to ensure that all of our customers are satisfied with their purchases. 
            If for any reason you are not satisfied with your order, please contact us and we will do our best to resolve the issue.
            </AccordionSection>
        </div>
    );
}

export default FAQ;