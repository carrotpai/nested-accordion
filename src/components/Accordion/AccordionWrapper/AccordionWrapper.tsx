import { ReactNode, useRef, useState } from "react";
import { AccordionContext } from "../AccordionContext.ts";
import { Node } from "../types.ts";

interface AccordionWrapperProps {
  children: ReactNode;
}

function AccordionWrapper({ children }: AccordionWrapperProps) {
  const accordionNodes = useRef<Map<number, Node>>(new Map());

  const nextFreeId = useRef({ value: 0 });
  const [version, setVersion] = useState(0);

  const addNode = (currentHeight: number, scrollHeight: number) => {
    setVersion(value => value + 1);
    accordionNodes.current.set(nextFreeId.current.value, { currentHeight, scrollHeight, id: nextFreeId.current.value });
    nextFreeId.current.value += 1;
  };

  //Для хранения id и мапа нодов используется ссылочные типы в рефах, для апдейта всех аккордионов нужен стейт, можно сказать это костыль
  const increaseVersion = () => {
    setVersion(value => value + 1);
  };


  // id аккордионам присваиваются в useEffect'ах, что означает,
  // что useEffect root аккордиона будет вызван последним, и самой большой id будет иметь root аккодион,
  // этот id будет условием выхода для обхода дерева вверх
  const getRootId = () => {
    const values = Array.from(accordionNodes.current.values());
    return values.reduce((prev, current) => {
      if (current.id > prev) {
        return current.id;
      }
      return prev;
    }, 0);
  };

  return (
    <AccordionContext.Provider
      value={{
        accordionNodes: accordionNodes.current,
        nextFreeId: nextFreeId.current,
        version: version,
        addNode: addNode,
        increaseVersion,
        getRootId
      }}>
      {children}
    </AccordionContext.Provider>
  );
}

export default AccordionWrapper;