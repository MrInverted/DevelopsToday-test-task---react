import ListItem from "./ListItem";

interface IProps {
  data: IAllData[];
}



function List({ data }: IProps) {
  return (
    <>
      <ul className="flex flex-col gap-2">
        {data.map((el, i) => (
          <ListItem key={el.name} index={i + 1} {...el} />
        ))}
      </ul>
    </>
  )
}

export default List