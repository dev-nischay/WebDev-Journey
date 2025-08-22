import { Square } from "./Square"

export default function Board() {
    let squares = [1,2,3,4,5,6,7,8,9]
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        width: 'calc(3 * 2.5rem)',
        height: 'calc(3 * 2.5rem)',
        border: '1px solid #999',
      }}
    >
    {squares.map((e) => <Square value = {e}/>)}
    
    </div>
  )
}