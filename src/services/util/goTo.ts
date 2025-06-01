export default function goTO(to: string, out: boolean) {
  const a = document.createElement("a");
  a.href = to;
  if (out) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  } else {
    a.click();
  }
}
