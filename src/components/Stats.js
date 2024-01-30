export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to you packing list 🚀</em>
      </p>
    );

  let numItems = items.length;
  let numPacked = items.filter((item) => item.packed).length;
  let percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! We are ready to go. ✈"
          : `💼 You have ${numItems} items on your list and you have packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
