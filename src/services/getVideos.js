const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f8679b8440msh1a5dbfbd5fe02b9p160aeejsnbcb3742a461f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}
export const fetchFromApi = async ({ query }) => {
  const url = `${BASE_URL}/${query}`
  try {
    const response = await fetch(url, options)
    if (!response.ok) throw new Error('error en la peticion')
    const results = await response.json()
    return results.items ?? []
  } catch (error) {
    console.error(error)
  }
}
