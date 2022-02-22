import {useState} from "react"

const useForm = () => {
    const [ data, setData ] = useState({})

    const getField = (key) => {
        return data[key] || ""
    }

    const setField = (key, value) => {
        const obj = {
            ...data
        }
        obj[key] = value
        setData(obj)
    }

    return {
        getField,
        setField
    }
}

export default useForm
