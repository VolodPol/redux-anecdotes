import { filterAction } from "../reducers/filterReducer.js";
import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch()

    const updateFilter = ({ target }) => {
        dispatch(filterAction(target.value))
    }

    return (
        <div>
            <input name="filter" type="text" onChange={updateFilter}/>
        </div>
    )
}

export default Filter