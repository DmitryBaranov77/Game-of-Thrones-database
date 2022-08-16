export default class GotService {
	url = 'https://www.anapioficeandfire.com/api';

	getResource = async (url) => {
		const res = await fetch(`${this.url}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}

		return await res.json();
	}

	getAllCharacters = async (page) => {
		const result = await this.getResource(`/characters?page=${page}&PageSize=10`);
		return result.map(this._transformCharacter);
	}

	getCharacter = async (id) => {
		const result = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(result);
	}

	getAllBooks = async (page) => {
		const result = await this.getResource(`/books?page=${page}&pageSize=10`);
		return result.map(this._transformBook);
	}

	getBook = async (id) => {
		const result = await this.getResource(`/books/${id}`);
		return this._transformBook(result);
	}

	getAllHouses = async (page) => {
		const result = await this.getResource(`/houses?page=${page}&pageSize=10`);
		return result.map(this._transformHouse)
	}

	getHouse = async (id) => {
		const result = await this.getResource(`/houses/${id}`);
		return this._transformHouse(result);
	}

	_extractId = (item) =>{
		const idRegExp = /\/([0-9]*)$/;
		return Number(item.url.match(idRegExp)[1]);
	}

	isSet(data){
		return data ? data : 'no data >:[';
	}

	_transformCharacter = (char) =>{
		return {
			id: this._extractId(char),
			name: this.isSet(char.name),
			gender: this.isSet(char.gender),
			born: this.isSet(char.born),
			died: this.isSet(char.died),
			culture: this.isSet(char.culture),
		}
	}

	_transformHouse = (house) => {
		return {
			id: this._extractId(house),
			name: this.isSet(house.name), 
			region: this.isSet(house.region),
			words: this.isSet(house.words),
			titles: this.isSet(house.titles),
			overlord: this.isSet(house.overlord),
			ancestralWeapons: this.isSet(house.ancestralWeapons),
		}
	}

	_transformBook = (book) => {
		return {
			id: this._extractId(book),
			name: this.isSet(book.name),
			numberOfPages: this.isSet(book.numberOfPages),
			publisher: this.isSet(book.publisher),
			released: this.isSet(book.released),
		}
	}
}