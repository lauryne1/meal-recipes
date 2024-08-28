import axios from 'axios'


export interface Category {
  id: number
  label: string
  thumbnail: string
}


export interface Area {
  id: number
  label: string
}


export interface Meal {
  id: number
  name: string
  category: {
    id: number
    label: string
  }
  area: {
    id: number
    label: string
  }
  thumbnail: string
  ingredients: Array<{
    label: string
    measure: string
  }>
}


export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await axios.get('https://meals.kokoko.tech/categories')
    console.log('API response for categories:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}


export async function fetchAreas(): Promise<Area[]> {
  try {
    const response = await axios.get('https://meals.kokoko.tech/areas')
    console.log('API response for areas:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching areas:', error)
    return []
  }
}


export async function login(username: string, password: string) {
  try {
    const response = await axios.post('https://meals.kokoko.tech/login', {
      username,
      password
    })
    if (response.status === 200 && response.data?.token !== null) {
      localStorage.setItem('token', response.data.token)
    }
    return true
  } catch (error) {
    return false
  }
}


export async function signin(username: string, password: string) {
  try {
    const response = await axios.post('https://meals.kokoko.tech/register', {
      username,
      password
    })
    console.log('logindata', response.data)
    return response.data
  } catch (error) {
    return []
  }
}
export async function searchMeals(
  term: string,
  category?: number,
  area?: number,
  limit: number = 10,
  offset: number = 0
): Promise<{ items: Meal[]; count: number }> {
  try {
    const params: any = {
      search: term,
      category,
      area,
      limit,
      offset
    }


    Object.keys(params).forEach((key) => {
      if (params[key] === undefined) {
        delete params[key]
      }
    })


    const response = await axios.get('https://meals.kokoko.tech/meals', { params })
    console.log('API response for meals:', response.data)
    const { items, count } = response.data
    return { items, count }
  } catch (error) {
    console.error('Error fetching meals:', error)
    return { items: [], count: 0 }
  }
}



export async function pagination(
  limit: number = 10,      
  offset: number = 0      
): Promise<{ items: Meal[]; count: number }> {
  try {
    const params = { limit, offset }

    const response = await axios.get('https://meals.kokoko.tech/meals', { params })
    console.log('!#$^&*', response.data)

    const { items, count } = response.data

    return { items, count }
  } catch (error) {
    console.error(')(*&%', error)
    return { items: [], count: 0 }
  }
}

