function ShoppingItem({ data }) {
  const { title, done } = data;

  return (
    <li className={done ? 'done' : ''}>{title}</li>
  )
}

export default ShoppingItem;