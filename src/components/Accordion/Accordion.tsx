import { useContext, useEffect, useRef, useState } from "react";

import { ICaptionWrapperProps } from "./types";
import { Container } from "./Container/Container.tsx";
import { AccordionContext } from "./AccordionContext.ts";
import { findParentAccordionIds } from "./utils/DOMUtil.ts";

export const Accordion = ({ children, title, background }: ICaptionWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionId = useRef<number>();
  const ref = useRef<HTMLDivElement>(null!);
  const { accordionNodes, nextFreeId, addNode, increaseVersion, getRootId } = useContext(AccordionContext);


  //Устанавливаем id аккордиону и добавляем node с информацией о высоте
  useEffect(() => {
    accordionId.current = nextFreeId.value;
    const scrollHeight = ref.current.scrollHeight;
    addNode?.(isOpen ? scrollHeight : 0, scrollHeight);
  }, []);

  //Получение id и высоты в пикселях для нода данного аккордиона
  const { height, id: dataId } = getNode();

  function handleClick() {
    setIsOpen(open => !open);
    if (accordionId.current === undefined) {
      console.warn("accordionId wasn't set");
      return;
    }

    //текущий нод
    const node = accordionNodes.get(accordionId.current);
    if (!node) throw new Error(`HandleClick: node wasn't created fot given id: ${accordionId.current}`);
    //Достаем id родительских аккордеонов
    const parentIds = findParentAccordionIds(getRootId(), ref.current);
    //Вычисляем разницу для текущего нода в высоте между открытым и закрытым состоянием
    const heightDiff = !isOpen ? ref.current.scrollHeight : -1 * ref.current.scrollHeight;
    //Добавляем эту разницу на нод, чтобы изменить высоту контейнера
    node.currentHeight += heightDiff;
    //Для всех родительских аккодионов также добавим разницу в высоте (они же вложенные как-бы)
    parentIds.forEach((id) => {
      const parentNode = accordionNodes.get(id);
      if (parentNode) {
        parentNode.currentHeight += heightDiff;
      }
    });

    //увеличить версию дерева, чтобы произвести ререндер всего, что лежит внутри контектста
    increaseVersion?.();
  }

  //Утилита для получения высоты в пикселях
  function getNode() {
    if (accordionId.current === undefined || !accordionNodes.has(accordionId.current)) return {
      height: isOpen ? "auto" : "0px",
      id: nextFreeId.value
    };
    return {
      height: isOpen ? `${accordionNodes.get(accordionId.current)?.currentHeight}px` : "0px",
      id: accordionId.current
    };
  }

  //Важно передать dataId для того чтобы оно накинулось на div представляющий контейнер аккордеона
  return (
    <>
      <button onClick={handleClick}>{title}</button>
      <Container background={background} height={height} ref={ref} dataId={dataId}>{children}</Container>
    </>
  );
};
