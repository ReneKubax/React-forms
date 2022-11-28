import { useRef } from "react"

const FormNoControlado = () => {

   const formulario = useRef(null)
   const handleSubmit = (e) => {
    e.preventDefault();
    const datos = new FormData(formulario.current)
    console.log(...datos.entries())
    const objetoDatos = Object.fromEntries([...datos.entries()])
    console.log(objetoDatos)
    const {todoDescripcion, todoName} = objetoDatos
    if(!todoDescripcion.trim() || !todoName.trim()){
        console.log("NMooo esta vacio")
        return
    }
    console.log('paso validaciones')
   }



  return (
    <div>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Ingrese Todo"
      name="todoName"
      className="form-control mb-2"
      defaultValue="Tarea #1"
      />
      <textarea 
      name="todoDescripcion"
      className="form-control mb-2"
      placeholder="Ingrese descripcion del todo"
      defaultValue="Descripcion de la Tarea #1"
      />
      <select name="todoEstado"
             className="form-control mb-2"
             defaultValue="pendiente"
      >
      <option value="">Pendiente</option>
      <option value="">Completada</option>
      </select>
      <button  className="btn btn-primary">Agregar</button>
      </form>
    </div>
  )
}

export default FormNoControlado
