import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from "../../utils/accordion"

const Value = () => {
    return (
        <section className='v-wrapper'>
            <div className='v-container'>
                {/* left side */}
                <div className='v-left'>
                    <div className='image-container'>
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                {/* right side */}
                <div className=" v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to You</span>
                    <span className="secondaryText">
                        We always ready to help by providijng the best services for you.
                        <br />
                        We beleive a good place to live can make your life better
                    </span>
          <Accordion
    allowZeroExpanded
    preExpanded={[]}
>
    {data.map((item, i) => (
        <AccordionItem
            key={i}
            uuid={i}
            className="accordionItem"
        >
            <AccordionItemHeading>
                <AccordionItemButton className="accordionButton">
                    <div className="icon">{item.icon}</div>

                    <span className="primaryText">
                        {item.heading}
                    </span>

                    <div className="i-con">
                        <MdOutlineArrowDropDown size={20} />
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
                <p className="secondaryText">
                    {item.detail}
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>

                </div>
            </div>
        </section>
    )
}

export default Value

// cd real_estate_website