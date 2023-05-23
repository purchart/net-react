import { useEffect , useState }from 'react'
import axios from 'axios'

export default function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setbooks] = useState([])
    const [hasMore, setHasMore] = useState()

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setbooks(prevBooks => {
                return [...new Set([...prevBooks, res.data.results.map(b => b.name)])]
            })
            setHasMore(res.data.results.length > 0)
            setLoading(false)
            console.log(res.data.results)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber])
  return { loading, error, books, hasMore }
}
