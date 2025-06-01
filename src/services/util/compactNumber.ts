export default function compactNumberUSA(number: number) {
  const compactedNumber = number.toLocaleString("en-US", {
    notation: "compact",
    compactDisplay: "short",
  });
  return compactedNumber;
}
