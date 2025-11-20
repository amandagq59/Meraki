import './boton.css'


export const Boton = ({nombre, icono, aspecto, onClick}) => {

  return (
    <button className={aspecto} onClick={onClick}><i className={icono}></i>{nombre}</button>
  )
}