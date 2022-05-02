import { useEffect, useState } from "react"
import { FormMovie } from "../../components/FormMovie/formMovie"
import { Modal } from "../../components/Modal/modal";
import "./add.css"



export const AddMovie = ({ alert, message }) => {
    // const [modalActive, setModalActive] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setModalActive(false);
    //     }, 3500);
    // }, [modalActive]);

    return (
        <div className="add-page">
            <h2>Add a new movie</h2>
            <FormMovie alertVisibility={alert} message={message} action="POST"/>
            {/* <Modal visibility={modalActive} message="Movie correctly added!"/> */}
        </div>
    )
}