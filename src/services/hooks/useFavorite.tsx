import AsyncStorage from "@react-native-async-storage/async-storage";
import { MovieProps, StorageMovie } from "../../utils/interface";

export function useFavorite() {

  //Search saved movies
  async function getFavorites(): Promise<MovieProps[]> {
    let response = {} as MovieProps[];

    try {
      const storageData = await AsyncStorage.getItem('@searchMovie:favorites');
      const data = storageData ? (JSON.parse(storageData) as StorageMovie) : {};
      response = Object
        .keys(data)
        .map((item) => {
          return {
            ...data[item].data,
          }
        });
    } catch (e) {
      response = {} as MovieProps[];
    } finally {
      return response;
    }
  }
  //Save new movie
  async function addFavorites(data: MovieProps): Promise<StorageMovie> {
    let response = {};

    try {
      const storageData = await AsyncStorage.getItem('@searchMovie:favorites');
      const oldData = storageData ? (JSON.parse(storageData) as StorageMovie) : {};

      const newData = {
        [`${data.id}${data.title}`]: {
          data: data
        }
      }

      response = {
        ...newData,
        ...oldData
      }

      await AsyncStorage.setItem('@searchMovie:favorites', JSON.stringify(response));
    } catch (e) {
      response = {};
    } finally {
      return response;
    }
  }
  //Delete a movie
  async function removeFavorites(id: string): Promise<string> {
    let response = '';

    try {
      const storageData = await AsyncStorage.getItem('@searchMovie:favorites');
      const data = storageData ? (JSON.parse(storageData) as StorageMovie) : {};

      delete data[id];
      await AsyncStorage.setItem('@searchMovie:favorites', JSON.stringify(data));
      response = "Apagado com sucesso!";
    } catch (e) {
      response = "Algo deu errado!";
    } finally {
      return response;
    }
  }

  return {
    getFavorites: getFavorites,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  }
}
