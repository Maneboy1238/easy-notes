export function ColorPicker({ setCurrentColor }) {
  const colors = [
    {
      id: '1',
      text: 'hsl(40, 25%, 15%)',
      button: 'hsl(40, 25%, 35%)',
      background: 'hsl(40, 40%, 96%)'
    },
    {
      id: '2',
      text: 'hsl(340, 45%, 18%)',
      button: 'hsl(340, 45%, 40%)',
      background: 'hsl(340, 55%, 96%)'
    },
    {
      id: '3',
      text: 'hsl(145, 35%, 15%)',
      button: 'hsl(145, 35%, 32%)',
      background: 'hsl(145, 35%, 95%)'
    },
    {
      id: '4',
      text: 'hsl(215, 50%, 17%)',
      button: 'hsl(215, 50%, 38%)',
      background: 'hsl(215, 55%, 96%)'
    },
  ]
  function handleColorPicker(id) {
    const currentColor = colors.find(color => color.id === id);
    setCurrentColor(currentColor)
  }
  return (
    <>
      {colors.map(color => (
        <div
          key={color.id}
          style={{
            background: color.button,
            width: '50px',
            height: '50px',
            borderRadius: '50%'
          }}
          onClick={() => handleColorPicker(color.id)}>
        </div>
      ))}
    </>
  )
}
