import { useState, useEffect } from 'react'

export const useAsync = (funcion, parametroAEscuchar = []) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        funcion().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
        
    }, parametroAEscuchar)

    return {
        isLoading,
        data,
        error
    }
}