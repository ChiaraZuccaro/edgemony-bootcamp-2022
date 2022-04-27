import "./add.css"
import { Input } from "./Input/input"

export const AddMovie = () => {

    const addNew = () => {

    }

    return(
        <form onSubmit={addNew} className="form-add">
            <Input info={"Title"}/>
            <Input info={"Year"}/>
            <Input info={"Description"}/>
            <Input info={"Genre"}/>
        </form>
    )
}