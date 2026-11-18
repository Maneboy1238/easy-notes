import { colors } from "./ color";
export function ColorPicker({ currentColorId, setCurrentColorId }) {
  return (
    <div className="flex m-auto gap-2">
      {colors.map(color => (
        <div
          key={color.id}
          style={{
            background: color.base,
            border: currentColorId === color.id && `5px solid ${color.mid}`,
          }}
          className="shadow-md size-10 rounded-full"
          onClick={() => setCurrentColorId(color.id)}>
        </div>
      ))}
    </div>
  )
}
