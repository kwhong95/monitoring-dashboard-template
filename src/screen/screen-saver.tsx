interface ScreenSaverProps {
  onClick: () => void
}

const ScreenSaver: React.FC<ScreenSaverProps> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      SCREEN SAVER
    </div>
  )
}

export default ScreenSaver;