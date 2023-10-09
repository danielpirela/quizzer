const URL = "https://jsonplaceholder.typicode.com/posts"


	export const fetchData = async () => {
		const response = await fetch('/api/quiz',{
			method: 'POST',
			headers: {
				"content-type": "application/json"
				}
		})
		const data = await response.json()
		return data
	}
