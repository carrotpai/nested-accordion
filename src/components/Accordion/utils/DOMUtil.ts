
//Обход нодом с поиском специльного аттрибута data-acc-id, который мы накинули на аккордеоны
export function findParentAccordionIds(rootId: number, Element: HTMLDivElement): number[] {
  const result: number[] = [];


  let processedElement: HTMLElement | null = Element
  while (processedElement) {
    processedElement = getParentElementWithDataId(processedElement)
    if (!processedElement) {
      break
    }
    const dataId = processedElement?.getAttribute("data-acc-id");
    if (!dataId) throw new Error(`data-acc-id empty value on ${processedElement}`)
    result.push(Number(dataId))
    if (Number(dataId) === rootId) {
      break
    }
  }
  return result
}

function getParentElementWithDataId(Element: HTMLElement) {
  let currentElement = Element.parentElement;
  while(!currentElement?.hasAttribute("data-acc-id")) {
    if (!currentElement?.parentElement) return null
    currentElement = currentElement.parentElement
  }
  return currentElement
}

