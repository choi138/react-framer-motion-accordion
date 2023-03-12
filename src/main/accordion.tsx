import * as S from "./styled"
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { ITEM_LIST } from "../constant/item";
import { useState } from "react";

const Accordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <LayoutGroup>
                <S.Container>
                    <motion.ul
                        layout
                        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        {ITEM_LIST.map((item) => (
                            <>
                                <S.ItemWrap onClick={toggleOpen} layout transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}>
                                    <motion.h1>{item.title}</motion.h1>
                                    <S.Img><img src={item.img} alt={item.title} /></S.Img>
                                </S.ItemWrap>
                                <AnimatePresence>
                                    {isOpen && (
                                        <S.SubWrap>
                                            <motion.h5 layout
                                                initial={{ y: -10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
                                            >{item.subtitle}</motion.h5>
                                        </S.SubWrap>
                                    )}
                                </AnimatePresence>
                            </>
                        ))}
                        <h4>hello</h4>
                    </motion.ul>
                </S.Container>
            </LayoutGroup>
        </>
    );
}

export default Accordion;