import axios from 'axios'
export interface Category {
  id: number
  label: string
}

export interface Area {
  id: number
  label: string
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const { data, status } = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    )

    return data.meals.map(
      (
        el: {
          strCategory: string
        },
        index: number
      ) => {
        return {
          id: index + 1,
          label: el.strCategory
        }
      }
    )
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function fetchAreas(): Promise<Area[]> {
  try {
    const { data, status } = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    )
    // console.log('_)(*&^', data)
    return data.meals.map(
      (
        el: {
          strArea: string
        },
        index: number
      ) => {
        return {
          id: index + 1,
          label: el.strArea
        }
      }
    )
  } catch (error) {
    console.error(error)
    return []
  }
}
