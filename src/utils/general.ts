export const checkClassInComposedPath = (event: any, className: string) => {
  const path = event.composedPath();
  return path.some((el: HTMLElement) => el.classList?.contains(className));
};

export const prepareMarksForSave = (marks: any[]) => {
  return marks.map((m) => {
    const element = m.element?.innerHTML?.substr(0, 50);
    return { ...m, element };
  });
};

export const initDOM = () => {
  const contentWrapper = document.createElement("div");
  contentWrapper.id = "content-wrapper-for-me";
  const bigContainer = document.querySelector("#feedbug-root");
  const footer = document.querySelector(".feedbug-footer");
  const sidebar = document.querySelector(".feedbug-sidebar");
  const body = document.querySelector("body");
  const c = document.createElement("div");
  c.id = "fooooooter";
  bigContainer.appendChild(c);
  // bigContainer.appendChild(footer);
  const copy = Object.assign(bigContainer, {});

  Array.from(body.children).forEach((c) => {
    contentWrapper.appendChild(c);
  });
  contentWrapper.removeChild(bigContainer);
  copy.appendChild(contentWrapper);
  body.appendChild(copy);
};
