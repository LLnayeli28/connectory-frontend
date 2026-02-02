import { useEffect } from 'react'
import api from '../api/axios'

function TestBackend() {
  useEffect(() => {
    api.get('/vehiculos')
      .then(res => console.log('Vehiculos:', res.data))
      .catch(err => console.error(err))
  }, [])

  return <h2>Probando backend...</h2>
}

export default TestBackend
