import { Input } from "../../components/FormMovie/Input/input"
import { CardList } from "../../components/CardList/cardlist"

import "./home.css"
import { useState } from "react"

export const Home = ({ alert, message }) => {
    const [search, setSearch] = useState("");

    const receiveSearch = (value) => {
        setSearch(value);
    }
    return (
        <div className="home">
            <Input info={"Search by title or genre"} user={receiveSearch}/>
            <CardList searchItem={search} alert={alert} message={message}/>
        </div>
    )
}