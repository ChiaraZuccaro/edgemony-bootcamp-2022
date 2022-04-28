import { useEffect, useState } from "react"
import { FormMovie } from "../../components/FormMovie/formMovie"
import { Modal } from "../../components/Modal/modal";
import "./add.css"



export const AddMovie = () => {
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setModalActive(false);
        }, 3500);
    }, [modalActive]);

    return (
        <div className="add-page">
            <h2>Add a new movie</h2>
            <FormMovie modalVisibility={setModalActive} action="POST"/>
            <Modal visibility={modalActive} message="Movie correctly added!"/>
        </div>
    )
}