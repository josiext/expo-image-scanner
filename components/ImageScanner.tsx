"use dom";

export default function DOMComponent({ name }: { name: string }) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>Hellosadfasd, {name}</h1>
    </div>
  );
}
