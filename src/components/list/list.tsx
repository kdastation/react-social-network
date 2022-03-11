import { memo } from "react"

interface ListProps<T>{
    items: T[],
    renderItem: (item: T) => React.ReactNode
}

function List<T>(props: ListProps<T>): JSX.Element{
    const {items, renderItem} = props
    return (
        <div>
           {items.map(renderItem)}
        </div>
    )
}


const ListMemo = memo(List)

export{List, ListMemo}