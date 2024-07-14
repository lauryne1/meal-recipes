

import { defineStore } from 'pinia';
import { fetchCategories } from '../api/index';
import { fetchAreas } from '../api/index'


export interface Category {
  id: number;
  label: string;
}

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [] as Category[],
  }),
  actions: {
    async loadCategories() {
      try {
        this.categories = await fetchCategories();
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    },
  },
});


export interface Area {
  id: number
  label: string
}

export const useAreaStore = defineStore('area', {
  state: () => ({
    areas: [] as Area[]
  }),
  actions: {
    async loadAreas() {
      try {
        this.areas = await fetchAreas()
      } catch (error) {
        console.error('Failed to load areas:', error)
      }
    }
  }
})
