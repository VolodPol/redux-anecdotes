import { doFilter } from "../reducers/filterReducer.js";
import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch()

    const updateFilter = ({ target }) => {
        dispatch(doFilter(target.value))
    }

    return (
        <div>
            <input name="filter" type="text" onChange={updateFilter}/>
        </div>
    )
}

export default Filter