import { colors } from "./ color";
export function ColorPicker({ setCurrentColorId }) {
  return (
    <div style={{ display: 'flex' }}>
      {colors.map(color => (
        <div
          key={color.id}
          style={{
            background: color.base,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
          }}
          onClick={() => setCurrentColorId(color.id)}>
        </div>
      ))}
    </div>
  )
}
